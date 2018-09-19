const ipcRender = require('electron').ipcRenderer
document.addEventListener('contextmenu', () => {
    ipcRender.send('show-context-menu')
})