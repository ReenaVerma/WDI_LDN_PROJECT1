
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
  let round = 0;


  const game = [{
    answer: 'arrival',
    images: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'],
    level: 1
  }, {
    answer: 'elf',
    images: ['images/image4.jpg'],
    level: 2
  }, {
    answer: 'girl',
    images: ['images/image5.jpg'],
    level: 3
  }];

  const levelanswer = game[0].answer || game[1].answer || game[2].answer;

  $score.html('');
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

      // (game[0].image).appendTo($images);
      // $('$images li').each(function (index) {
      //   $(this).text(game[0].image[index]);
      // });
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
        $formdiv.addClass('disabled');
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



  //IMAGE RANDOMISATION
  // function gameplay() {
  //
  //
  //   const level1 = ['image1.jpg', 'image2.jpg'];
  //   // const level2 = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
  //
  //   for (var i = 0; i < level1.length; i++) {
  //     $('<img src="images/' + level1[Math.floor(Math.random() * level1.length)] + '">').appendTo($images);
  //     $('<li/>').appendTo($images);
  //   }
  //
  // }



  // game[0].answer;

  // CLICK EVENT FOR ANSWER SUBMISSION
  $submit.on('click', (e) => {
    console.log('submitted');
    let answer = useranswer.val();
    e.preventDefault();


    if (answer === game[0].answer) {
      console.log('true');
      let totalpoints = pointscounter += 1;
      $score.html(totalpoints);
      console.log('score updated');

      let newround = round +=1;
      game[round].images.forEach(image => {
        $images.append(`<img src="${image}" alt"">`);
      });


    } else {
      $placeholder.html('system error! try again.');
      console.log('false');
      $formdiv.shake(100, 20, 5);


    }
  });


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
