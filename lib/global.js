;(function() {
  var tim = null
  const setSize = function () {
    console.log(document.documentElement, 9999)
    var clientWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize =(clientWidth * 100) / 1080 + 'px'
  }
  setSize()
  const resizeChange = function () {
    console.log(121321)
    clearTimeout(tim)
    tim = setTimeout(function() {
      setSize()
    }, 300)
  }
  window.addEventListener('DOMContentLoaded', resizeChange)
  window.addEventListener('resize', resizeChange)
}())