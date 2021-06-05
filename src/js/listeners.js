const onHomeTabClick = () => {
  elements.webviewsWrapper.hide()
  elements.homeScreen.show()
}

const onAddNewSessionClick = () => {
  elements.homeScreen.classList.add('off-screen')
  elements.modalsScreen.show()
}

const onCreateNewSessionClick = async () => {
  const sessionId = createId(8)
  const sessionName = getElementById('new-session-name').value
  const sessionUrl = getElementById('new-session-url').value
  const sessionLetter = getLetter(sessionName)
  const sessionColor = getRandomColor()

  createView(sessionId, sessionUrl)

  // TODO: validate input

  await window.createSession(sessionId, sessionName, sessionUrl, sessionLetter, sessionColor)

  await fetchSessionsAndRender()

  elements.modalsScreen.hide()
  elements.homeScreen.classList.remove('off-screen')
}