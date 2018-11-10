/// <reference path='./karma-json.d.ts' />

const iconCount = window.__json__.$get('test/icon-count.json');

/* tslint:disable:no-unused-expression */

describe('Font Awesome OpenUI5 - Browser', () => {
	it('should have OpenUI5 IconPool', () => {
		expect(sap.ui.core.IconPool).to.exist;
	});
	it('should load all solid icons into OpenUI5 IconPool', () => {
		expect(sap.ui.core.IconPool.getIconNames('font-awesome-solid')).to.have.lengthOf(iconCount.solid);
	});
	it('should load all regular icons into OpenUI5 IconPool', () => {
		expect(sap.ui.core.IconPool.getIconNames('font-awesome-regular')).to.have.lengthOf(iconCount.regular);
	});
	it('should load all brands icons into OpenUI5 IconPool', () => {
		expect(sap.ui.core.IconPool.getIconNames('font-awesome-brands')).to.have.lengthOf(iconCount.brands);
	});
});
