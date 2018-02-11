// const $countdown = $('#countdown');

// let timeRemaining = 30;
// let timerOn = false;
// let timerId = null; //null is the same as false

function init() {



  console.log('hello');

  const $play = $('#play');
  const $countdown = $('#countdown');

  let timeRemaining = 30;
  let timerOn = false;
  let timerId = null; //null is the same as false


  // $play.on('click', () => {
  //   console.log('clicked');
  //
  //
  // });


  function countDownLogic() {

    if (timeRemaining > 0) {
      --timeRemaining;
      $countdown.html(timeRemaining);
      console.log('start timer');

      // IF COUNTDOWN HITS ZERO ADD CLASS
      if (timeRemaining === 0) {
        $play.classList.remove('hide');
        // document.body.appendChild('redBtn');    // Append <button> to <body>
      } else {
        // $play.classList.remove('ringing');
        console.log('false');
      }


    } else {
      timerOn = false;
      clearInterval(timerId);
    }

    $play.html('PLAY AGAIN!');


  }


  $play.on('click', () => {

    if (!timerOn) {
      timerOn = true;
      // countDownLogic();
      timerId = setInterval(countDownLogic(), 1000);
    }
  });




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


// Level one.  Simple guess vs timer game.

// Level two.  The tiles start to drop off and deducts 1pt per tile.




//
// const $play = $('#play');
// const $countdown = $('#countdown');
//
// let timeRemaining = 30;
// let timerOn = false;
// const timerID = null; //null is the same as false
//
// function init() {
//
//   console.log('hello');
//
//   function countDownLogic() {
//
//     if (timeRemaining > 0) {
//       --timeRemaining;
//       $countdown.html(timeRemaining);
//       console.log('start timer');
//       // IF COUNTDOWN HITS ZERO ADD CLASS
//       if (timeRemaining === 0) {
//         $play.classList.remove('hide');
//         // document.body.appendChild('redBtn');    // Append <button> to <body>
//       } else {
//         // $play.classList.remove('ringing');
//         console.log('false');
//       }
//     } else {
//       timerOn = false;
//       clearInterval(timerID);
//     }
//
//     $play.html('PLAY AGAIN!');
//
//   }
//
//   $play.on('click', () => {
//
//     if (!timerOn) {
//       timerOn = true;
//       countDownLogic();
//     }
//   });
// }
//
// window.addEventListener('load', init);

// Build basic html structure
// Pull through variables

// Images sit within grid
// Images have a disort class.

// When 'play' load page with images
// Loaded images sliced


// Page loads with timer.
// Page loads with points score.
