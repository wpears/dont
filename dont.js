var s = document.createElement('script')
s.textContent =
  '(function() {' +
  'var a = Node.prototype.addEventListener;' +
  'Node.prototype.addEventListener = function(e) {' +
  "if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange') {" +
  'a.apply(this, arguments)' +
  '}}' +
  '})()'
;(document.head || document.documentElement).appendChild(s)
s.remove()
