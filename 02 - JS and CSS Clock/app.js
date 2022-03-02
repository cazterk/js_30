const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log("seconds: ", seconds);
  console.log("minutes: ", minutes);
  console.log("hours: ", hours);

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegress = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegress}deg)`;
}
setInterval(setDate, 1000);
