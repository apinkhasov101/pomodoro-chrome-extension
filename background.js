// multiple num value by 1000ms for setTimeout
// after countdown is over, extension will play a sound (and have pop-up window)

// GOOD CODE FOR ALARM //
// document.addEventListener('DOMContentLoaded', () => {
//   // MAIN CODE
//   // take inputted num of minutes from user as a num val
//   const minutes = document.getElementById('minutes');
//   const myButton = document.getElementById('myButton');

//   // save minutes input, convert from string to num

//   myButton.addEventListener('click', () => {
//     const audio = new Audio('Italian.m4a');
//     let inputMinutes = Number(minutes.value);
//     //insert logic of countdown here
//     // Number(minutes.value)

//     setTimeout(() => {
//       console.log('countdown working');
//       // console.log(typeof minutes.value);
//       audio.play();
//       alert("Time for a 5 minute break!");
//     }, 60000 * inputMinutes);

//     // setTimeout(() => {
//     //   console.log('countdown working');
//     //   // console.log(typeof minutes.value);
//     //   audio.play();
//     //   alert("Starting another 25 minute session");
//     // }, 60000 * 5);
//   });
// });

// ^ GOOD CODE FOR ALARM ^ //

// EXTENSION GOAL
// Display current countdown clock
// allow user to end alarm, or snooze for 5 more minutes.
// Stylize the look of the extension via CSS

// ^ PseudoCode for Pomodoro //

// we also need an updateDisplay() function ->
// make HTML div on html file that is going to be the timer
//  timerDisplay.textContent = remainingTime

//startTimer function
// -> if (remainingTime > 0)
// -> remainingTime--;
// -> updateDisplay()
// -> setTimeout(startTimer, 1000ms)
// else statement: complete the session

document.addEventListener('DOMContentLoaded', () => {
  const myButton = document.getElementById('myButton');

  myButton.addEventListener('click', () => {
    const audio = new Audio('Italian.m4a');

    // wrap everything in a closure function so that all the variables persist b/w functions we are passing the variables in

    timerFunc();

    function timerFunc() {
      let remainingTime = 5; //* 25 minutes on the clock 150000ms
      let remainingBreak = 3; //* 5 minutes on the clock 30000ms

      startTimerFunc();

      // create a startTimer function
      function startTimerFunc() {
        if (remainingTime > 0) {
          setTimeout(() => {
            remainingTime--;
            console.log('startTimerFunc working');
            // console.log(typeof minutes.value);
            startTimerFunc();
          }, 1000);
        } else {
          console.log('else of 25');
          audio.play();
          alert('Time for a 5 minute break!');
          breakTimerFunc();
          remainingTime = 5;
        }
      }

      function breakTimerFunc() {
        if (remainingBreak > 0) {
          setTimeout(() => {
            remainingBreak--;
            console.log('breakTimerFunc working');
            // console.log(typeof minutes.value);
            breakTimerFunc();
          }, 1000);
        } else {
          console.log('else of 5');
          audio.play();
          alert('Time for another 25 min round!');
          startTimerFunc();
          remainingBreak = 3;
        }
      }

      //* EXTENSIONS:
      // Having the chrome extension run, even after the chrome extension window is closed
      // Styling to look cool
      // Display timer to show the countdown value
      // Pause button

      //  -implement countdown 25->24->23->
      //    initialize variable to store 25 minutes
      //    if remainingTime > 0, then remainingTime--
      //    else: run completeSession()->(this function will check if it's time for a 5 min break / or if the time === 5 minutes, restart timer -- by calling the original 25 min timer func)
      //  when countdown reaches 0, we would have to invoke another function that checks if this session is complete
      //  within this function if it is complete, we can set the 5 min timer and then call startTimer() again
    }
  });
});
