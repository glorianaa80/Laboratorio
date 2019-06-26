const menu = document.getElementById('buttonOpen')
  var x = document.getElementById('openNav');

function myFunction() {
  if (x.className === 'header-nav hidden') {
    x.classList.add("responsive");
    x.classList.remove('hidden');
  } else {
    x.classList.remove('responsive');
    x.classList.add("hidden");
  }
}

menu.addEventListener('click', myFunction);
