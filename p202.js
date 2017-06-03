$(document).ready(function() {
  $('.thumb img').click(function() {
     var source=$(this).attr('src',);
      console.log(source);
      $('.slider').fadeTo('fast',0.4,function() {
        $(this).css({
          'background-image' : 'url('+source+')',
          'transition' :'all .1s'
        })
      }).fadeTo('fast',1);

  })
var margin=0;
var count=0;
  $('#next').click(function() {
    var width=$('.subMain').children().length;
    var contentWidth=$('.subMain').children().width();
    margin+=contentWidth;
    count++;
    // console.log(count);
    if (count >= width) {
      margin=0;
      count=0;
    }
    $('.subMain').css({
      'marginLeft' :-margin,
      'transition' :"all 1s"
    })
  })
  $('#previous').click(function(){
    var width=$('.subMain').children().length;
    var contentWidth=$('.subMain').children().width();
    margin-=contentWidth;
    count--;
    // console.log(count);
    if (count <= length) {
      margin-=contentWidth ;
      count=length-1;
    }
    $('.subMain').css({
      'marginLeft' :margin,
      'transition' :"all 1s"
  })
})
})
