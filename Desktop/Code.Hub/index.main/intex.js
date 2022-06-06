//function whichAnimationEvent(){
//  var t,
//      el = document.createElement("fakeelement");
//
//  var animations = {
//    "animation"      : "animationend",
//    "OAnimation"     : "oAnimationEnd",
//    "MozAnimation"   : "animationend",
//    "WebkitAnimation": "webkitAnimationEnd"
//  }
//
//  for (t in animations){
//    if (el.style[t] !== undefined){
//      return animations[t];
//    }
//  }
//}
//
//var animationEvent = whichAnimationEvent();
//
///*var path = document.querySelector('.circle-2'); 
//var length = path.getTotalLength();
//console.log(length);*/
//
//$('.circle-1').on(animationEvent, function(event) {
//		
//    $('.spinner').attr("class", "spinner animated");
//    $('.circle-1').attr("class", "circle-1");
//  
//});
//
//$('.spinner').on(animationEvent, function(event) {
//		
//    $('.spinner').attr("class", "spinner");
//    $('.circle-3').attr("class", "circle-3 animated");
//    $('.circle-4').attr("class", "circle-4 animated");
//  
//});
//
//$('.circle-4').on(animationEvent, function(event) {
//		
//    $('.circle-3').attr("class", "circle-3");  
//    $('.circle-4').attr("class", "circle-4");
//    $('.circle-1').attr("class", "circle-1 animated");
//  
//});