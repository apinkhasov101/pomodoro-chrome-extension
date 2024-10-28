// multiple num value by 1000ms for setTimeout
// after countdown is over, extension will play a sound (and have pop-up window)

document.addEventListener('DOMContentLoaded', () => {
  // MAIN CODE
  // take inputted num of minutes from user as a num val
  const minutes = document.getElementById('minutes');
  const myButton = document.getElementById('myButton');

  // save minutes input, convert from string to num




  myButton.addEventListener('click', () => {
    const audio = new Audio('Italian.m4a');

    let inputMinutes = Number(minutes.value);
    //insert logic of countdown here
    // Number(minutes.value)

    setTimeout(() => {
      console.log('countdown working');
      // console.log(typeof minutes.value);
      audio.play();
      alert("Time for a 5 minute break!");
    }, 60000 * inputMinutes);

    // setTimeout(() => {
    //   console.log('countdown working');
    //   // console.log(typeof minutes.value);
    //   audio.play();
    //   alert("Starting another 25 minute session");
    // }, 60000 * 5);
  });
});

// EXTENSION GOAL
// Display current countdown clock
// allow user to end alarm, or snooze for 5 more minutes.
// Stylize the look of the extension via CSS
