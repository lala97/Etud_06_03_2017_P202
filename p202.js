$(document).ready(function() {
  $('.thumb img').click(function() {
    var source= $(this).attr('src');
    $('.slider').fadeTo('slow',0.6,function() {
      $(this).css({
        'background-image' : 'url(' + source + ')'
      })
    }).fadeTo('slow',1)

  })
})
// console.log();
 childrenWidth=$('.slider').width();
 length=$('.subMain').children().length;
  prev = 0;
 margin=0;

 function next() {
   prev++;
    margin+=childrenWidth;
    if (prev >=length) {
        margin = 0;
        prev=0;
    }
    $('.subMain').css({
    'marginLeft' :-margin,
    'transition' : 'all 1s'
  })
 }

 function previous() {
   prev--;
    margin-=childrenWidth;
    if (prev <= 0) {
        margin = childrenWidth*(length-1);
        prev=length;
    }
    $('.subMain').css({
    'marginLeft' :-margin,
    'transition' : 'all 1s'
   })
 }

$('#next').click(function() {
  next();
})

$('#previous').click(function() {
  previous();
})
