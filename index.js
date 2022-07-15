
var currentIndex = 1;
var totalCount = 3;
const mus = 
      ['images/background-girlwithsky.jpeg', 'images/background-girlattree.jpeg', 'images/background-boyonmask.jpeg', 
       'images/background-girlwithdesk.jpeg', 'images/blackground-girl.jpeg', 'images/background-boywithdog.jpeg', 
       'images/background-girlwithfeet.jpeg', 'images/background-girleat.jpeg', 'images/background-piano.jpeg',
      'images/background-touxing.jpeg', 'images/background-girlandwindow.jpeg', 'images/background-jojo.jpeg']

let topp = document.getElementsByClassName('top-container')
var curImgId = 0;
setInterval(function() {

    $(topp[0]).css('background-image','url("'+ mus[curImgId]);

    curImgId = (curImgId + 1) % 12;
    // console.log(topp[0].innerHTML);
}, 4000);


var words = ['A Mysterious Man', 'An Interesting Programmer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.firstword').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

