const descriptionComponents = [
    'n accountant,',
    ' construction worker,',
    ' reporter,',
    'n alien,',
    ' dog,',
    ' raccoon,',
    ' bus,',
    ' meteorite,',
    ' rocket,',
    ' gas can,'
];
const actionComponents = [
    ' eating a pizza',
    ' knitting a sock',
    ' playing Call of Duty', 
    ' running everywhere naked',
    ' punching everyone',
    ' spreading anti-vax memes',
    ' coughing on everyone',
    ' building a sand castle',
    ' learning Javascript',
    ' ramming my car into everything',
    ' watching Game of Thrones'
];
const settingComponents = [
    ' in a subway.', 
    ' in space.',
    ' while underwater.',
    ' inside a volcano.',
    ' at my grandma\'s house.',
    ' in the White House.',
    ' in my toilet.',
    ' in Nazi Germany.',
    ' during Covid-19 lockdown.',
    ' in a news studio.',
    ' on Mars.'
];

function generateMessage() {
    const d = Math.floor(Math.random() * descriptionComponents.length);
    const a = Math.floor(Math.random() * actionComponents.length);
    const s = Math.floor(Math.random() * settingComponents.length);

    console.log('I am a' + descriptionComponents[d] + actionComponents[a] + settingComponents[s]);
}

generateMessage();