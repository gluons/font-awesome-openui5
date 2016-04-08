iconCount = 605

describe 'Font Awesome OpenUI5 - Core', ->
  it 'should loaded OpenUI5 icon pool module', ->
    expect(jQuery.sap.require).to.exist
    return
  it 'should add all Font Awesome icons into OpenUI5 icon pool.', ->
    iconSourceUrl = 'bower_components/font-awesome-icon-chars/character-list/character-list.json'
    if window.__karma__ != undefined
      iconSourceUrl = 'base/' + iconSourceUrl
    FontAwesomeOpenUI5.loadIcons(iconSourceUrl).then (icons) ->
      FontAwesomeOpenUI5.importFont icons, {
        id: 'id',
        char: 'unicode'
      }
      expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount)
      return
    return
  return
