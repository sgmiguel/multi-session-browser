window.sessions = []
window.elements = {}

const onDOMContentLoaded = async () => {
  registerElements()
  registerListeners()

  await fetchSessionsAndRender()

  loadAnimation()
}

document.addEventListener('DOMContentLoaded', () => onDOMContentLoaded())