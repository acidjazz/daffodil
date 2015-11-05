Spa =
    
  sections:
    home: 'Home'
    services: 'Services'

  i: ->
    console.log 'SPA initiation'

    Spa.handlers()

    Spa.menu 'home'

  handlers: ->

    $('.header > .menu > a.item').click Spa.menuHandler

  menuHandler: ->
    Spa.menu $(this).text()

  menu: (to) ->

    current = $('.header > .menu > a.item.on').text()
    console.log current

    console.log "#{current} -> #{to}"

    _.off ".header > .menu > a.item.item_#{current}"
    _.on ".header > .menu > a.item.item_#{to}"

    window[Spa.sections[current]].d() if current isnt ''

    _.off ".#{current}.section" if current isnt ''
    _.on ".#{to}.section"

    window[Spa.sections[to]].i()
