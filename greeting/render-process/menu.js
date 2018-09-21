const ipcRenderer = require('electron').ipcRenderer
document.addEventListener('contextmenu', () => {
    ipcRenderer.send('show-context-menu')
})