// Harmonic rhythms, **the last value in each array is not a chord change, but where the loop ends**:
const twoHC = {
    twoW2W: ['0:0:0','2:0:0','4:0:0'],
    WW: ['0:0:0','1:0:0','2:0:0'],
}
const threeHC = {
    WW2W: ['0:0:0','1:0:0','2:0:0','4:0:0'],
    twoWWW: ['0:0:0','2:0:0','3:0:0','4:0:0']
}
const fourHC = {
    WWWW: ['0:0:0','1:0:0','2:0:0','3:0:0','4:0:0'],
    HHHH: ['0:0:0','0:2:0','1:0:0','1:2:0','2:0:0']
}
const fiveHC = {
    WWWHH: ['0:0:0','1:0:0','2:0:0','3:0:0','3:2:0','4:0:0'],
    WHHWW: ['0:0:0','1:0:0','1:2:0','2:0:0','3:0:0','4:0:0'],
    WWHHW: ['0:0:0','1:0:0','2:0:0','2:2:0','3:0:0','4:0:0']
}
const sixHC = {
    WHHWHH: ['0:0:0','1:0:0','1:2:0','2:0:0','3:0:0','3:2:0','4:0:0'],
    HHWHHW: ['0:0:0','0:2:0','1:0:0','2:0:0','2:2:0','3:0:0','4:0:0']
}
const eightHC = {
    HHHHHHHH: ['0:0:0','0:2:0','1:0:0','1:2:0','2:0:0','2:2:0','3:0:0','3:2:0','4:0:0']
}


// NEW: Harmonic Rhythms object. Sorted by: 1) Length by chord changes 2) Length by measures 3) Legacy, Premium, Experimental 
// harmonic rhythms 4) the harmonic rhythm itself and its associated patterns 5) Patterns are sorted by Legacy, Premium, Experimental
// 6) Within each of those categories, we have a list of patterns containing the chunk change pattern for both the upper voices and 
// bass. Each bass category has multiple possible bass patterns

const harmonicRhythms = {

    2: {
        2: {
            legacy: {
                1: {
                    changes: ['0:0:0','1:0:0','2:0:0'],
                    patterns: {
                        legacy: { 
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                    ],
                                ],
                            }
                        },
                        premium: {

                        },
                        experimental: {

                        }
                    }
                },
            },
            premium: {

            },
            experimental: {

            }
        },
        4: {
            legacy: {
                1: {
                    changes: ['0:0:0','2:0:0','4:0:0'],
                    patterns: {
                        legacy: { 
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                    ],
                                ],
                            }
                        },
                        premium: {

                        },
                        experimental: {

                        }
                    }
                },
            },
            premium: {
                1: {
                    changes: ['0:0:0','1:3:2','4:0:0'],
                    patterns: {
                        premium: {
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                    { num: 1 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                        { num: 1 },
                                    ],
                                ],
                            }
                        },
                        experimental: {

                        }
                    }
                },
            },
            experimental: {

            }
        },
    },

    3: {
        4: {
            legacy: {
                1: {
                    changes: ['0:0:0','1:0:0','2:0:0','4:0:0'],
                    patterns: {
                        legacy: { 
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                    { num: 0 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                        { num: 0 },
                                    ],
                                ],
                            }
                        },
                        premium: {

                        },
                        experimental: {

                        }
                    }
                },
                2: {
                    changes: ['0:0:0','2:0:0','3:0:0','4:0:0'],
                    patterns: {
                        legacy: { 
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                    { num: 0 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                        { num: 0 },
                                    ],
                                ],
                            }
                        },
                        premium: {

                        },
                        experimental: {

                        }
                    }
                },
            },
            premium: {

            },
            experimental: {

            }
        },
    },

    4: {
        2: {
            legacy: {
                1: {
                    changes: ['0:0:0','0:2:0','1:0:0','1:2:0','2:0:0'],
                    patterns: {
                        legacy: { 
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                    { num: 0 },
                                    { num: 0 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                        { num: 0 },
                                        { num: 0 },
                                    ],
                                ],
                            }
                        },
                        premium: {

                        },
                        experimental: {

                        }
                    }
                },
            },
            premium: {

            },
            experimental: {

            }
        },
        4: {
            legacy: {
                1: {
                    changes: ['0:0:0','1:0:0','2:0:0','3:0:0','4:0:0'],
                    patterns: {
                        legacy: { 
                            1: { 
                                voices: [
                                    () => null, 
                                    { num: 0 },
                                    { num: 0 },
                                    { num: 0 },
                                ],
                                bass: [
                                    [
                                        () => null, 
                                        { num: 0 },
                                        { num: 0 },
                                        { num: 0 },
                                    ],
                                ],
                            }
                        },
                        premium: {

                        },
                        experimental: {

                        }
                    }
                },
            },
            premium: {

            },
            experimental: {

            }
        },
    },

    5: {
        2: {},
        4: {},
        8: {},
    },

    6: {
        2: {},
        4: {},
        8: {},
    },

}

// NEW: chunks.
const chunks = {
    "2m": {
        attackPoints: {
            1: {dist: "0", notes: {
                    0: {voicedIndex: allVoices(), duration: "2m", velocity: 1, inst: 0}
            }}
        },
        similarChunks: [],
        bassChunks: []
    },
    "1m": {
        attackPoints: {
            1: {dist: "0", notes: {
                    0: {voicedIndex: allVoices(), duration: "1m", velocity: 1, inst: 0}
            }}
        },
        similarChunks: [],
        bassChunks: []
    },
    "2n": {
        attackPoints: {
            1: {dist: "0", notes: {
                    0: {voicedIndex: allVoices(), duration: "2n", velocity: 1, inst: 0}
            }}
        },
        similarChunks: [],
        bassChunks: []
    },
    "4n": {
        attackPoints: {
            1: {dist: "0", notes: {
                    0: {voicedIndex: allVoices(), duration: "4n", velocity: 1, inst: 0}
            }}
        },
        similarChunks: [],
        bassChunks: []
    },
    "4n.": {
        attackPoints: {
            1: {dist: "0", notes: {
                    0: {voicedIndex: allVoices(), duration: "4n.", velocity: 1, inst: 0}
            }}
        },
        similarChunks: [],
        bassChunks: []
    },
    "8n": {
        attackPoints: {
            1: {dist: "0", notes: {
                    0: {voicedIndex: allVoices(), duration: "8n", velocity: 1, inst: 0}
            }}
        },
        similarChunks: [],
        bassChunks: []
    },


    "letItBe": {
        attackPoints: {
            1: {dist: "0", notes: {
                0: {voicedIndex: allVoicesBut([0]), duration: "8n", velocity: 0.8, inst: 0},
            }},
            2: {dist: "8n", notes: {
                0: {voicedIndex: [0], duration: "8n", velocity: 0.8, inst: 0},
            }}
        },
        similarChunks: [],
        bassChunks: [],
    }
}







// Accomp patterns, i guess these are just repeating figures of any length. lets just keep it super
// simple for now, but I think in the future, each array can be more complicated and length rhythmic
// figures.
const twoW = ['2m']
const W = ['1m']
const H = ['2n']
const Q = ['4n']
const Qd = ['4n.']
const E = ['8n']
const basicAccomps = [twoW, W, H, Q, Qd, E]


function voicingsToRhythm(loopVoicings, bassLine, loopLength, tonic, mode, loop, currentSynth, KEPnotes){

    let harmRhythm = undefined

    if (loopLength == 2){

        let harmRhythmKeys = Object.keys(harmonicRhythms)
        let randomMeasureLength = harmRhythmKeys[Math.floor(Math.random() * harmRhythmKeys.length)]
        let measureLength = harmonicRhythms[2][randomMeasureLength]

        let measureLengthKeys = Object.keys(measureLength[legacy])
        let randomChangeType = measureLengthKeys[Math.floor(Math.random() * measureLengthKeys.length)]
        let changeType = randomChangeType


        
        // harmRhythm =  twoHC[Object.keys(twoHC)[Math.floor(Math.random() * Object.keys(twoHC).length)]]
    }
    else if (loopLength == 3){
        // harmRhythm =  threeHC[Object.keys(threeHC)[Math.floor(Math.random() * Object.keys(threeHC).length)]]
    }
    else if (loopLength == 4){
        // harmRhythm =  fourHC[Object.keys(fourHC)[Math.floor(Math.random() * Object.keys(fourHC).length)]]
    }

    return

    // else if (loopLength == 5){
    //     // harmRhythm =  fiveHC[Object.keys(fiveHC)[Math.floor(Math.random() * Object.keys(fiveHC).length)]]
    // }
    // else if (loopLength == 6){
    //     // harmRhythm =  sixHC[Object.keys(sixHC)[Math.floor(Math.random() * Object.keys(sixHC).length)]]
    // }
    // else if (loopLength == 8){
    //     // harmRhythm =  eightHC[Object.keys(eightHC)[Math.floor(Math.random() * Object.keys(eightHC).length)]]
    // }

    // console.log(harmRhythm)

    bpm(harmRhythm, loopLength, currentSynth)

    let chordPattern = basicAccomps[Math.floor(Math.random()*basicAccomps.length)]
    let bassPattern = basicAccomps[Math.floor(Math.random()*basicAccomps.length)]
    // repick if eighth notes are too fast for tempo:
    while ((chordPattern == E || bassPattern == E) && Tone.Transport.bpm.value > 120){
        chordPattern = basicAccomps[Math.floor(Math.random()*basicAccomps.length)]
        bassPattern = basicAccomps[Math.floor(Math.random()*basicAccomps.length)]
    }
    if (currentSynth.synthName == "Electric Choir"){
        chordPattern = twoW
        bassPattern = twoW
    }
    // console.log(chordPattern[0])
    // console.log(bassPattern[0])

    let finalInstructions = [] 
    for (let l = 0; l < loopLength; l++){

        let breakConditionA = undefined 
        let breakConditionB = undefined

        for (let a = 0; a <= 16; a++){
            if (l == 0 && a == 0){
                // push first instruction of loop, build off this one. Remember to snip if it goes over.
                finalInstructions.push(
                    {  
                        time: harmRhythm[l],
                        note: loopVoicings[l],
                        duration: Math.min(Tone.Time(chordPattern[0]).toSeconds(), 
                            Tone.Time(Tone.Time(harmRhythm[l + 1]) - Tone.Time(harmRhythm[l])).toSeconds()),
                        type: 'chordVoices'    
                    }
                )
                finalInstructions.push(
                    {  
                        time: harmRhythm[l],
                        note: bassLine[l],
                        duration: Math.min(Tone.Time(bassPattern[0]).toSeconds(), 
                            Tone.Time(Tone.Time(harmRhythm[l + 1]) - Tone.Time(harmRhythm[l])).toSeconds()),
                        type: 'bassLine'
                    }
                )
            }
            else {
                let nextChordPosition = undefined
                let nextBassPosition = undefined 
                for (let i = finalInstructions.length - 1; i >= 0; i--){

                    if (nextChordPosition == undefined && finalInstructions[i].type == 'chordVoices'){
                        nextChordPosition = Tone.Time(finalInstructions[i].time) + Tone.Time(finalInstructions[i].duration)
                        nextChordPosition = Tone.Time(nextChordPosition).toBarsBeatsSixteenths()
                    }
                    if (nextBassPosition == undefined && finalInstructions[i].type == 'bassLine'){
                        nextBassPosition = Tone.Time(finalInstructions[i].time) + Tone.Time(finalInstructions[i].duration)
                        nextBassPosition = Tone.Time(nextBassPosition).toBarsBeatsSixteenths()
                    }

                    if (nextChordPosition !== undefined && nextBassPosition !== undefined){
                        break
                    }
                }      

                if (breakConditionA == undefined && Tone.Time(nextChordPosition) < Tone.Time(harmRhythm[l + 1])){
                    finalInstructions.push(
                        {  
                            time: nextChordPosition,
                            note: loopVoicings[l],
                            duration: Math.min(Tone.Time(chordPattern[0]), 
                                Tone.Time(Tone.Time(harmRhythm[l + 1]) - Tone.Time(nextChordPosition))),
                            type: 'chordVoices'    
                        }
                    )
                }
                else {breakConditionA = true}

                if (breakConditionB == undefined && Tone.Time(nextBassPosition) < Tone.Time(harmRhythm[l + 1])){
                    finalInstructions.push(
                        {  
                            time: nextBassPosition,
                            note: bassLine[l],
                            duration: Math.min(Tone.Time(bassPattern[0]), 
                                Tone.Time(Tone.Time(harmRhythm[l + 1]) - Tone.Time(nextBassPosition))),
                            type: 'bassLine'
                        }
                    )
                }
                else {breakConditionB = true}

                if (breakConditionA && breakConditionB){break}
            }
        }
    }

    // KEPinstructions: 
    let KEPinstructions = []
    if (settings.mode == 'earTrainer'){
        let KEPrhythm = ['0:0:0','0:2:0','1:0:0','1:2:0','2:0:0']
        let KEPduration = ['2n','2n','2n','2n','2n.']
        for (let c = 0; c < KEPnotes.length; c++){
            KEPinstructions.push(
                {  
                    time: KEPrhythm[c],
                    note: KEPnotes[c],
                    duration: KEPduration[c],
                }
            )
        }
        KEPinstructions.push(
            {  
                time: '3:0:0',
                note: [],
                duration: 0,
            }
        )
    }
    // console.log(KEPinstructions)
    // console.log(finalInstructions)


    // file away this chord loop for later return to it.

    fileLoop(loop, loopLength, harmRhythm, finalInstructions, tonic, Tone.Transport.bpm.value, mode, currentSynth, KEPinstructions)

    // real quick let's set the loop length in time for stat tracking
    // first, simulate click on play button to force sequence to be initilized, then unclick so nothing plays
    document.querySelector('.ETplayButton').click()
    document.querySelector('.ETplayButton').click()
    loopTime = sequence.loopEnd
    
}

function bpm(harmRhythm, loopLength, currentSynth){
    
    if (settings.tempo !== 'autoTempo'){
        Tone.Transport.bpm.value = Number(settings.tempo)
    }
    else {
        if (harmRhythm[harmRhythm.length - 1] == '2:0:0'){
            if (loopLength <= 3){
                Tone.Transport.bpm.value = Math.floor(Math.random() * 60 + 65)
            }
            else {
                Tone.Transport.bpm.value = Math.floor(Math.random() * 20 + 55)
            }
        }
        else if (harmRhythm[harmRhythm.length - 1] == '4:0:0'){
            if (loopLength <= 3){
                Tone.Transport.bpm.value = Math.floor(Math.random() * 50 + 110)
            }
            else {
                Tone.Transport.bpm.value = Math.floor(Math.random() * 50 + 80)
            }
        }
        if (currentSynth.synthName == 'Electric Choir'){
            Tone.Transport.bpm.value = Math.floor(Math.random() * 20 + 45)
        }
    }
    // console.log(Tone.Transport.bpm.value)
}

let loopFile = []
function fileLoop(loop, loopLength, harmRhythm, finalInstructions, tonic, tempo, mode, currentSynth, KEPinstructions){
    let loopInfo = {
            loop: loop,
            loopLength: loopLength,
            harmRhythm: harmRhythm,
            finalInstructions: finalInstructions,
            key: tonic,
            tempo: tempo,
            mode: mode,
            instrument: currentSynth, 
            KEPinstructions: KEPinstructions
    }
    loopFile.push(loopInfo)

    // display loop number / key / tempo: 
    if (settings.mode == 'experimentMode'){

        if (mode == 'minor'){
            if (tonic == 'Gb'){tonic = 'F#'}
            else if (tonic == 'Db'){tonic = 'C#'}
            else if (tonic == 'Ab'){tonic = 'G#'}
            else if (tonic == 'Db'){tonic = 'C#'}
        }
        
        let loopNumber = document.querySelectorAll(".loopInfo > p")[0]
        loopNumber.innerHTML += "  " + (currentLoopIndex + 1) + " of " + loopFile.length

        let keyDisplay = document.querySelectorAll(".loopInfo > p")[1]
        keyDisplay.innerHTML += "  " + tonic + " " + mode

        let tempoDisplay = document.querySelectorAll(".loopInfo > p")[2]
        tempoDisplay.innerHTML += " " + Math.floor(Tone.Transport.bpm.value) + " " + "BPM"

        // console.log(currentSynth)
        let instrumentDisplay = document.querySelectorAll(".loopInfo > p")[3]
        instrumentDisplay.innerHTML += currentSynth.synthName
    }
}
