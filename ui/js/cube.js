var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  box.toggleClassName('panels-backface-invisible');
    console.log(box);

};

// var toggle = function(){
//      box.toggleClassName('panels-backface-invisible');
//   };

window.addEventListener( 'DOMContentLoaded', init, false);
