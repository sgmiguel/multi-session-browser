const buildHomeTemplate = ({ id, color, letter, name }) => `
<div class="session-wrapper" data-session-id="${id}" id="session-container-${id}">
  <div class="session-remove">X</div>
  <div class="session-icon" style="background:${color};">${letter}</div>
  <div class="session-name">${name}</div>
  <div class="session-id">${id}</div>
</div>
`

const buildTabsTemplate = ({ id, letter }) => `
<div id="side-tab-${id}" class="tab">
  <div class="tab-circle">${letter}</div>
</div>
`

const buildSessionsTemplate = sessions => {
  let homeHtml = ''
  let tabsHtml = ''

  for (const session of sessions) {
    const currentWebview = getElementById(`webview-${session.id}`)
    if (!currentWebview) createView(session.id, session.url)

    homeHtml += buildHomeTemplate(session)
    tabsHtml += buildTabsTemplate(session)
  }

  elements.sessionsWrapper.innerHTML = homeHtml
  elements.sideSessions.innerHTML = tabsHtml
}