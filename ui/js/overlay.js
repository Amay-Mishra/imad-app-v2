function openNav() {
    document.getElementById("myNav").style.height = "100%";
    // document.getElementById("overlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function openRegister() {
    document.getElementById("reg-form").style.display = "block";
    document.getElementById("log-form").style.display = "none";
}

function openLogin() {
    document.getElementById("reg-form").style.display = "none";
    document.getElementById("log-form").style.display = "block";
}
