function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function hover(){
  const xebia =document.querySelector(".xebia");
  const thapar =document.querySelector(".tiet");
  const college =document.querySelector(".details-container1");
  const company =document.querySelector(".details-container2");

college.addEventListener('mouseover',function(){
 xebia.style.display='block';
 thapar.style.display='none';
});

college.addEventListener('mouseout',function(){
  xebia.style.display='none';
  thapar.style.display='block';
 });
  
}
