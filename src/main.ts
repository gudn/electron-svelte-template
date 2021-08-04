import { BrowserWindow, app } from 'electron'


function createWindow() {
  const win = new BrowserWindow({
    width: 640,
    height: 480,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadFile('./public/index.html')
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
