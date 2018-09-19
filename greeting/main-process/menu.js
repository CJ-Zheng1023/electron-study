const {Menu, app, ipcMain, BrowserWindow} = require('electron')
const template = [
    {
        label: 'one',
        submenu: [
            {
                label: 'two'
            },
            {
                type: 'separator'
            },
            {
                label: 'three'
            }
        ]
    },
    {
        label: 'four',
        click: () => {
            console.log('click four!')
        }
    }
]
let menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
if(app.dock){
    app.dock.setMenu(menu)
}
ipcMain.on('show-context-menu', (e) => {
    const win = BrowserWindow.fromWebContents(e.sender)
    menu.popup(win)
})
