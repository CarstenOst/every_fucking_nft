// Set the date
let countDownDate = new Date("Jan 21, 2022 12:00:00").getTime();
let tgsgs = 1000 * 60 * 60; // less numbers
let tgsgsgtf = tgsgs * 24;

// Update the count down every 1 second
let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (tgsgsgtf));
    let hours = Math.floor((distance % (tgsgsgtf)) / (tgsgs));
    let minutes = Math.floor((distance % (tgsgs)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="countDown"
    document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "EXPIRED";}}, 1000); // "1000" is one second