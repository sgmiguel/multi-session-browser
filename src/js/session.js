const fetchSessionsAndRender = () =>
  new Promise(async resolve => {
    await fetchSessions()
    renderSessions()
    resolve()
  })

const buildSessionComponent = session => {
  const sessionHomeContainer = document.getElementById(`session-container-${session.id}`)
  const sideTab = document.getElementById(`side-tab-${session.id}`)
  const removeSessionX = sessionHomeContainer.children.item(0)

  const onRemoveSessionClick = async () => {
    const currentWebview = document.getElementById(`webview-${session.id}`)
    await window.removeSession(session.id)
    sessionHomeContainer.remove()
    sideTab.remove()
    currentWebview.remove()

    await fetchSessionsAndRender()
  }

  const onSideTabClick = () => {
    for (const webview of document.querySelectorAll('webview')) {
      webview.style.display = webview.id === `webview-${session.id}` ? '' : 'none'
    }
    elements.homeScreen.hide()
    elements.webviewsWrapper.show()
  }

  removeSessionX.addEventListener('click', () => onRemoveSessionClick())
  sideTab.addEventListener('click', () => onSideTabClick())
}

const renderSessions = () => {
  if (!sessions || sessions.length === 0) {
    elements.emptySessionText.show()
    return
  } else {
    elements.emptySessionText.hide()
  }

  buildSessionsTemplate(sessions)

  setTimeout(() => {
    for (const session of sessions) {
      buildSessionComponent(session)
    }
  }, 0)
}