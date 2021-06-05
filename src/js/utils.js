const fetchSessions = async () => {
  window.sessions = await window.getSessions()
}

const createView = (id, src) => {
  const webviewsWrapper = document.getElementById('webviews-wrapper')
  const webview = document.createElement('webview')
  webview.hide()
  webview.id = `webview-${id}`
  webview.partition = `persist:${id}`
  webview.useragent = 'Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0'
  webview.src = src
  webviewsWrapper.append(webview)
  return webview
}

const getLetter = str => str.substr(0, 1).toUpperCase()

const createId = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const getRandomColor = () => {
  const hue = randomInt(0, 360)
  return `hsl(${hue}, 30%, 45%)`
}