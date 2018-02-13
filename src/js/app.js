
function init() {


  console.log('hello');

  const $play = $('#play');
  const $countdown = $('#countdown');
  const $images = $('#imagescontainer');;
  const $form = $('#form');
  const $score =  $('#score');
  let $placeholder =  $('#placeholdertext');
  const useranswer = $('#usertext');
  const $boost = $('#boost');
  const $playsound = $('#scoresound');
  const $yodasound = $('#yodasound');
  const $alienssound = $('#alienssound');
  const $idsound = $('#idsound');



  let timeRemaining = 10;
  let timerOn = false;
  let pointscounter = 0;
  let clock = null; //null is the same as false
  const $answer = 'hello';
  let round = 0;

  //
  // $(document).ready(function() {
  //   $('#my_audio').get(0).play();
  // });


  const game = [{
    answer: 'star wars',
    images: ['images/starwars_1.jpg', 'images/starwars_2.jpg', 'images/starwars_3.jpg', 'images/starwars_4.jpg', 'images/starwars_5.jpg', 'images/starwars_6.jpg', 'images/starwars_7.jpg', 'images/starwars_8.jpg', 'images/starwars_9.jpg', 'images/starwars_10.jpg', 'images/starwars_11.jpg', 'images/starwars_12.jpg'],
    level: 1,
    answerimage: ['images/darth.jpg'],
    sound: $yodasound

  }, {
    answer: 'aliens',
    images: ['images/alien1.jpg', 'images/alien2.jpg', 'images/alien3.jpg', 'images/alien4.jpg', 'images/alien5.jpg', 'images/alien6.jpg', 'images/alien7.jpg', 'images/alien8.jpg', 'images/alien9.jpg', 'images/alien10.jpg', 'images/alien11.jpg', 'images/alien12.jpg'],
    level: 2,
    answerimage: ['images/aliens.jpg'],
    sound: $alienssound

  }, {
    answer: 'independence day',
    images: ['images/id1.jpg', 'images/id2.jpg', 'images/id3.jpg', 'images/id4.jpg', 'images/id5.jpg', 'images/id6.jpg', 'images/id7.jpg', 'images/id8.jpg', 'images/id9.jpg', 'images/id10.jpg', 'images/id11.jpg', 'images/id12.jpg'],
    level: 3,
    answerimage: ['images/id.jpg'],
    sound: $idsound
  }];




  // $score.html('');
  // game[0].image;

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
  // WHEN YOU CLICK PLAY
  $play.on('click', () => {

    if (!timerOn) {
      timerOn = true;
      clock = setInterval(countDownLogic, 1000);

      // $('<li/>').game[0].image.appendTo($images);


      // shuffle array
      shuffle(game[round].images);
      // loop through the images
      game[round].images.forEach(image => {
        $images.append(`<img src="${image}" alt"">`);
      });


      $play.addClass('hide');
      $images.fadeIn(1000);
      $form.fadeIn(1000);

      $score.hide().html('<i class="fa fa-rocket" aria-hidden="true"></i>' + 'score: 0').fadeIn(2000);
      $boost.hide().html('<i class="fa fa-music" aria-hidden="true"></i>' + 'Need a clue?').fadeIn(2000);


    } else {
      // ending();
    }

  });




  // FUNCTION FOR COUNTDOWN LOGIC
  function countDownLogic() {

    if (timeRemaining > 0) {
      --timeRemaining;
      // $countdown.html(timeRemaining);
      $countdown.html('<i class="fa fa-clock-o" aria-hidden="true"></i>' + 'seconds: ' + timeRemaining).fadeIn(2000);
      console.log('start timer');
      $images.removeClass('hide');
      $form.removeClass('hide');

      // $formdiv.removeClass('hide');

      // IF COUNTDOWN HITS ZERO ADD CLASS
      if (timeRemaining === 0) {
        // $play.classList.remove('hide');
        console.log('time stops');
        $form.addClass('disabled');
        ending();

      } else {
        // $play.classList.remove('ringing');
        // console.log('false');
      }

    } else {
      timerOn = false;
      clearInterval(clock);
    }


  }



  // CLICK EVENT FOR ANSWER SUBMISSION
  $form.on('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    const answer = useranswer.val();


    if (answer === game[round].answer) {
      console.log('true');
      $score.addClass('animated flash');
      $placeholder.html('You got it!  The movie was: ' + game[round].answer);
      const totalpoints = pointscounter += 1;

      $score.html('<i class="fa fa-rocket" aria-hidden="true"></i>' + 'score: ' + totalpoints);
      $playsound.get(0).play();
      console.log('score updated');
      $(useranswer).val('');



      round += 1;
      $form.fadeOut(3000);
      // clearing images container
      $images.fadeOut(3000, () => {
        $images.empty();


        shuffle(game[round].images).forEach(image => {
          $images.append(`<img src="${image}" alt"">`);
          $form.fadeIn(1000);
          $images.fadeIn(1000);
        });
      });


    } else {
      console.log('incorrect answer!');
      $placeholder.html('epic fail!  try again.');
      $placeholder.addClass('animated shake');
      // let totalpoints = [];

      // $formdiv.shake(100, 20, 5);
    }
  });


  $boost.on('click', () => {

    (game[round].sound).get(0).play();
    // $yodasound.get(0).play();
  });

  // END PLAY
  function ending() {
    console.log('time ended');
  }



}

$(init);

// Build basic html structure
// Pull through variables

// Images sit within grid
// Images have a disort class

// When 'play' load page with images
// Loaded images sliced
// Page loads with timer.
// Page loads with points score.

// When user types answer, text is parsed as a string.
// compare the output with the answer.
// Case insensitive


// Level one.  Simple guess vs timer game.

// Level two.  The tiles start to drop off and deducts 1pt per tile.




//IMAGE RANDOMISATION  // function gameplay() {
//  //  //   const level1 = ['image1.jpg', 'image2.jpg'];  //   // const level2 = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
//
//   for (var i = 0; i < level1.length; i++) {  //     $('<img src="images/' + level1[Math.floor(Math.random() * level1.length)] + '">').appendTo($images);  //     $('<li/>').appendTo($images);
//   }  //
// }
