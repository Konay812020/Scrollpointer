var getprogress = document.getElementsByClassName("progress");
var getprogressbar = document.getElementById("progress-bar");


window.onscroll = function () {

    scrollpoint();


}
// formula
//st*100/(projectheight-current height)
//scroll top
//project height
//current height
//project height-current height
//scrolltop*100/(project height-current height)

function scrollpoint() {
    var getscrolltop = document.documentElement.scrollTop;
    var getscrollheight = document.documentElement.scrollHeight;
    console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    console.log(getclientheight);
    var calheight = getscrollheight - getclientheight;
    var getfinal = Math.round(getscrolltop * 100 / calheight);

    getprogressbar.style.width = `${getfinal}%`;
}

function printme() {
    window.print();
}