/*Jag har kommenterat koden om vad de gör. Har tagit hjälp från diverse inlägg från Stackoverflow och W3Schools.*/
$(document).ready(function () {
  $(".menu__icon").click(function () {
    $("body").toggleClass("menu_shown");
  });
});

/*Skapar en lista av alla taggar med portfolio*/
const portfolioItems = document.querySelectorAll(".portfolio");
/*Loopar igenom listan och sätter en lyssnare för när man placerar muspekaren för var och en av portföljobjektet*/

portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    /*Lägger till selektorn img-darken för att göra en mörkläggning av objektet när musen är över*/
    portfolioItem.childNodes[1].classList.add("img-darken");
  });
  /*Samma princip som ovan fast här är det när man tar bort muspekaren över portföljobjektet*/
  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[1].classList.remove("img-darken");
  });
});

//Kod för tillbaka upp-knappen från W3Schools: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp, förbättrad användarupplevelse
//Hämtar knappen med id:et myBtn från HTML
mybutton = document.getElementById("myBtn");

//När användaren skrollar mer än 400px från roten av toppen (t ex html-taggen eller body) så ska tillbaka uppåt-knappen visas
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Avser navigeringsfältets doldhet
var prevScrollpos = window.pageYOffset;
function scrollTopnavFunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}

//När använder klickar på tillbaka uppåt-knappen så skickas man till början av sidan
function topFunction() {
  document.body.scrollTop = 0; // För Safari
  document.documentElement.scrollTop = 0; // För Chrome, Firefox, IE och Opera
}

//När man skrollar, kalla alla dessa funktioner
window.onscroll = function () {
  scrollFunction();
  scrollTopnavFunction();
};
