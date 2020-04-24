const icon = document.querySelector('.icon');

icon.addEventListener ('click', () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

icon.addEventListener('click', () => {
  if (icon.className == 'icon' || icon.className == 'icon rotate-back'){
    icon.className = 'icon rotate' 
  } else if (icon.className == 'icon rotate') {
  icon.className = 'icon rotate-back' 
  }
})
