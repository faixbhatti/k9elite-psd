jQuery(document).ready(function () {
    var $f = jQuery(".wpcf7-form");
    $f.find("label").addClass("control-label");
    $f.find('.wpcf7-form-control').removeClass('wpcf7-form-control');
		$f.find("br, p:empty").remove();
});