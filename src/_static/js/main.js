// ! all variables
var showlog = true;
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

document.addEventListener('DOMContentLoaded', () => {
  naxHeightFix();
});

document.onscroll = () => {
  try {
    scroller()
  } catch (error) {}
};

window.onload = () => {}


function naxHeightFix() {
  try {
    let navHeight = document.querySelector('#navbar').clientHeight + "px"
    document.querySelector('#navHeightFix').style.height = navHeight;
  } catch (error) {
    if(showlog){
      console.log(error);
    }
  }
}