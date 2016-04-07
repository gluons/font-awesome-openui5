iconCount = 605

describe 'Font Awesome OpenUI5 - Core', ->
  it 'should loaded OpenUI5 icon pool module', ->
    expect(jQuery.sap.require).to.exist
    return
  it 'should add all Font Awesome icons into OpenUI5 icon pool.', ->
    FontAwesomeOpenUI5.importFont window.__fixtures__['font-awesome-icon-chars/character-list'].icons
    expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount)
    return
  return
