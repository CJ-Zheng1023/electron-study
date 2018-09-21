const {ipcMain}  = require('electron')
ipcMain.on('msg-a', (e) => {
    e.returnValue = 'hello'
})
ipcMain.on('msg-b', (e, args) => {
    console.log(`main:${args.name}`)
    e.sender.send('msg-b-back', {name: 'msg-b-back'})
})