const webFrame = require('electron').webFrame;

console.log('Loading preload.js...')
webFrame.setSpellCheckProvider('en-US', false, {
    spellCheck: (word) => {
        return false
    }
})