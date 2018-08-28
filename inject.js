(function() {
  setInterval(function () {
  	var imgs = document.querySelectorAll('.AdaptiveMediaOuterContainer img')
    for (var i = 0; i< imgs.length; i++){
      imgs[i].style.filter = 'blur(15px)'
      imgs[i].addEventListener('mouseover', (e) => {
        e.target.style.filter = 'none';
      });
    }
  }, 1000 * 5);
  console.log('Wall Builer for Tweet injected!');
})();