const methods = ['getElementById', 'getElementsByClassName', 'querySelectorAll']

for (const method of methods) {
  window[method] = function() {
    return document[method](...arguments)
  }
}

HTMLElement.prototype.show = function() {
  this.style.display = ''
}

HTMLElement.prototype.hide = function() {
  this.style.display = 'none'
}