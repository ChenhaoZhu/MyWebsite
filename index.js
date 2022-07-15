
var currentIndex = 1;
var totalCount = 3;
const mus = ['images/background-boyonmask.jpeg', 'images/background-girlwithdesk.jpeg', 'images/blackground-girl.jpeg']
let topp = document.getElementsByClassName('top-container')
var curImgId = 0;
setInterval(function() {

    $(topp[0]).css('background-image','url("'+ mus[curImgId]);

    curImgId = (curImgId + 1) % 3;
    // console.log(topp[0].innerHTML);
}, 5000);
