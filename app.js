//clock
var buttons = document.querySelector('.button-div');
var clockHand = document.querySelector('.clock-hand');
var degrees = 90;
var stop = false;
//timer - visible
var hours = document.querySelector('#hours');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var milliseconds = document.querySelector('#millseconds');
//timer trackers
var hoursTracker = 0;
var minutesTracker = 0;
var secondsTracker = 0;
var millisecondsTracker = 0;


buttons.addEventListener('click', (e) => {

if(e.target.className === 'button timer-button')  {
  if(stop) {stop = false}
  var tick = setInterval( () => {
    if(stop === false) {
      degrees += 0.6;
      clockHand.style.transform = `rotate(${degrees}deg)`;

//*************timer****************
      millisecondsTracker += 1;
      if(millisecondsTracker === 10) {
        millisecondsTracker = 0;
        secondsTracker += 1;
      }

      if (secondsTracker === 60) {
        secondsTracker = 0;
        minutesTracker += 1;
      }

      if(minutesTracker === 60) {
        minutesTracker = 0;
        hoursTracker += 1;
      }
      milliseconds.textContent = millisecondsTracker;
      seconds.textContent = secondsTracker;
      minutes.textContent = minutesTracker;
      hours.textContent = hoursTracker;
    }
    if(stop) {clearInterval(tick);}
  }, 100);

}

else if(e.target.className === 'button stop-button') {
  stop = true;
}
else if(e.target.className === 'button reset-button') {
  stop = true;
  degrees= 90;
  clockHand.style.transform = 'rotate(90deg)';
  hoursTracker = minutesTracker = secondsTracker = millisecondsTracker = hours.textContent = minutes.textContent = seconds.textContent = milliseconds.textContent = 0;
}

});

//Needs updating
//make responsive (max-hieght), make mobile friendly (remove outline and stop number values from shifting as they //change)
//add lap button, add lap tally and total 
//figure out how to make it continue counting even if you switch to another tab, or minimize. 