function loopToVoicing(loop, loopLength, mode, currentSynth){
    //// console.log(loop)

    // pick Key:
    let tonic = undefined
    if (settings.tonic !== 'auto'){
        if (settings.tonic.length > 2){tonic = settings.tonic.substring(0,2)}
        else {tonic = settings.tonic}
    }
    else {
        tonic = autoTonic()
    }

    // generate keyRange:
    let allNotes = undefined
    if (mode == 'major' && ['C','C#','G','D','A','E','B','F#'].includes(tonic)){
        allNotes = allNotesSharp
    }
    else if (mode == 'major'){
        if (tonic == 'G#'){tonic = 'Ab'}
        else if (tonic == 'D#'){tonic = 'Eb'}
        else if (tonic == 'A#'){tonic = 'Bb'}
        allNotes = allNotesFlat
    }
    else if (mode == 'minor' && ['A','E','B','F#','C#','G#'].includes(tonic)){
        allNotes = allNotesSharp
    }
    else if (mode == 'minor'){
        if (tonic == 'A#'){tonic = 'Bb'}
        else if (tonic == 'E#'){tonic = 'F'}
        else if (tonic == 'D#'){tonic = 'Eb'}
        allNotes = allNotesFlat
    }
    // // console.log(tonic)


    if (['C','C#','G','G#','D','D#','A','A#','E','E#','B','B#','F#'].includes(tonic)){allNotes = allNotesSharp}
    else {allNotes = allNotesFlat}
    let tonicIndex = allNotes.indexOf(allNotes.find((note) => note.substring(0, note.length - 1) == tonic))
    let keyRange = []
    for (let i = 0; i < 12; i++){
        keyRange.push(allNotes[tonicIndex + i].substring(0, allNotes[tonicIndex + i].length - 1))
    }
    if (keyRange.includes('C') && keyRange.includes('C#')){
        let index = keyRange.indexOf('C')
        keyRange[index] = 'B#'
    }
    else if (keyRange.includes('Cb') && keyRange.includes('C')){
        let index = keyRange.indexOf('Cb')
        keyRange[index] = 'B'
    }
    let indexOfOctaveReset = keyRange.indexOf(keyRange.find((note) => note.includes('C')))
    // // console.log(keyRange)
    // generate corresponding chromSolfege: 
    let chromSolfege = undefined 
    let notChromSolfege = undefined
    if (mode == 'major'){
        chromSolfege = chromaticAscending
        notChromSolfege = chromaticDescending
    }
    else if (mode == 'minor'){
        chromSolfege = chromaticDescending
        notChromSolfege = chromaticAscending
    }

    // 1) Pick random solfege from first chord in loop:
    let topNotes = []
    let topSolfege = []
    topSolfege.push(loop[0].solfege.flat()[Math.floor(Math.random() * loop[0].solfege.flat().length)])

    // 2) pick octave to start:
    let octave = undefined 
    let allOctaves = []

    if (['Vintage Pad', 'From Dust'].includes(currentSynth.synthName)){octave = 4}
    else if (['Dark Surge'].includes(currentSynth.synthName)){octave = 5}
    else if (Math.floor(Math.random()*2) == 0){octave = 4}
    else {octave = 5}
    allOctaves.push(octave)

    // add first topNotes:
    let index = chromSolfege.indexOf(topSolfege[0])
    if (index == -1){index = notChromSolfege.indexOf(topSolfege[0])}
    topNotes.push(keyRange[index] + octave)

    // 3) ADDING THE NEXT TOPNOTES:

    let C = keyRange.indexOf(keyRange.find((note) => note.includes('C')))
    for (let l = 0; l < loopLength - 1; l++){
        // pick up or down:
        // eventually, make it only go up if last octave was 3 or down if last octave was 6.
        // // console.log(allOctaves[l])
        let direction = undefined 
        if (allOctaves[l] == '3'){direction = 'up'} 
        else if (allOctaves[l] == '6'){direction = 'down'}
        else if (Math.floor(Math.random()*2) == 0){direction = 'up'}
        else {direction = 'down'}
        // // console.log(direction)
        // 4) find solfege from next chord nearest to last topSolfege:
        let subtraction = []
        for (let i = 0; i < loop[l + 1].solfege.flat().length; i++){
            // will need to remove errors when the solfege is not in chromSolfege, like for borrowed/secondary chords
            if (direction == 'down'){
                let upper = chromSolfege.indexOf(topSolfege[l])
                let lower = chromSolfege.indexOf(loop[l + 1].solfege.flat()[i])
                if (upper == -1){upper = notChromSolfege.indexOf(topSolfege[l])}
                if (lower == -1){lower = notChromSolfege.indexOf(loop[l + 1].solfege.flat()[i])}

                subtraction.push(upper - lower)
            }
            else if (direction == 'up'){
                let upper = chromSolfege.indexOf(loop[l + 1].solfege.flat()[i])
                let lower = chromSolfege.indexOf(topSolfege[l])
                if (upper == -1){upper = notChromSolfege.indexOf(loop[l + 1].solfege.flat()[i])}
                if (lower == -1){lower = notChromSolfege.indexOf(topSolfege[l])}

                subtraction.push(upper - lower)
            }
            
        }
        // remove negative values from subtraction and pick smallest, unless all values are negative, then make them
        // all positive and pick largest:  
        let indexOfNextSolfege = undefined
        if (subtraction.some((value) => value >= 0)){
            for (let i = 0; i < subtraction.length; i++){
                if (subtraction[i] < 0){subtraction.splice(i, 1, 100)}
            }
            // pick smallest
            // // console.log('smallest:')
            // // console.log(subtraction)
            // // console.log(Math.min(...subtraction))
            indexOfNextSolfege = chromSolfege.indexOf(loop[l + 1].solfege.flat()[subtraction.indexOf(Math.min(...subtraction))])
            if (indexOfNextSolfege == -1){
                indexOfNextSolfege = notChromSolfege.indexOf(loop[l + 1].solfege.flat()[subtraction.indexOf(Math.min(...subtraction))])
            }
        }
        else {
            for (let i = 0; i < subtraction.length; i++){
                subtraction[i] = subtraction[i]*-1
            }
            // pick largest
            // // console.log('largest:')
            // // console.log(subtraction)
            // // console.log(Math.max(...subtraction))
            indexOfNextSolfege = chromSolfege.indexOf(loop[l + 1].solfege.flat()[subtraction.indexOf(Math.max(...subtraction))])
            if (indexOfNextSolfege == -1){
                indexOfNextSolfege = notChromSolfege.indexOf(loop[l + 1].solfege.flat()[subtraction.indexOf(Math.max(...subtraction))])
            }
        }
        // // console.log(indexOfNextSolfege)
        topSolfege.push(chromSolfege[indexOfNextSolfege])

        // adding octave number to topNoteNoOctave:
        let octaveNumber = topNotes[l].substring(topNotes[l].length - 1)
        let changeNextOctave = false

        for (i = 0; i <= 12; i++){
            if (topSolfege[l] == chromSolfege[indexOfNextSolfege] && i == 0){break}
            if (direction == 'up'){
                let S = chromSolfege.indexOf(topSolfege[l])
                if (S == -1){S = notChromSolfege.indexOf(topSolfege[l])}
                let position = i + 1 + S
                if (position >= keyRange.length) {position = position % keyRange.length}
                
                if (position == C){
                    octaveNumber++
                }
                
                if (chromSolfege[position] == chromSolfege[indexOfNextSolfege]){break}
            }
            else if (direction == 'down'){
                let S = chromSolfege.indexOf(topSolfege[l])
                if (S == -1){S = notChromSolfege.indexOf(topSolfege[l])}
                let position = i*-1 + S
                if (position < 0){
                    position = keyRange.length + position
                }

                if (changeNextOctave){
                    octaveNumber--
                    changeNextOctave = false
                }
                else if (position == C){
                    changeNextOctave = true
                }

                if (chromSolfege[position] == chromSolfege[indexOfNextSolfege]){break}
            } 
        }
        allOctaves.push(octaveNumber)
        topNotes.push(keyRange[indexOfNextSolfege] + octaveNumber)
    }
    // console.log(topSolfege)
    // console.log(topNotes)

    // 4) Add the rest of the notes in each chord!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let loopVoicings = []
    for (let i = 0; i < loopLength; i++){loopVoicings.push([])}
    for (let l = 0; l < loopLength; l++){

        // first, sort the solfege array if necessary:
        let solfegeArray = undefined
        if (selectionsForEachPanel[loop[l].panel][loop[l].row][0].seventh == true || 
            selectionsForEachPanel[loop[l].panel][loop[l].row][0].ninth == true){

            solfegeArray = loop[l].solfege.flat().sort((a, b) => 
            Math.max(chromSolfege.indexOf(a), notChromSolfege.indexOf(a)) - 
            Math.max(chromSolfege.indexOf(b), notChromSolfege.indexOf(b)))
        }
        else {solfegeArray = loop[l].solfege.flat()}



        loopVoicings[l].push(topNotes[l])
        let octaveNumber = topNotes[l].substring(topNotes[l].length - 1)

        let counter = 0
        
        for (let i = Math.max(solfegeArray.indexOf(topSolfege[l]), solfegeArray.indexOf(topSolfege[l].enharmonic())); i >= 0;){
            let pitchClass = undefined
            if (i == 0){
                i = solfegeArray.length - 1

                let S = chromSolfege.indexOf(solfegeArray[0])
                if (S == -1){S = notChromSolfege.indexOf(solfegeArray[0])}
                let E = chromSolfege.indexOf(solfegeArray[i])
                if (E == -1){E = notChromSolfege.indexOf(solfegeArray[i])}

                if ((S >= C && C > E) || (S >= C && S < E) || (S < E && E < C)){octaveNumber--}

                pitchClass = keyRange[E] + octaveNumber
            }
            else {
                i--

                let S = chromSolfege.indexOf(solfegeArray[i + 1])
                if (S == -1){S = notChromSolfege.indexOf(solfegeArray[i + 1])}
                let E = chromSolfege.indexOf(solfegeArray[i])
                if (E == -1){E = notChromSolfege.indexOf(solfegeArray[i])}

                if ((S >= C && C > E) || (S >= C && S < E) || (S < E && E < C)){octaveNumber--}

                pitchClass = keyRange[E] + octaveNumber
            }
            loopVoicings[l].push(pitchClass)
            counter++
            if (counter == solfegeArray.length - 1){break}
        }
    }

    // 5) THE FINAL STEP: generate bass line:
    let bassLine = []
    for (let l = 0; l < loopLength; l++){
        let bassSolfege = loop[l].solfege.flat()[0]
        let bassIndex = Math.max(chromSolfege.indexOf(bassSolfege), notChromSolfege.indexOf(bassSolfege))
        let bassPitchClass = keyRange[bassIndex]
        let startOctave = loopVoicings[l][0].slice(loopVoicings[l][0].length - 1)
        if (startOctave == 1){startOctave++}
        bassLine.push(bassPitchClass + (startOctave - 2))
    }

    // probability we remove root from the upper voices if it has seventh
    let removeRoots = undefined
    for (let l = 0; l < loopLength; l++){
        if (selectionsForEachPanel[loop[l].panel][loop[l].row][0].seventh == true){
            
            if (removeRoots == undefined && Math.floor(Math.random()*100) <= 95){
                removeRoots = true
            }
            else if (removeRoots == false || removeRoots == undefined){removeRoots = false; break}

            if (removeRoots){
                for (let i = 0; i < loopVoicings[l].length; i++){
                    if (keyRange.indexOf(loopVoicings[l][i].substring(0, loopVoicings[l][i].length - 1)) ==
                    Math.max(chromSolfege.indexOf(loop[l].solfege.flat()[0]), 
                    notChromSolfege.indexOf(loop[l].solfege.flat()[0]))){
                        loopVoicings[l].splice(i, 1)
                    }
                }
            }
        }
    }

    // console.table(loopVoicings)
    // // console.log(bassLine)

    // create KEP 
    let KEPnotes = undefined
    if (settings.mode == 'earTrainer'){KEPnotes = createKEPnotes(keyRange, chromSolfege)}

    // send voicings to Rhythm
    voicingsToRhythm(loopVoicings, bassLine, loopLength, tonic, mode, loop, currentSynth, KEPnotes)

}

function createKEPnotes(keyRange, chromSolfege){
    let KEPnotes = [[Do, Mi, So],[Fa, La, Do],[Do, Mi, So],[So, Ti, Re, Fa],[Mi, So, Do]]
    let KEPbass = [Do, Fa, Do, So, Do]

    for (let c = 0; c < KEPnotes.length; c++){
        for (let n = 0; n < KEPnotes[c].length; n++){
            KEPnotes[c][n] = keyRange[chromSolfege.indexOf(KEPnotes[c][n])] + '5'
        }
        KEPbass[c] = keyRange[chromSolfege.indexOf(KEPbass[c])] + '3'
        KEPnotes[c].push(KEPbass[c])
    }
    // // console.log('KEPnotes: ')
    // // console.log(KEPnotes)
    // // console.log('KEPbass: ')
    // // console.log(KEPbass)
    return KEPnotes
}

function autoTonic(){
    // eventually, autoTonic() will take the last tonic as a parameter and try to generate a new psuedo-random tonic 
    //that is distant from the last one on the circle of fifths. For now, we just chose a random tonic.
    let possibleTonics = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]
    return possibleTonics[Math.floor(Math.random()*possibleTonics.length)]
}