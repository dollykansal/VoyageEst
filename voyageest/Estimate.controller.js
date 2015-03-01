sap.ui.controller("voyageest.Estimate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf voyageest.Estimate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf voyageest.Estimate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf voyageest.Estimate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf voyageest.Estimate
*/
//	onExit: function() {
//
//	}
	selectVessel: function(rowNo) {
		var vesselMasterData = sap.ui.getCore().getModel("vesselMaster").getData()['modelData'][rowNo];
		var data1_new = [{mv:vesselMasterData.vesselName,vesselType:vesselMasterData.vesselType,dwt:vesselMasterData.dwt,draft:vesselMasterData.draft}];
		var data2_new = [{ballast: vesselMasterData.ballast, laden: vesselMasterData.laden}];
		var data3_new =[
					{vesselName: "DO", dieselType: vesselMasterData.doDieselType, sea: vesselMasterData.dosea, idle: vesselMasterData.doidle, work: vesselMasterData.dowork},
			        {vesselName: "LSDO", dieselType: vesselMasterData.lsdoDieselType, sea: vesselMasterData.lsdosea, idle: vesselMasterData.lsdoidle, work: vesselMasterData.lsdowork}];
		var data4_new = [
		    {vesselName: "FO", fuelType: vesselMasterData.fotype, ballast: vesselMasterData.foballast, laden: vesselMasterData.foladen, idle: vesselMasterData.foidle, work: vesselMasterData.fowork},
			{vesselName: "LSFO", fuelType: vesselMasterData.lsfotype, ballast: vesselMasterData.lsfoballast, laden: vesselMasterData.lsfoladen, idle: vesselMasterData.lsfoidle, work: vesselMasterData.lsfowork}
		];
		sap.ui.getCore().getModel("vessel").setData({data1: data1_new,data2:data2_new,data3:data3_new,data4:data4_new});
	},
	
	getSelectedVessel: function() {
		//return vesselName;
	}
});