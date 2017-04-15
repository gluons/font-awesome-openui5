import { expect } from 'chai';
import FontAwesomeOpenUI5 from '../src/font-awesome-openui5';
import * as utils from '../src/utils';

describe('Font Awesome OpenUI5 - Node', () => {
	describe(`FontAwesomeOpenUI5 class`, () => {
		it(`should have 'loadIcons' method`, () => {
			expect(FontAwesomeOpenUI5).to.have.property('loadIcons');
		});
		it(`should have 'loadIconsAsync' method`, () => {
			expect(FontAwesomeOpenUI5).to.have.property('loadIconsAsync');
		});
	});
	describe('Utilities', () => {
		it(`'checkRequirement' should return error when not using on browser`, () => {
			expect(utils.checkRequirement()).to.be.instanceof(Error);
		});
		it(`'importIconPool' should throw an error when not using on browser`, () => {
			expect(utils.importIconPool).to.throw(Error);
		});
		it(`'addIcon' should throw an error when not using on browser`, () => {
			expect(utils.addIcon).to.throw(ReferenceError);
		});
	});
});
