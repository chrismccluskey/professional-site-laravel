window.mccluskey = {
  handler: {}
}

mccluskey.ready = function() {
  var
    $menuButton         = document.getElementById('menu-button'),
    $menu               = document.getElementById('menu'),
    handler;

  handler = {
    menuClick: function(event) {
      if($menu.style.marginTop == '0px') {
        var height = $menu.clientHeight;
        $menu.style.marginTop = '-'+height+'px';
      } else {
        $menu.style.marginTop = '0px';
      }
    }
  }

  $menuButton.addEventListener('click', handler.menuClick);

  mccluskey.handler = handler;
}

document.addEventListener('DOMContentLoaded', mccluskey.ready);
