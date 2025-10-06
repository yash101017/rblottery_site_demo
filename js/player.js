
(function(){
  const slides = ["/assets/demo1.jpg","/assets/demo2.jpg","/assets/demo3.jpg"];
  const img = document.getElementById('slide');
  let i = 0;
  function next(){ i = (i + 1) % slides.length; img.src = slides[i]; }
  setInterval(next, 10000);
})();
