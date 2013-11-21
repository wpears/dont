var c='(function(){var a=Node.prototype.addEventListener;Node.prototype.addEventListener=function(e){if(e=="visibilitychange"||e=="webkitvisibilitychange"){}else a.apply(this,arguments)}})()'
  , E=document.documentElement;
E.setAttribute('onreset', c);
E.dispatchEvent(new CustomEvent('reset'));
E.removeAttribute('onreset');