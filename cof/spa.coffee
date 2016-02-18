Spa =
    
  sections:
    home: 'Home'
    services: 'Services'
    portfolio: 'Portfolio'
    about: 'About'

  i: ->
    console.log 'SPA initiation'

    Spa.handlers()


    if Object.keys(Spa.sections).indexOf(location.hash.replace('#','')) isnt -1
      Spa.menu location.hash.replace '#', ''
    else
      Spa.menu 'home'

  handlers: ->

    $('.header > .menu > a.item, .submenu > a.item').click Spa.menuHandler

  menuHandler: ->
    Spa.menu $(this).data 'section'
    window.scrollTo 0, 0

  menu: (to) ->

    current = $('.header > .menu > a.item.on').text()
    console.log current

    console.log "#{current} -> #{to}"

    _.off ".header > .menu > a.item.item_#{current}"
    _.on ".header > .menu > a.item.item_#{to}"

    window[Spa.sections[current]].d() if current isnt ''

    _.off ".#{current}.section" if current isnt ''

    _.on '.loader'
    srces = Spa.srces $(".#{to}.section div")
    Spa.preload srces,
      (progress) ->
        $('.loader > .inner > .full').css 'width', "#{progress*100}%"
        console.log progress
      , (complete) ->
        $('.loader > .inner > .full').css 'width', '100%'
        _.off '.loader'
        _.on ".#{to}.section"
        setTimeout ->
          $('.loader > .inner > .full').css 'width', '0%'
        , 1000

      window[Spa.sections[to]].i()

  srces: (el) ->
    srces = []
    el.each  (i, el) ->
      src = Spa.srcFromStyle $(el)
      if src isnt false and src isnt undefined
        srces.push src
    return srces

  srcFromStyle: (el) ->
    style = el.attr 'style'
    return false if style is undefined
    url = style.match(/url\((.*)\)/)
    if url isnt null and url[1] isnt undefined
      return url[1]
    else
      console.log 'ERROR cannot find style for element', style
      console.log url

  preload: (srces, progress, complete) ->

    images = []
    loaded = 0
    total = srces.length

    complete true if total is 0

    for src, i in srces
      images[i] = new Image()
      images[i].src = src.trim()
      images[i].onload = ->
        loaded++
        perc = Math.round(loaded/total*100)/100
        if loaded is total then complete(true) else progress(perc)

