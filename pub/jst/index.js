var Index;

Index = {
  laxInterval: false,
  cache: {},
  i: function() {
    Index.cache.banner = $('.banner > .inner');
    Index.cache.tags = $('.banner > .inner > .tags');
    Index.cache.bcoords = Index.cache.banner[0].getBoundingClientRect();
    console.log(Index.cache.bcoords);
    console.log('Index.i()');
    return Index.laxInterval = setInterval(function() {
      return Index.lax();
    }, 20);
  },
  lax: function() {
    var st;
    st = $(window).scrollTop();
    Index.cache.tags.css('transform', "translate(" + (st / 20) + "px, " + (st / 10) + "px) rotate(-" + (st / 60) + "deg)");
    return Index.cache.banner.css('transform', "translate(0px, " + (st / 14) + "px)");
  }
};
