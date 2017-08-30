
  $('#capabilities').on('click', 'a', function(e) {
    e.preventDefault();
    var fragment = this.href;

    fragment = fragment.replace('#', ' #');
    $('#details').load(fragment);

    $('#capabilities a.current').removeClass('current');
    $(this).addClass('current');
  });


  $('#capabilities_xs').on('click', 'a', function(e) {
    e.preventDefault();
    var fragment = this.href;

    fragment = fragment.replace('#', ' #');
    $('#details').load(fragment);

    $('#capabilities_xs a.current').removeClass('current');
    $(this).addClass('current');
  });

