//VARIABILI

const home = document.querySelector('.home');
const listino = document.querySelector('.listino');
const novita = document.querySelector('.novita');
const contatti = document.querySelector('.contatti');
const mainConteiner = document.querySelector('.mainConteiner');
const fb = document.querySelector('.fbj');
const timel = new TimelineMax();

//EVENTI

contatti.addEventListener('click', contattiClick);
listino.addEventListener('click', listinoClick);
novita.addEventListener('click', novitaClick);
home.addEventListener('click', homeClick);

// funzioni

function homeClick() {
  const click = new TimelineMax();
  const boh = document.querySelector('.cambio');
  const wrong = document.querySelector('.home');

  if (fb.classList[1] == 'Hidden') {
    fb.classList.remove('Hidden');
    click.fromTo(fb,1,{display:'block',width:0},{width:'340px'})
          .to(boh,1,{width:'100%'}, "-=1.1");
    setTimeout(contattiFbShow(),1000);
  } else {
    contattiFbShow2();
  };
  function contattiFbShow () {
    if (boh.classList[1] != 'seeingHome') {
      boh.classList.add('seeingHome');
      boh.classList.remove('seeingNovita', 'seeingContatti', 'seeingListino');
      click.to(boh,1,{marginTop:'60px',opacity:0})
            .to(boh,1,{marginTop:'0',opacity:1});
      setTimeout(function () {
        boh.innerHTML = `<div class="test">Ho cambiato un po di animazioni su pulsanti qui sopra, basta premerli per vederle.</div>`
      }, 2000);
    } else {
        for (var i = 0; i < 3; i++) {
          click.to(wrong,0.1,{x:'-5px'})
                .to(wrong,0.05,{x:'5px'})
                .to(wrong,0.1,{x:0});
        };
      };
  };
  function contattiFbShow2 () {
    if (boh.classList[1] != 'seeingHome') {
      boh.classList.add('seeingHome');
      boh.classList.remove('seeingNovita', 'seeingContatti', 'seeingListino');
      click.to(boh,1,{marginTop:'60px',opacity:0})
            .to(boh,1,{marginTop:'0',opacity:1});
      setTimeout(function () {
        boh.innerHTML = `<div class="test">Ho cambiato un po di animazioni su pulsanti qui sopra, basta premerli per vederle.</div>`
      }, 1000);
    }else {
      for (var i = 0; i < 3; i++) {
        click.to(wrong,0.1,{x:'-5px'})
              .to(wrong,0.05,{x:'5px'})
              .to(wrong,0.1,{x:0});
      };
    };
  };
};

function novitaClick() {
  const click = new TimelineMax();
  let boh = document.querySelector('.cambio');
  let wrong = document.querySelector('.novita');

  if (fb.classList[1] == 'Hidden') {
    fb.classList.remove('Hidden');
    click.fromTo(fb,1,{display:'block',width:0},{width:'340px'})
          .to(boh,1,{width:'100%'}, "-=1.1");
    setTimeout(contattiFbShow(),1000);
  } else {
    contattiFbShow2();
  };
  function contattiFbShow () {
    if (boh.classList[1] != 'seeingNovita') {
      boh.classList.add('seeingNovita');
      boh.classList.remove('seeingHome', 'seeingContatti', 'seeingListino');
      click.to(boh,1,{marginTop:'60px',opacity:0})
            .to(boh,1,{marginTop:'0',opacity:1});
      setTimeout(function () {
        boh.innerHTML = `<div>Stai guardando le novità</div>`
      }, 2000);
    } else {
        for (var i = 0; i < 3; i++) {
          click.to(wrong,0.1,{x:'-5px'})
                .to(wrong,0.05,{x:'5px'})
                .to(wrong,0.1,{x:0});
        };
      };
  };
  function contattiFbShow2 () {
    if (boh.classList[1] != 'seeingNovita') {
      boh.classList.add('seeingNovita');
      boh.classList.remove('seeingHome', 'seeingContatti', 'seeingListino');
      click.to(boh,1,{marginTop:'60px',opacity:0})
            .to(boh,1,{marginTop:'0',opacity:1});
      setTimeout(function () {
        boh.innerHTML = `<div>Stai guardando le novità</div>`
      }, 1000);
    }else {
      for (var i = 0; i < 3; i++) {
        click.to(wrong,0.1,{x:'-5px'})
              .to(wrong,0.05,{x:'5px'})
              .to(wrong,0.1,{x:0});
      };
    };
  };
};

function contattiClick() {
  const click = new TimelineMax();
  let boh = document.querySelector('.cambio');
  let wrong = document.querySelector('.contatti');

  if (fb.classList[1] == 'Hidden') {
    fb.classList.remove('Hidden');
    click.fromTo(fb,1,{display:'block',width:0},{width:'340px'})
          .to(boh,1,{width:'100%'}, "-=1.1");
    setTimeout(contattiFbShow(),1000);
  } else {
    contattiFbShow2();
  };
  function contattiFbShow () {
    if (boh.classList[1] != 'seeingContatti') {
      boh.classList.add('seeingContatti');
      boh.classList.remove('seeingHome', 'seeingNovita', 'seeingListino');
      click.to(boh,1,{marginTop:'60px',opacity:0})
            .to(boh,1,{marginTop:'0',opacity:1});
      setTimeout(function () {
        boh.innerHTML = `<div>Stai guardando i contatti</div>`
      }, 2000);
    } else {
        for (var i = 0; i < 3; i++) {
          click.to(wrong,0.1,{x:'-5px'})
                .to(wrong,0.05,{x:'5px'})
                .to(wrong,0.1,{x:0});
        };
      };
  };
  function contattiFbShow2 () {
    if (boh.classList[1] != 'seeingContatti') {
      boh.classList.add('seeingContatti');
      boh.classList.remove('seeingHome', 'seeingNovita', 'seeingListino');
      click.to(boh,1,{marginTop:'60px',opacity:0})
            .to(boh,1,{marginTop:'0',opacity:1});
      setTimeout(function () {
        boh.innerHTML = `<div>Stai guardando i contatti</div>`
      }, 1000);
    }else {
      for (var i = 0; i < 3; i++) {
        click.to(wrong,0.1,{x:'-5px'})
              .to(wrong,0.05,{x:'5px'})
              .to(wrong,0.1,{x:0});
      };
    };
  };
};

function listinoClick() {
  const click = new TimelineMax();
  const boh = document.querySelector('.cambio');
  const wrong = document.querySelector('.listino');


  if (fb.classList[1] != 'Hidden') {
    fb.classList.add('Hidden');
    click.to(fb,1,{width:0,display:'none'});
    setTimeout(function () {
      if (boh.classList[1] != 'seeingListino' && fb.classList[1] == 'Hidden') {
        boh.classList.add('seeingListino');
        boh.classList.remove('seeingHome', 'seeingNovita', 'seeingContatti');
        click.to(boh,1,{marginTop:'60px',opacity:0})
              .to(boh,1,{marginTop:'0',opacity:1});

        setTimeout(function () {
          $('.cambio').load('nav/listino.html')
        },1000); //inserire html del listino

      };
      click.to(boh,0.1,{width:'80vw'}, "-=1")
    },1000);
  };//if



  if (boh.classList[1] == 'seeingListino' && fb.classList[1] == 'Hidden') {
    for (var i = 0; i < 3; i++) {
      click.to(wrong,0.1,{x:'-5px'})
      .to(wrong,0.05,{x:'5px'})
      .to(wrong,0.1,{x:0});
    };
  };

};
//testo molto lungo :O


//ANIMAZIONE INIZIALE

timel.fromTo(contatti, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(novita, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(listino, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(home, 1, {x: '-90vw'}, {x: '0%', ease: Power2.easeInOut})
      .fromTo(contatti,1, {padding: '5px'},{padding: '20px'})
      .fromTo(novita,1, {padding: '5px'},{padding: '20px'}, "-=1")
      .fromTo(listino,1, {padding: '5px'},{padding: '20px'}, "-=1")
      .fromTo(home,1, {padding: '5px'},{padding: '20px'}, "-=1")//padding++
      .to(contatti,1, {borderRadius: '15px'})
      .to(novita,1, {borderRadius: '15px'}, "-=1")
      .to(listino,1, {borderRadius: '15px'}, "-=1")
      .to(home,1, {borderRadius: '15px'}, "-=1")//border radius
      .to(contatti,1, {padding: '5px'})
      .to(novita,1, {padding: '5px'}, "-=1")
      .to(listino,1, {padding: '5px'}, "-=1")
      .to(home,1, {padding: '5px'}, "-=1");//padding--
