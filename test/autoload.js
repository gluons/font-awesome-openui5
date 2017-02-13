'use strict';

const iconCount = window.__json__.$get('test/icon-count.json');

describe('Font Awesome OpenUI5 - Browser - Autoload', function () {
	this.slow(250);

	it('should autoload Font Awesome icons', () => {
		expect(sap.ui.core.IconPool).to.not.be.undefined;
	});
	it('should add all Font Awesome icons with aliases into OpenUI5 icon pool', () => {
		expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount.totalCount);
	});
});
