var iconCount;

iconCount = 605;

define(['font-awesome-openui5'], function(FontAwesomeOpenUI5) {
  describe('Font Awesome OpenUI5 - Core', function() {
    it('should loaded OpenUI5 icon pool module', function() {
      expect(jQuery.sap.require).to.exist;
    });
    it('should add all Font Awesome icons into OpenUI5 icon pool.', function() {
      var iconSourceUrl;
      iconSourceUrl = 'bower_components/font-awesome-icon-chars/character-list/character-list.json';
      if (window.__karma__ !== void 0) {
        iconSourceUrl = 'base/' + iconSourceUrl;
      }
      FontAwesomeOpenUI5.loadIcons(iconSourceUrl).then(function(icons) {
        FontAwesomeOpenUI5.importFont(icons, {
          id: 'id',
          char: 'unicode'
        });
        expect(sap.ui.core.IconPool.getIconNames('font-awesome')).to.have.lengthOf(iconCount);
      });
    });
  });
});
