const iconCount = 634;

define(['font-awesome-openui5'], function (FontAwesomeOpenUI5) {
	describe('Font Awesome OpenUI5 - Core', function () {
		it('should loaded OpenUI5 icon pool module', function () {
			expect(sap.ui.core.IconPool).to.exist;
		});
		it('should add all Font Awesome icons into OpenUI5 icon pool.', function (done) {
			let iconSourceUrl = 'bower_components/font-awesome-icon-chars/character-list/character-list.json';
			if (typeof window.__karma__ !== 'undefined') {
				iconSourceUrl = 'base/' + iconSourceUrl;
			}
			FontAwesomeOpenUI5.loadIcons(iconSourceUrl).then(function (icons) {
				FontAwesomeOpenUI5.importFont(icons);
				try {
					expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount);
					done();
				} catch (error) {
					done(error);
				}
			});
		});
	});
});