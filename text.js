var i = 0;
var txt = "Nullam quis cursus neque, finibus ultrices leo. Donec in nisl iaculis, sodales ipsum sit amet, sagittis sem. Integer placerat risus ac magna feugiat, id placerat velit congue. Nullam vel sapien sit amet arcu congue porta. Aliquam ac cursus libero. Donec tincidunt risus sed dictum lacinia. Vivamus quis nibh in erat congue consequat eget at libero. Maecenas et sapien justo.";
var speed = 50;

function textAnimate() {
  if (i < txt.length){
    document.getElementById("content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(textAnimate, speed)
  }
}

textAnimate(txt)