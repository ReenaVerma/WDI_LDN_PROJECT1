$('#play');
$('#countdown');

let timeRemaining = 10;
let timerOn = false;
let timerID = null; //null is the same as false


function init() {

  console.log('hello');


  play.addEventListener('click', () => {

    if (!timerOn) {
      timerOn = true;
      // answers.classList.remove('hide');
      // redBtn.classList.add('hide');
      // // questions
      // questions.innerHTML = `${a} + ${b}`;

      // WHEN CLICKED START THE COUNTDOWN FROM 10
      function countdownLogic () {

        { if (timeRemaining > 0) {
            --timeRemaining;
          display.innerHTML = timeRemaining;
          }
          // IF COUNTDOWN HITS ZERO ADD CLASS

          if (timeRemaining === 0) {
            play.classList.remove('hide');
            // document.body.appendChild('redBtn');    // Append <button> to <body>
          } else {
            play.classList.remove('ringing');
          }


        }
      }

      timerId = setInterval(countdownLogic, 1000);

    } else {
      timerOn = false;
      clearInterval(timerId);

    }
    redBtn.innerHTML = 'PLAY AGAIN!';
  });



}

window.addEventListener('load', init);

// Build basic html structure
// Pull through variables

// Images sit within grid
// Images have a disort class.

// When 'play' load page with images
// Loaded images sliced


// Page loads with timer.
// Page loads with points score.


// Level one.  Simple guess vs timer game.

// Level two.  The tiles start to drop off and deducts 1pt per tile.
