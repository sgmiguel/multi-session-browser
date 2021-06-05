const loadAnimation = () => {
  setTimeout(() => elements.preload.classList.add('fade-out'), 0)
  setTimeout(() => {
    elements.preload.hide()
    elements.app.show()
  }, 3e3)
}

const registerElements = () => {
  elements.preload = getElementById('preload')
  elements.app = getElementById('app')
  elements.modalsScreen = getElementById('modals-screen')
  elements.homeScreen = getElementById('home-screen')
  elements.homeTab = getElementById('home-tab')
  elements.webviewsWrapper = getElementById('webviews-wrapper')
  elements.btnAddNewSession = getElementById('btn-new-session')
  elements.btnCreateSession = getElementById('btn-create-session')
  elements.emptySessionText = getElementById('empty-session-text')
  elements.sessionsWrapper = getElementById('sessions-wrapper')
  elements.sideSessions = getElementById('side-sessions')
  elements.webviewsWrapper = getElementById('webviews-wrapper')
  elements.homeScreen = getElementById('home-screen')
  elements.sessions = getElementsByClassName('session-wrapper')
}

const registerListeners = () => {
  elements.homeTab.addEventListener('click', () => onHomeTabClick())
  elements.btnAddNewSession.addEventListener('click', () => onAddNewSessionClick())
  elements.btnCreateSession.addEventListener('click', () => onCreateNewSessionClick())
}