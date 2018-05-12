![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# GA WDI-32 Project 1 - Sci-Fi Movie Quiz

For my first project, I was asked to build a game in HTML, CSS and Javascript, as well as utilising any best practice/UNIT 1 tools we had covered.  Such as responsiveness, libraries such as JQuery, SCSS, Font Awesome.

Rather than produce a retro game, I picked a theme which I'm personally interested in and passionate about, (cinema/film) and I wanted to base my project idea around this concept.  As a result, this led me to the 'Sci-Fi Movie Quiz' idea, where the user has to guess the correct sci-fi movie, by deciphering scrambled images, with accompanying background/theme music at the same time.


##### [Visit website](https://obscure-dawn-59235.herokuapp.com) for best playing experience. (The game has been designed for mobile, but is not rendering responsively on the Heroku platform).

---

###### The Sci-Fi Movie Quiz, is written in 100% CSS/SCSS and JQuery.  And the object of the game is to guess all 10 movies, within 60 seconds.

###### The game begins with a brief intro and CTA to draw the user into the Quiz.

<p align="center"><img src="https://i.imgur.com/SE4bIX8.jpg" width="700"></p>

###### Once the game loads, the user is presented with an array of jumbled images, a countdown timer set at 60 seconds and a score panel.  A sound clip also loads the same time in the background, (relevant to the movie).  And the user has the option, to replay the clip at any time during this round.

<p align="center"><img src="https://i.imgur.com/8jGnkml.jpg" width="700"></p>

###### The user is returned a point if answered correctly. Or a message to advise if answered incorrectly, (both with a matching sounds and animate.css animations).  The input field/form is deactivated, once submitted and the game increments to the next array of images.

###### User input is converted into being case insensitive, when matched against the answer.  And the matching array value, is then outputted in capitals, (to avoid any issues with how characters are displayed).


<p align="center"><img src="https://i.imgur.com/KUfvadf.jpg" width="700"></p>

###### At this point in the game an object is used, to host the movie/level data.  Specifically, image references, the movie name/answer and sound clip references.

###### The images are firstly copied from the object and then shuffled via a function.  And the original array of images are returned sorted, if the quiz round is answered correctly.

<p align="center"><img src="https://i.imgur.com/9yZc1zw.jpg" width="700"></p>

###### Countdown logic is controlled via an if/else statement. And the next round logic, simply increments with a correct answer.  The quiz ends, when the count down timer hits 0.  And the user is give then option, to restart the Quiz.

###### Most other logistics of the game are controlled, by adding/removing classes and animations.

<p align="center"><img src="https://i.imgur.com/jbOfL1q.jpg" width="700"></p>

---
###### Summary:
I really enjoyed working on this project and was happy to finally have an opportunity to practice with JQuery/Javascript, for a longer period of time.  And building the quiz, gave me the opportunity to get comfortable with the basics of JQuery and fundamentals of Javascript.  As a result, if I had more time to work on the quiz, I would have liked to have used more advanced JS - such as callbacks and being more adventurous with functions.  

###### Challenges:
I built the quiz quite freestyle initially and I made the mistake of refactoring too late.  Although the JS file is slightly neater and more organised, the game control flow relies heavily on animations in some key functions.

An enhancement I wanted to make, was to return a different message, should the user score 10 points, within 60 seconds.  And in theory, I should have been able to easily call the ending() function at least, to cater for this condition.  However, the game breaks.  And at such a late stage, I realised I should have refactored along the way, every day.  If my game logic was nearer, duplicating, refactoring and accessing this function should have been easier.

I also spent more time then I wanted to searching for images/clips.  So time I could have spent enhancing my code.

###### Enhancements:
Further enhancements I'd make to the game would be, to add some logic/new content, should the user score all 10 points.

I'd also like to deduct points from the total score, if a sound clip is replayed.

And lastly, a leaderboard would also be nice, to compare scores...

###### Setup instructions:
<ul>
<li>Clone or download the repo. </li>
<li>Install dependencies with yarn install or npm install</li>
<li>Launch the app with gulp.</li>
</ul>

NB: You will need to have installed gulp-cli globally
