let timeRemaining = 120;
let timerOn = false;
let totalpoints = 0;
let clock = null;
let round = 0;

function init() {

  console.log('hello');

  const $play = $('#play');
  const $countdown = $('#countdown');
  const $images = $('#imagescontainer');
  const $form = $('#form');
  const $score =  $('#score');
  const $placeholder =  $('#placeholdertext');
  const userAnswer = $('#usertext');
  const $boost = $('#boost');
  const $endMessage = $('#endmessage');
  const $section3 = $('#section3');

  // const $parent = $('.parent');

  const $playSound = $('#pointsSound');
  const $incorrectSound = $('#incorrectSound');
  const $yodaSound = $('#yodaSound');
  const $aliensSound = $('#aliensSound');
  const $idSound = $('#idSound');
  const $etSound = $('#etSound');
  const $matrixSound = $('#matrixSound');
  const $terminatorSound = $('#terminatorSound');
  const $flashSound = $('#flashSound');
  const $bladerunnerSound = $('#bladerunnerSound');
  const $cloverfieldSound = $('#cloverfieldSound');
  const $jurassicparkSound = $('#jurassicparkSound');



  const game = [{
    answer: 'star wars',
    images: ['images/starwars_1.jpg', 'images/starwars_2.jpg', 'images/starwars_3.jpg', 'images/starwars_4.jpg', 'images/starwars_5.jpg', 'images/starwars_6.jpg', 'images/starwars_7.jpg', 'images/starwars_8.jpg', 'images/starwars_9.jpg', 'images/starwars_10.jpg', 'images/starwars_11.jpg', 'images/starwars_12.jpg'],
    level: 1,
    sound: $yodaSound

  }, {
    answer: 'et',
    images: ['images/et1.jpg', 'images/et2.jpg', 'images/et3.jpg', 'images/et4.jpg', 'images/et5.jpg', 'images/et6.jpg', 'images/et7.jpg', 'images/et8.jpg', 'images/et9.jpg', 'images/et10.jpg', 'images/et11.jpg', 'images/et12.jpg' ],
    level: 2,
    sound: $etSound

  },{
    answer: 'the matrix',
    images: ['images/matrix1.jpg', 'images/matrix2.jpg', 'images/matrix3.jpg', 'images/matrix4.jpg', 'images/matrix5.jpg', 'images/matrix6.jpg', 'images/matrix7.jpg', 'images/matrix8.jpg', 'images/matrix9.jpg', 'images/matrix10.jpg', 'images/matrix11.jpg', 'images/matrix12.jpg' ],
    level: 3,
    sound: $matrixSound

  },{
    answer: 'flash gordon',
    images: ['images/flash1.jpg', 'images/flash2.jpg', 'images/flash3.jpg', 'images/flash4.jpg', 'images/flash5.jpg', 'images/flash6.jpg', 'images/flash7.jpg', 'images/flash8.jpg', 'images/flash9.jpg', 'images/flash10.jpg', 'images/flash11.jpg', 'images/flash12.jpg' ],
    level: 4,
    sound: $flashSound

  },{
    answer: 'terminator 2',
    images: ['images/t1.jpg', 'images/t2.jpg', 'images/t3.jpg', 'images/t4.jpg', 'images/t5.jpg', 'images/t6.jpg', 'images/t7.jpg', 'images/t8.jpg', 'images/t9.jpg', 'images/t10.jpg', 'images/t11.jpg', 'images/t12.jpg' ],
    level: 5,
    sound: $terminatorSound

  }, {
    answer: 'independence day',
    images: ['images/id1.jpg', 'images/id2.jpg', 'images/id3.jpg', 'images/id4.jpg', 'images/id5.jpg', 'images/id6.jpg', 'images/id7.jpg', 'images/id8.jpg', 'images/id9.jpg', 'images/id10.jpg', 'images/id11.jpg', 'images/id12.jpg'],
    level: 6,
    sound: $idSound
  }, {
    answer: 'cloverfield',
    images: ['images/c1.jpg', 'images/c2.jpg', 'images/c3.jpg', 'images/c4.jpg', 'images/c5.jpg', 'images/c6.jpg', 'images/c7.jpg', 'images/c8.jpg', 'images/c9.jpg', 'images/c10.jpg', 'images/c11.jpg', 'images/c12.jpg' ],
    level: 7,
    sound: $cloverfieldSound
  }, {
    answer: 'jurassic park',
    images: ['images/jp1.jpg', 'images/jp2.jpg', 'images/jp3.jpg', 'images/jp4.jpg', 'images/jp5.jpg', 'images/jp6.jpg', 'images/jp7.jpg', 'images/jp8.jpg', 'images/jp9.jpg', 'images/jp10.jpg', 'images/jp11.jpg', 'images/jp12.jpg' ],
    level: 8,
    sound: $jurassicparkSound
  }, {
    answer: 'bladerunner',
    images: ['images/br1.jpg', 'images/br2.jpg', 'images/br3.jpg', 'images/br4.jpg', 'images/br5.jpg', 'images/br6.jpg', 'images/br7.jpg', 'images/br8.jpg', 'images/br9.jpg', 'images/br10.jpg', 'images/br11.jpg', 'images/br12.jpg'],
    level: 9,
    sound: $bladerunnerSound
  }, {
    answer: 'aliens',
    images: ['images/alien1.jpg', 'images/alien2.jpg', 'images/alien3.jpg', 'images/alien4.jpg', 'images/alien5.jpg', 'images/alien6.jpg', 'images/alien7.jpg', 'images/alien8.jpg', 'images/alien9.jpg', 'images/alien10.jpg', 'images/alien11.jpg', 'images/alien12.jpg'],
    level: 10,
    sound: $aliensSound

  }];

  // EVENT LISTENERS SECTION:
  $play.on('click', playGame);  // CLICK EVENT WHEN YOU PRESS PLAY
  $form.on('submit', answerSubmit);  // CLICK EVENT FOR ANSWER SUBMISSION
  $boost.on('click', boostAnimation); //CLICK EVENT FOR BOOST SHAKE


  // FUNCTIONS SECTION:
  // THIS FUNCTION SHUFFLES THE SELECTION OF ARRAY IMAGES
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  $boost.hide();
  $section3.addClass('hide');

  // COUNTDOWN LOGIC
  function playGame() {
    if (!timerOn) {
      timerOn = true;
      clock = setInterval(countDownLogic, 1000);
      $placeholder.html('Your 60 seconds start NOW!!!').addClass('animated flash');

      // APPLY SHUFFLE FUNCTION TO ARRAY OF IMAGES
      const imagesCopy = game[round].images.slice(0);
      shuffle(imagesCopy);
      // PLAY SOUND ON LEVEL LOAD
      game[round].sound.get(0).play();

      // LOOP THROUGH THE IMAGES
      imagesCopy.forEach(image => {
        $images.append(`<img src="${image}" alt"">`);
      });

      //HIDE PLAY CTA
      $play.addClass('hide');
      // FADE INITIAL DIVS IN AND OUT ON PLAY
      $images.fadeIn(1000);
      $form.fadeIn(1000);
      $section3.removeClass('hide').addClass('animated fadeInUpBig');
      $countdown.fadeIn(2000);
      $score.html('<i class="fa fa-rocket" aria-hidden="true"></i>' + 'score: 0').fadeIn(2000);
      $boost.html('<i class="fa fa-music" aria-hidden="true"></i>' + 'replay sound clip!').fadeIn(2000);
    }
  }

  // FUNCTION FOR BOOST BUTTON
  function boostAnimation() {
    (game[round].sound).get(0).play();
    $boost.addClass('animated pulse infinite').one('animationend webkitAnimationEnd oAnimationEnd', function() {
      $boost.removeClass('animated pulse');
    });
  }

  // FUNCTION FOR COUNTDOWN LOGIC AND ACTIONS WHICH OCCUR WITHIN
  function countDownLogic() {

    // IF TIME IS GREATER THAN 0
    if (timeRemaining > 0) {
      --timeRemaining;
      $countdown.html('<i class="fa fa-clock-o" aria-hidden="true"></i>' + 'seconds: ' + timeRemaining).fadeIn(1000);

      // UNHIDE/REVEAL QUIZ IMAGES AND FORM
      $images.removeClass('hide');
      $form.removeClass('hide');

      // IF COUNTDOWN HITS ZERO ADD CLASS
      if (timeRemaining === 0) {
        $form.addClass('disabled');
        ending();
      }

    } else {
      timerOn = false;
      clearInterval(clock);
    }
  }


  // ANSWER LOGIC, INCREMENTING POINTS/ROUND LOGIC
  function answerSubmit(e) {
    game[round].sound.get(0).pause();
    e.preventDefault();

    const answer = userAnswer.val().toLowerCase();
    let str = (game[round].answer);
    str = str.toUpperCase();

    // LOGIC FOR IF THE ANSWER IS CORRECT
    if (answer === game[round].answer) {
      $placeholder.html('You got it!  The movie was: ' + str);
      totalpoints += 1;

      // SHOW THE CORRECT IMAGES IN ORDER
      $images.empty();
      game[round].images.forEach(image => {
        $images.append(`<img src="${image}" alt"">`);
      });

      // UPDATE THE SCORE ON SCREEN AND FLASH/PLAY SOUND
      $score.html('<i class="fa fa-rocket" aria-hidden="true"></i>' + 'score: ' + totalpoints).addClass('animated flash');
      $playSound.get(0).play();
      // CLEAR THE ANSWER FORM
      $(userAnswer).val('');

      // PLAY THE NEXT ROUND OF MOVIES/IMAGES
      round += 1;
      $form.fadeOut(3000);

      // PLAY NEXT ROUND OF SOUNDS
      setTimeout(function () {
        game[round].sound.get(0).play(0);
      }, 3000);

      // CLEAR THE IMAGES CONTAINER AND SHUFFLE NEXT ROUND OF IMAGES
      $images.fadeOut(3000, () => {
        $images.empty();
        shuffle(game[round].images.slice(0)).forEach(image => {
          $images.append(`<img src="${image}" alt"">`).fadeIn(1000);
          $form.fadeIn(1000);
        });

      });
    } else {
      $placeholder.html('epic fail!  try again.').addClass('animated shake');
      $incorrectSound.get(0).play();
    }
  }


  // END OF GAME FUNCTION
  function ending() {
    // console.log('game over!');
    game[round].sound.get(0).pause();
    $endMessage.addClass('animated fadeInUp').html('You scored ' + totalpoints + '/10 points!' + '<br>' + 'DONE WELL...YOU HAVE...' + '<br>').fadeIn(1000);

    const yodaImage = $('<img id="yodaImage" src="images/yoda_crop.jpg" />').addClass('animated shake');
    $endMessage.append(yodaImage);

    const linebreak = $('<br>');
    $endMessage.append(linebreak);

    const reset = $('<button></button>').text('play again').addClass('animated pulse infinite');
    $endMessage.append(reset);



    $placeholder.addClass('hide');
    $section3.addClass('hide');
    $images.fadeOut(1000);
    $form.fadeOut(1000);
    $countdown.fadeOut(1000);
    $score.fadeOut(1000);
    $boost.fadeOut(1000);

    reset.on('click', resetGame);
  }

  // RESET GAME FUNCTION
  function resetGame() {
    $placeholder.html('').css({margin: '0'}).removeClass('hide');
    $form.removeClass('disabled');
    totalpoints = 0;
    round = 0;
    timeRemaining = 60;
    $images.empty().show();
    // $parent.css({ marginTop: '20px' });
    $endMessage.addClass('hide');
    $section3.removeClass('hide');
    playGame();
  }

}
$(init);
