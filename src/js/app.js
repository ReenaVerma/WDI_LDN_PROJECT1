
function init() {


  console.log('hello');

  const $play = $('#play');
  const $countdown = $('#countdown');
  const $images = $('#imagescontainer');
  const $imageslice = $('#imageslice');
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


  $score.html('');





  // FUNCTION FOR COUNTDOWN LOGIC
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



  // IMAGE RANDOMISATION
  const level1 = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
  level1.sort();

  for (var i = 0; i < level1.length; i++) {
    $('<img src="images/' + level1[Math.floor(Math.random() * level1.length)] + '">').appendTo($images);
    $('<li/>').appendTo($images);
  }


  // WHEN YOU CLICK PLAY
  $play.on('click', () => {

    if (!timerOn) {
      timerOn = true;
      clock = setInterval(countDownLogic, 1000);

      $images.fadeIn(1000);
      $formdiv.fadeIn(1000);

      //
      // $('.card').each(function(e) {
      //
      //   setTimeout(function() {
      //     $('.card').eq(e).attr('class', 'card ani' + e);
      //   }, e * 150)
      // });
    }
  });


  // CLICK EVENT FOR ANSWER SUBMISSION
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
      $formdiv.shake(100, 20, 5);


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
