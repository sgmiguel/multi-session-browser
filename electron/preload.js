const { Titlebar, Color } = require('custom-electron-titlebar')
const { remote } = require('electron')
const Storage = require('./storage')

const storage = new Storage('db.json')

window.removeSession = async id => {
  await storage.delete(id)
  await remote.session.fromPartition(`persist:${id}`).clearStorageData()
}

window.createSession = async (id, name, url, letter, color) => await storage.insert({ id, name, url, letter, color })

window.getSessions = async () => await storage.retrieve()

addEventListener('DOMContentLoaded', () => new Titlebar({
  backgroundColor: Color.fromHex('#1f2231'),
  overflow: 'hidden',
  menu: new remote.Menu()
}))