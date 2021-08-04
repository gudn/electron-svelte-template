import * as path from 'path'

import { BrowserWindow, app } from 'electron'
import { default as hotReload } from 'electron-reload'

if (process.env.NODE_ENV === 'development') {
  hotReload('./public/dist/*', {})
  hotReload('./dist/*', {
    electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
  })
}

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
