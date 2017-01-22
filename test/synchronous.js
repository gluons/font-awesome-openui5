/* global FontAwesomeOpenUI5 */

'use strict';

const iconCount = window.__json__.$get('test/icon-count.json');

describe('Font Awesome OpenUI5 - Browser - Synchronous', function () {
	this.slow(250);

	it('should synchronously add all Font Awesome icons without aliases into OpenUI5 icon pool', () => {
		FontAwesomeOpenUI5.load(null, false);
		expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount.count);
	});
	it('should synchronously add all Font Awesome icons with aliases into OpenUI5 icon pool', () => {
		FontAwesomeOpenUI5.load();
		expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount.totalCount);
	});
});
