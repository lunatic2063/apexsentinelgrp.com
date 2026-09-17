(function(){
  var btn=document.querySelector('.nav-toggle'), nav=document.getElementById('site-nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.textContent=open?'Close':'Menu';
  });}
  var y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
})();
