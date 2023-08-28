$(".openMenue ").click(function () {
    $(".open").animate({left: 0}, 1000)      //open sideBar
})
$("#close").click(function () {
    let ancWidth = $(".anc").innerWidth();
    $(".open").animate({left:-ancWidth}, 1000)      //close sideBar
})

$("#slideDown h2").click(function () {
    $(this).next().slideToggle();   //open slide when i click a h2

    $("#slideDown div").not($(this).next()).slideUp(); //open one slide &close other
})


let countDownDate = new Date("Jul 20, 2024 18:37:52").getTime(); // Set the date we're counting down to

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element 
    document.querySelector(".days").innerHTML = days + "d "; // output days
    document.querySelector(".hours").innerHTML = hours + "h ";  // output hours
    document.querySelector(".minutes").innerHTML = minutes + "m ";  // output minutes
    document.querySelector(".seconds").innerHTML = seconds + "s ";  // output seconds
})



$("textarea").keyup(function(){
    let myText = $(this).val().length; // variable about length text

    $("#chars").text(
        100 - myText <= 0 ? "you finished character" : 100 - myText // if character equal 100 type it
    )
})