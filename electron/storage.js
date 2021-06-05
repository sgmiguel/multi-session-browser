const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

class Storage {
  constructor(file) {
    this.adapter = new FileSync(path.join(__dirname, `../db/${file}`))
    this.db = low(this.adapter)

    this.defineSchema()
  }

  defineSchema() {
    this.db
      .defaults({ sessions: [] })
      .write()
  }

  async retrieve() {
    return await this.db
      .get('sessions')
      .value()
  }

  async delete(id) {
    return await this.db
      .get('sessions')
      .remove({ id })
      .write()
  }

  async insert(...props) {
    return await this.db
      .get('sessions')
      .push(...props)
      .write()
  }
}

module.exports = Storage