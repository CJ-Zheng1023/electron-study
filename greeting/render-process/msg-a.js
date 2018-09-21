const {ipcRenderer} = require('electron')
document.querySelector('#msgBtn').addEventListener('click', () => {
    let msg = ipcRenderer.sendSync('msg-a')
    console.log(msg)
    ipcRenderer.send('msg-b', {name: 'msg-b'})
    ipcRenderer.on('msg-b-back', (e, args) => {
        console.log(`render:${args.name}`)
    })
})