const iconCount = 634;

describe('Font Awesome OpenUI5 - Bundle', function () {
	it('should loaded OpenUI5 icon pool module', function () {
		expect(sap.ui.core.IconPool).to.exist;
	});
	it('should add all Font Awesome icons into OpenUI5 icon pool.', function () {
		expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount);
	});
});
