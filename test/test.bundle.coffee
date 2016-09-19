iconCount = 634

describe 'Font Awesome OpenUI5 - Bundle', ->
  it 'should loaded OpenUI5 icon pool module', ->
    expect(sap.ui.core.IconPool).to.exist
    return
  it 'should add all Font Awesome icons into OpenUI5 icon pool.', ->
    expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount)
    return
  return
