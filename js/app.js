const home = document.querySelector('.home');
const listino = document.querySelector('.listino');
const novita = document.querySelector('.novita');
const contatti = document.querySelector('.contatti');

// funzioni

function mouseHoverC() {
  const timeHover = new TimelineMax();

    timeHover.fromTo(contatti,1,{opacity: 1}, {opacity: 0.5})
    .fromTo(contatti,1,{opacity:0.5},{opacity:1});
};

function mouseHoverN() {
  const timeHover = new TimelineMax();

    timeHover.fromTo(novita,1,{opacity: 1}, {opacity: 0.5})
    .fromTo(novita,1,{opacity:0.5},{opacity:1});
};

function mouseHoverL() {
  const timeHover = new TimelineMax();

    timeHover.fromTo(listino,1,{opacity: 1}, {opacity: 0.5})
    .fromTo(listino,1,{opacity:0.5},{opacity:1});
};

function mouseHoverH() {
  const timeHover = new TimelineMax();

    timeHover.fromTo(home,1,{opacity: 1}, {opacity: 0.5})
    .fromTo(home,1,{opacity:0.5},{opacity:1});
};


// fine funzioni

const timel = new TimelineMax();

timel.fromTo(contatti, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(novita, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(listino, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(home, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(contatti,1, {padding: '5px'},{padding: '20px'})
      .fromTo(novita,1, {padding: '5px'},{padding: '20px'}, "-=1")
      .fromTo(listino,1, {padding: '5px'},{padding: '20px'}, "-=1")
      .fromTo(home,1, {padding: '5px'},{padding: '20px'}, "-=1")
      .to(contatti,1, {borderRadius: '15px'})
      .to(novita,1, {borderRadius: '15px'}, "-=1")
      .to(listino,1, {borderRadius: '15px'}, "-=1")
      .to(home,1, {borderRadius: '15px'}, "-=1")//border radius
      .to(contatti,1, {padding: '5px'})
      .to(novita,1, {padding: '5px'})
      .to(listino,1, {padding: '5px'})
      .to(home,1, {padding: '5px'});


contatti.addEventListener('mouseover', mouseHoverC);
novita.addEventListener('mouseover', mouseHoverN);
listino.addEventListener('mouseover', mouseHoverL);
home.addEventListener('mouseover', mouseHoverH);
