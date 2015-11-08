var Spa;

Spa = {
  sections: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio'
  },
  i: function() {
    console.log('SPA initiation');
    Spa.handlers();
    if (Object.keys(Spa.sections).indexOf(location.hash.replace('#', '')) !== -1) {
      return Spa.menu(location.hash.replace('#', ''));
    } else {
      return Spa.menu('home');
    }
  },
  handlers: function() {
    return $('.header > .menu > a.item').click(Spa.menuHandler);
  },
  menuHandler: function() {
    return Spa.menu($(this).text());
  },
  menu: function(to) {
    var current, srces;
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
    _.on('.loader');
    srces = Spa.srces($("." + to + ".section div"));
    return Spa.preload(srces, function(progress) {
      $('.loader > .inner > .full').css('width', (progress * 100) + "%");
      return console.log(progress);
    }, function(complete) {
      $('.loader > .inner > .full').css('width', '100%');
      _.off('.loader');
      _.on("." + to + ".section");
      return setTimeout(function() {
        return $('.loader > .inner > .full').css('width', '0%');
      }, 1000);
    }, window[Spa.sections[to]].i());
  },
  srces: function(el) {
    var srces;
    srces = [];
    el.each(function(i, el) {
      var src;
      src = Spa.srcFromStyle($(el));
      if (src !== false && src !== void 0) {
        return srces.push(src);
      }
    });
    return srces;
  },
  srcFromStyle: function(el) {
    var style, url;
    style = el.attr('style');
    if (style === void 0) {
      return false;
    }
    url = style.match(/url\((.*)\)/);
    if (url !== null && url[1] !== void 0) {
      return url[1];
    } else {
      console.log('ERROR cannot find style for element', style);
      return console.log(url);
    }
  },
  preload: function(srces, progress, complete) {
    var i, images, j, len, loaded, results, src, total;
    images = [];
    loaded = 0;
    total = srces.length;
    if (total === 0) {
      complete(true);
    }
    results = [];
    for (i = j = 0, len = srces.length; j < len; i = ++j) {
      src = srces[i];
      images[i] = new Image();
      images[i].src = src;
      results.push(images[i].onload = function() {
        var perc;
        loaded++;
        perc = Math.round(loaded / total * 100) / 100;
        if (loaded === total) {
          return complete(true);
        } else {
          return progress(perc);
        }
      });
    }
    return results;
  }
};
