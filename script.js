function soonAvailable()
{
  alert("Feature soon available!");
}
AOS.init({
  duration: 1000, 
  once: true,
});
 window.addEventListener('scroll', function (){
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrollingActive', windowPosition);
})
