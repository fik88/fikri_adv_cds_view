jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"cds/adv/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"cds/adv/test/integration/pages/App",
	"cds/adv/test/integration/pages/Browser",
	"cds/adv/test/integration/pages/Master",
	"cds/adv/test/integration/pages/Detail",
	"cds/adv/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "cds.adv.view."
	});

	sap.ui.require([
		"cds/adv/test/integration/NavigationJourneyPhone",
		"cds/adv/test/integration/NotFoundJourneyPhone",
		"cds/adv/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});