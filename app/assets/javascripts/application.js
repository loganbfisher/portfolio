// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .
//= require_self
$(document).foundation();

var random_color = function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 9)];
    }
    return color;
}

$('span.label').each(function(){
    $(this).css('background', random_color);
});

$(document).ready(function(){
    var $container = $('#container');
// initialize
    $container.masonry({
        itemSelector: '.item'
    });
});


$('input[type="radio"]').on('click', function(){
    var inputValue = $(this).attr('value');
    var spanTag = $('span.label');

    spanTag.each(function(i){
        if(inputValue == $(this).attr('data')) {
          $(this).closest('.item').prependTo('#container');
        }
    });

    var msnry = new Masonry( '#container');

    msnry.reloadItems()

});
