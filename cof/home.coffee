Home =

  laxInterval: false
  cache: {}

  i: ->

    console.log 'Home.i()'

    Home.cache.banner = $ '.banner > .inner'
    Home.cache.tags = $ '.banner > .inner > .tags'
    Home.cache.bcoords = Home.cache.banner[0].getBoundingClientRect()

    console.log Home.cache.bcoords

    console.log 'Home.i()'

    Home.laxInterval = setInterval ->
      Home.lax()
    , 20


  lax: ->

    st = $(window).scrollTop()

    Home.cache.tags.css 'transform', "translate(#{st/20}px, #{st/10}px) rotate(-#{st/60}deg)"
    Home.cache.banner.css 'transform', "translate(0px, #{st/14}px)"

    #console.log 'paralaxxxxin', st, st/10

