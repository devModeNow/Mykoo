/* #version=0.0.0-0#6 rf 2023-10-21T23:42:01 9A6F62923B9E0984 */
/* #version=0.0.0-0#5 rf 2023-10-21T23:38:13 CBCE0FBA2EBCDD3D */
function no() {

    var button = document.getElementById("no");
    var newX = Math.random() * window.innerWidth;
    var newY = Math.random() * window.innerHeight;

    button.style.position = 'relative'
    button.style.left = newX + "px";
    button.style.top = newY + "px";

    console.log(button)
}

function yes () {

    var container = document.getElementById('container')
    var result = document.getElementById('result')

    container.style.display = 'none'

    result.style.display = 'block'
    result.style.opacity = 1
    

    var audio = document.getElementById("myAudio");
    audio.play();

}