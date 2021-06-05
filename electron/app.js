const { app, BrowserWindow } = require('electron')
const config = require('../config/index.js')
const path = require('path')

class App {
  constructor() {
    this.app = app
    this.mainWindow = null
  }

  createWindow() {
    const windowConfig = config.electron
    windowConfig.webPreferences.preload = path.join(__dirname, 'preload.js')

    this.mainWindow = new BrowserWindow(windowConfig)
    this.mainWindow.maximize()
    this.mainWindow.loadFile(path.join(__dirname, '../src/index.html'))
    this.mainWindow.on('closed', () => this.onWindowClose())
  }

  onWindowClose() {
    this.mainWindow = null
  }

  onAppReady() {
    this.createWindow()
  }

  onAppClose() {
    if (process.platform !== 'darwin') this.app.quit()
  }

  onAppActivate() {
    if (this.mainWindow === null) createWindow()
  }

  registerListeners() {
    this.app.on('ready', () => this.onAppReady())
    this.app.on('window-all-closed', () => this.onAppClose())
    this.app.on('activate', () => this.onAppActivate())
  }

  init() {
    this.registerListeners()
  }
}

module.exports = App