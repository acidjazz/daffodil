var Spa;

Spa = {
  sections: {
    home: 'Home',
    services: 'Services'
  },
  i: function() {
    console.log('SPA initiation');
    Spa.handlers();
    return Spa.menu('home');
  },
  handlers: function() {
    return $('.header > .menu > a.item').click(Spa.menuHandler);
  },
  menuHandler: function() {
    return Spa.menu($(this).text());
  },
  menu: function(to) {
    var current;
    current = $('.header > .menu > a.item.on').text();
    console.log(current);
    console.log(current + " -> " + to);
    _.off(".header > .menu > a.item.item_" + current);
    _.on(".header > .menu > a.item.item_" + to);
    if (current !== '') {
      window[Spa.sections[current]].d();
    }
    if (current !== '') {
      _.off("." + current + ".section");
    }
    _.on("." + to + ".section");
    return window[Spa.sections[to]].i();
  }
};
