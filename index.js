
var currentIndex = 1;
var totalCount = 3;
const mus = ['images/background-girlwithsky.jpeg', 'images/background-girlattree.jpeg', 'images/background-boyonmask.jpeg', 'images/background-girlwithdesk.jpeg', 'images/blackground-girl.jpeg', 'images/background-boywithdog.jpeg', 'images/background-girlwithfeet.jpeg', 'images/background-girleat.jpeg', 'images/background-piano.jpeg']
let topp = document.getElementsByClassName('top-container')
var curImgId = 0;
setInterval(function() {

    $(topp[0]).css('background-image','url("'+ mus[curImgId]);

    curImgId = (curImgId + 1) % 9;
    // console.log(topp[0].innerHTML);
}, 4000);
