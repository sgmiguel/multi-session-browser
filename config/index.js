module.exports = {
  electron: {
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      partition: 'persist:multi-session-browser',
      contextIsolation: false,
      webviewTag: true
    }
  }
}