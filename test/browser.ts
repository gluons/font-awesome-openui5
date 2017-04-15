/// <reference path="./definition/chai-expect.d.ts" />
/// <reference path="./definition/karma-json.d.ts" />

/* tslint:disable:no-unused-expression */

const iconCount = window.__json__.$get('test/icon-count.json');

describe('Font Awesome OpenUI5 - Browser', () => {
	it('should import OpenUI5 IconPool library', () => {
		expect(sap.ui.core.IconPool).to.exist;
	});
	it('should load all icons including aliases into OpenUI5 IconPool', () => {
		expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount.totalCount);
	});
});
