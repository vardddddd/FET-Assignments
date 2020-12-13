window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src="europa.jpg";
    ctx.drawImage(img, 0, 0); 
  }



// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// var arcWidth = 10;
// var radius = 8 * arcWidth;

// var omkadering = document.getElementById("myCanvas");
// var context = omkadering.getContext("2d");
// omkadering.width = (radius + (colors.length-0.5) * arcWidth) * 2;
// omkadering.height = (radius + (colors.length-1) * arcWidth);

// // var drawArc = function( color ){
//   context.beginPath();
//   context.arc(
//     omkadering.width/2,
//     omkadering.height + arcWidth/2,
//     radius,
//     Math.PI,
//     2*Math.PI
//   );
//   context.lineWidth = arcWidth;
//   context.strokeStyle = color;
//   context.stroke();
//   context.closePath();
//   radius += arcWidth;
// };

// colors.reverse().forEach( drawArc );