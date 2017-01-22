/* global FontAwesomeOpenUI5 */

'use strict';

const iconCount = window.__json__.$get('test/icon-count.json');

describe('Font Awesome OpenUI5 - Browser - Asynchronous', function () {
	this.slow(500);

	it('should asynchronously add all Font Awesome icons without aliases into OpenUI5 icon pool', () => {
		let x = 1;
		let FAOpenUI5Promise = FontAwesomeOpenUI5.loadAsync(null, false).then(() => {
			x = -1;
			expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount.count);
			expect(x).to.equal(-1);
			return Promise.resolve();
		});
		expect(x).to.equal(1);
		return FAOpenUI5Promise;
	});
	it('should asynchronously add all Font Awesome icons with aliases into OpenUI5 icon pool', () => {
		let x = 1;
		let FAOpenUI5Promise = FontAwesomeOpenUI5.loadAsync().then(() => {
			x = -1;
			expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount.totalCount);
			expect(x).to.equal(-1);
			return Promise.resolve();
		});
		expect(x).to.equal(1);
		return FAOpenUI5Promise;
	});
});
