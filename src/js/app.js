
function init() {



  console.log('hello');

  const $play = $('#play');
  const $countdown = $('#countdown');
  const $images = $('#images');
  const $formdiv = $('#formdiv');
  const $submit = $('#submit');
  const $score =  $('#score');
  let $placeholder =  $('#placeholdertext');
  const useranswer = $('#usertext');



  let timeRemaining = 10;
  let timerOn = false;
  let pointscounter = 0;
  let clock = null; //null is the same as false
  const $answer = 'hello';


  $score.html(0);


  function countDownLogic() {

    if (timeRemaining > 0) {
      --timeRemaining;
      $countdown.html(timeRemaining);
      console.log('start timer');
      $images.removeClass('hide');
      $formdiv.removeClass('hide');
      // $formdiv.removeClass('hide');

      // IF COUNTDOWN HITS ZERO ADD CLASS
      if (timeRemaining === 0) {
        // $play.classList.remove('hide');
        console.log('time stops');

      } else {
        // $play.classList.remove('ringing');
        // console.log('false');
      }


    } else {
      timerOn = false;
      clearInterval(clock);
    }

    $play.html('PLAY AGAIN!');


  }


  $play.on('click', () => {

    if (!timerOn) {
      timerOn = true;
      clock = setInterval(countDownLogic, 1000);

      $images.fadeIn(1000);
      $formdiv.fadeIn(1000);

      // $formdiv.fadeIn( 'slow', function() {
      // });

      // $formdiv.animate({left: '250px'});
      // countDownLogic();
    }

  });


  $submit.on('click', (e) => {
    console.log('submitted');
    let answer = useranswer.val();
    e.preventDefault();

    if (answer === 'hello') {
      console.log('true');
      let totalpoints = pointscounter += 1;
      $score.html(totalpoints);
      console.log('score updated');

    } else {
      $placeholder.html('try again');
      console.log('false');

    }
  });

  // a = Math.round(Math.random()*10);
  // b = Math.round(Math.random()*10);
  // sum = a + b;
  // questions.innerHTML = `${a} + ${b}`;






}

$(init);

// Build basic html structure
// Pull through variables

// Images sit within grid
// Images have a disort class.

// When 'play' load page with images
// Loaded images sliced
// Page loads with timer.
// Page loads with points score.

// When user types answer, text is parsed as a string.
// compare the output with the answer.
// Case insensitive


// Level one.  Simple guess vs timer game.

// Level two.  The tiles start to drop off and deducts 1pt per tile.
