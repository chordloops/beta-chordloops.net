const solfege = {

    /////////////////////////////////////

	Do: {
        string: 'Do',
		raised: () => {return solfege.Di},
        lowered: () => {return solfege.Ti},
        enharmonic: () => {return solfege.None}
    },
    Di: {
        string: 'Di',
		raised: () => {return solfege.Re},
        lowered: () => {return solfege.Do},
        enharmonic: () => {return solfege.Ra}
    },
    Ra: {
        string: 'Ra',
		raised: () => {return solfege.Re},
        lowered: () => {return solfege.Do},
        enharmonic: () => {return solfege.Di}
    },
    Re: {
        string: 'Re',
		raised: () => {return solfege.Ri},
        lowered: () => {return solfege.Ra},
        enharmonic: () => {return solfege.None}
    },
    Ri: { 
        string: 'Ri',
		raised: () => {return solfege.Mi},
        lowered: () => {return solfege.Re},
        enharmonic: () => {return solfege.Me}
    },
    Me: { 
        string: 'Me',
        raised: () => {return solfege.Mi},
        lowered: () => {return solfege.Re},
        enharmonic: () => {return solfege.Ri}
    },
    Mi: {
        string: 'Mi',
		raised: () => {return solfege.Fa},
        lowered: () => {return solfege.Me},
        enharmonic: () => {return solfege.None}
    },
    Fa: {
        string: 'Fa',
		raised: () => {return solfege.Fi},
        lowered: () => {return solfege.Mi},
        enharmonic: () => {return solfege.None}
    },
    Fi: {
        string: 'Fi',
		raised: () => {return solfege.So},
        lowered: () => {return solfege.Fa},
        enharmonic: () => {return solfege.Se}
    },
    Se: {
        string: 'Se',
		raised: () => {return solfege.So},
        lowered: () => {return solfege.Fa},
        enharmonic: () => {return solfege.Fi}
    },
    So: {
        string: 'So',
		raised: () => {return solfege.Si},
        lowered: () => {return solfege.Se},
        enharmonic: () => {return solfege.None}
    },
    Si: {
        string: 'Si',
		raised: () => {return solfege.La},
        lowered: () => {return solfege.So},
        enharmonic: () => {return solfege.Le}
    },
    Le: {
        string: 'Le',
		raised: () => {return solfege.La},
        lowered: () => {return solfege.So},
        enharmonic: () => {return solfege.Si}
    },
    La: {
        string: 'La',
		raised: () => {return solfege.Li},
        lowered: () => {return solfege.Le},
        enharmonic: () => {return solfege.None}
    },
    Li: {
        string: 'Li',
		raised: () => {return solfege.Ti},
        lowered: () => {return solfege.La},
        enharmonic: () => {return solfege.Te}
    },
    Te: {
        string: 'Te',
		raised: () => {return solfege.Ti},
        lowered: () => {return solfege.La},
        enharmonic: () => {return solfege.Li}
    },
    Ti: {
        string: 'Ti',
		raised: () => {return solfege.Do},
		lowered: () => {return solfege.Te},
        enharmonic: () => {return solfege.None}
    },
    None: {
        raised: () => {return null},
        lowered: () => {return null}
    }
}

const Do = solfege.Do
const Di = solfege.Di
const Ra = solfege.Ra
const Re = solfege.Re
const Ri = solfege.Ri
const Me = solfege.Me
const Mi = solfege.Mi
const Fa = solfege.Fa
const Fi = solfege.Fi
const Se = solfege.Se
const So = solfege.So
const Si = solfege.Si
const Le = solfege.Le
const La = solfege.La
const Li = solfege.Li
const Te = solfege.Te
const Ti = solfege.Ti

const diatonicMajor = [Do, Re, Mi, Fa, So, La, Ti]
const diatonicMinor = [Do, Re, Me, Fa, So, Le, Te]
const chromaticAscending = [Do, Di, Re, Ri, Mi, Fa, Fi, So, Si, La, Li, Ti]
const chromaticDescending = [Do, Ra, Re, Me, Mi, Fa, Se, So, Le, La, Te, Ti]

const pitchClasses = [
    'C','D','E','F','G','A','B'
]
const allNotesSharp = ["C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", 
"C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", 
"F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", 
"A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", 
"C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6","C7"]

const allNotesFlat = ["C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "Cb2", "C2", 
"Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "Cb3", "C3", "Db3", "D3", "Eb3", "E3", 
"F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "Cb4", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", 
"A4", "Bb4", "Cb5", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "Cb6", "C6", 
"Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "Cb7","C7"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



