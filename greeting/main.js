const {app, BrowserWindow} = require('electron')
let greetingWin;
process.env.ELECTRON_HIDE_INTERNAL_MODULES = true
app.on('ready', createGreetingWindow)
function createGreetingWindow(){
    greetingWin = new BrowserWindow({width: 800, height: 600})
    greetingWin.loadURL(__dirname + '/index.html')
    // greetingWin.loadURL('http://www.bootcss.com/')
    greetingWin.webContents.openDevTools()   //打开调试工具
    greetingWin.on('close', () => {
        greetingWin = null
    })
    require('./main-process/menu')
    require('./main-process/msg-a')
}
app.on('window-all-close', () => {
    if(process.platform != 'darwin'){
        app.quit()
    }
})
app.on('activate', () => {
    if(greetingWin == null){
        createGreetingWindow()
    }
})