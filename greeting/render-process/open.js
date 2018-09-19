const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
let win
document.querySelector('#openBtn').addEventListener('click', () => {
    //window.open('https://www.baidu.com')
    win = new BrowserWindow({
        width: 300,
        height: 200,
        frame: true,
        transParent: true
    })
    win.loadURL(path.join(__dirname, '../model.html'))
    win.on('close', () => {
        win = null
    })
})
