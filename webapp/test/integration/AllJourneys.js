jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ZCDFIKRI_ADV3 in the list
// * All 3 ZCDFIKRI_ADV3 have at least one to_item

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
		"cds/adv/test/integration/MasterJourney",
		"cds/adv/test/integration/NavigationJourney",
		"cds/adv/test/integration/NotFoundJourney",
		"cds/adv/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});