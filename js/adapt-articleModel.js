define([
	'coreJS/adapt'
], function(Adapt) {

	var BlockSliderModel = {

		isBlockSliderEnabled: function() {
			return this.get("_article-slider-n-audio") && this.get("_article-slider-n-audio")._isEnabled;
		}

	};

	return BlockSliderModel;
});
