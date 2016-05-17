iconCount = 634

define ['font-awesome-openui5'], (FontAwesomeOpenUI5) ->
  describe 'Font Awesome OpenUI5 - Core', ->
    it 'should loaded OpenUI5 icon pool module', ->
      expect(jQuery.sap.require).to.exist
      expect(sap.ui.core.IconPool).to.exist
      return
    it 'should add all Font Awesome icons into OpenUI5 icon pool.', (done) ->
      iconSourceUrl = 'bower_components/font-awesome-icon-chars/character-list/character-list.json'
      if window.__karma__ != undefined
        iconSourceUrl = 'base/' + iconSourceUrl
      FontAwesomeOpenUI5.loadIcons(iconSourceUrl).then (icons) ->
        FontAwesomeOpenUI5.importFont icons, {
          id: 'id',
          char: 'unicode'
        }
        try
          expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount)
          done()
        catch err
          done(err)
        return
      return
    return
  return
