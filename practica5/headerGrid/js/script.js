const mq = window.matchMedia('(min-width: 620px)');

const mainMenu = document.getElementById('main-menu');

const topLinks = document.getElementById('top-links');

const secondarNav = document.getElementById('secondarNav');

function widthChange(mediaQuery) {
  if (mediaQuery.matches) {
    topLinks.appendChild(secondarNav);
  } else {
    if (mainMenu.children.length < 2) {
      mainMenu.appendChild(secondarNav);
    }
  }
}

mq.addListener(widthChange);
widthChange(mq);