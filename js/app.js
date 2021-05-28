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
  let boh = document.querySelector('.cambio');
  let wrong = document.querySelector('.home');

  if (fb.classList[1] == 'Hidden') {
    fb.classList.remove('Hidden');
    click.fromTo(fb,1,{display:'block',width:0},{width:'340px'});
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
    click.fromTo(fb,1,{display:'block',width:0},{width:'340px'});
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
    click.fromTo(fb,1,{display:'block',width:0},{width:'340px'});
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
  let boh = document.querySelector('.cambio');
  let wrong = document.querySelector('.listino');

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
          boh.innerHTML = `<div class="pagina">
          <div class="conteinerListino1">
          <div class="pizza">
          <div class="nome">Marinara</div>
          <div class="ingredienti">Pomodoro, aglio, origano</div>
          <div class="prezzo">4.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Margherita</div>
          <div class="ingredienti">Pomodoro, mozzarella</div>
          <div class="prezzo">5.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Pugliese</div>
          <div class="ingredienti">Pom, moz, cipolla</div>
          <div class="prezzo">4.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Romana</div>
          <div class="ingredienti">Pom, mozz, acciughe</div>
          <div class="prezzo">5.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Prosciutto</div>
          <div class="ingredienti">Pom, mozz, prosciutto</div>
          <div class="prezzo">5.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Funghi</div>
          <div class="ingredienti">Pom, mozz, funghi</div>
          <div class="prezzo">5.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Diavola</div>
          <div class="ingredienti">Pom, mozz, salamino piccante</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Viennese</div>
          <div class="ingredienti">Pom, mozz, wurstel</div>
          <div class="prezzo">5.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Prosciutto e Funghi</div>
          <div class="ingredienti">Pom, mozz, prosciutto, funghi</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Capricciosa</div>
          <div class="ingredienti">Pom, mozz, prosciutto, funghi, carciofi</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">4 Stagioni</div>
          <div class="ingredienti">Pom, mozz, prosciutto, funghi, carciofi, olive</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">4 Formaggi</div>
          <div class="ingredienti">Pom, mozz, formaggi misti (gorgonzola a richiesta)</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Tonno e Cipolla</div>
          <div class="ingredienti">Pom, mozz, tonno, cipolla</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Patatosa</div>
          <div class="ingredienti">Pom, mozz, patatine</div>
          <div class="prezzo">5.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Patatine e Wurstel</div>
          <div class="ingredienti">Pom, mozz, patatine, wurstel</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Patatine e Salsiccia</div>
          <div class="ingredienti">Pom, mozz, patatine, salsiccia</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Patatine e Salamino</div>
          <div class="ingredienti">Pom, mozz, patatine, salamino picc.</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Parmigiana</div>
          <div class="ingredienti">Pom, mozz, melanzane, grana</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Spinaci e Ricotta</div>
          <div class="ingredienti">Pom, mozz, ricotta, spinaci</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Tonno e Peperoni</div>
          <div class="ingredienti">Pom, mozz, tonno, peperoni</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Rucola e Grana</div>
          <div class="ingredienti">Pom, mozz, rucola, grana</div>
          <div class="prezzo">6.50 €</div>
          </div>
          </div>
          <div class="conteinerListino2">
          <div class="pizza">
          <div class="nome">Jolly</div>
          <div class="ingredienti">Pom, mozz, briè, crudo, rucola, grana</div>
          <div class="prezzo">8.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Philadelphia</div>
          <div class="ingredienti">Pom, mozz, tris di funghi, philadelphia, grana</div>
          <div class="prezzo">8.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Crema del Piave</div>
          <div class="ingredienti">Pom, mozz, stracchino, chiodini, prosciutto, salamino picc.</div>
          <div class="prezzo">8.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Tigre</div>
          <div class="ingredienti">Pom, mozz, fontina, porcini, speck</div>
          <div class="prezzo">7.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Boscaiola</div>
          <div class="ingredienti">Pom, mozz, tris di funghi, grana</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Golosa</div>
          <div class="ingredienti">Pom, mozz, pancetta, provola, radicchio</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Delizia</div>
          <div class="ingredienti">Pom, mozz, crema del piave, radicchio, prosciutto</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Veneta</div>
          <div class="ingredienti">Pom, mozz, melanzane, salsiccia, funghi</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Profumi di Bosco</div>
          <div class="ingredienti">Pom, mozz, tris di funghi, noci, grana</div>
          <div class="prezzo">8.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Montana</div>
          <div class="ingredienti">Pom, mozz, funghi, asiago, speck</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Misto Funghi</div>
          <div class="ingredienti">Pom, mozz, porcini, chiodini, champignon</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Carbonara</div>
          <div class="ingredienti">Pom, mozz, pancetta, uovo, grana</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Porcini e Grana</div>
          <div class="ingredienti">Pom, mozz, porcini, grana</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Gorgonzola e Speck</div>
          <div class="ingredienti">Pom, mozz, gorgonzola, speck</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Bresaola e Grana</div>
          <div class="ingredienti">Pom, mozz, bresaola, grana</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Asiago e Porcini</div>
          <div class="ingredienti">Pom, mozz, porcini, asiago</div>
          <div class="prezzo">7.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Genovese</div>
          <div class="ingredienti">Pom, mozz, pesto, olive, noci</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Parma</div>
          <div class="ingredienti">Pom, mozz, prosciutto crudo</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Piccantissima</div>
          <div class="ingredienti">Pom, mozz, salamino picc., peperoni, peperoncino</div>
          <div class="prezzo">6.50 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Bufalina</div>
          <div class="ingredienti">Pom, mozzarella di bufala senza conservanti</div>
          <div class="prezzo">6.00 €</div>
          </div>
          <div class="pizza">
          <div class="nome">Cavallina</div>
          <div class="ingredienti">Pom, mozz, sfilacci, rucola, grana</div>
          <div class="prezzo">7.50 €</div>
          </div>
          </div>
          </div>`
        },1000); //inserire html del listino

      };
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
