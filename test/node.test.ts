import { expect } from 'chai';
import FontAwesomeOpenUI5 from '../dist/font-awesome-openui5';
import { addIcon, hasIconPool, hasjQuery, hasOpenUI5, importIconPool } from '../dist/utils';

/* tslint:disable:no-unused-expression */

console.log(addIcon);

describe('Font Awesome OpenUI5 - Node', () => {
	describe('FontAwesomeOpenUI5 class', () => {
		it(`should have 'loadIcons' method`, () => {
			expect(FontAwesomeOpenUI5).to.have.property('loadIcons');
		});
		it(`should have 'loadIconsAsync' method`, () => {
			expect(FontAwesomeOpenUI5).to.have.property('loadIconsAsync');
		});
	});
	describe('Utilities', () => {
		it(`'addIcon' should throw an error when not in browser`, () => {
			expect(() => addIcon('check', 'f00c', 'solid')).to.throw();
		});
		it(`'hasIconPool' should return expected value when not in browser`, () => {
			expect(hasIconPool()).to.be.false;
		});
		it(`'hasjQuery' should return expected value when not in browser`, () => {
			expect(hasjQuery()).to.be.false;
		});
		it(`'hasOpenUI5' should return expected value when not in browser`, () => {
			expect(hasOpenUI5()).to.be.false;
		});
		it(`'importIconPool' should throw an expected error when not in browser`, () => {
			expect(importIconPool).to.throw(ReferenceError);
		});
	});
});
