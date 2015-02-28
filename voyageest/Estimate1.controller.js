sap.ui.controller("voyageest.Estimate1", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf voyageest.Estimate1
	 */
/*	onInit: function() {
	},
*/
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf voyageest.Estimate1
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf voyageest.Estimate1
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf voyageest.Estimate1
	 */
//	onExit: function() {

//	}
	calculateOperationExpense: function(){
		var modelSumm = null;
		modelSumm = this.getModel('modelSumm');
		var total = 0.0;
		
		if (!isNaN(modelSumm.getProperty("/sumBunkExp"))){total += modelSumm.getProperty("/sumBunkExp");};
		if (!isNaN(modelSumm.getProperty("/aComm"))){total += modelSumm.getProperty("/aComm");};
		if (!isNaN(modelSumm.getProperty("/brkg"))){total += modelSumm.getProperty("/brkg");};
		if (!isNaN(modelSumm.getProperty("/frTax"))){total += modelSumm.getProperty("/frTax");};
		console.log ("operation expense total :", total);
		modelSumm.setProperty("/opExp",total);
		var rev = modelSumm.getProperty("/rev");
		if(isNaN(rev)){rev = 0.0;}
		modelSumm.setProperty("/opProfit",rev - total); 
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		this.calcTotExp(null,total);
	},
	checkIfRowExist: function(products, cargoRowIndex, cType){
		var row = {};
		row["result"] = false;
		if(products.length>0){
			for(var x=0;x<products.length;x++){
				if(products[x].cargoRow==cargoRowIndex && products[x].cType == cType){
					row["index"] = x;
					row["product"] = products[x];
					row["result"] = true;
				}
			}
		}
		return row;
	},
	onCargoChange: function(oAddComm, oBrkg, oFrtTax, oRev) {
		var model = null;

		if(sap.ui.getCore().getModel('modelSumm')!=null){
			model = sap.ui.getCore().getModel('modelSumm');
		}else{
			model = new sap.ui.model.json.JSONModel();
		}

		if(oAddComm!=null){
			model.setProperty("/aComm", oAddComm);
			this.calculateOperationExpense();
		}
		if(oBrkg!=null){
			model.setProperty("/brkg", oBrkg);
			this.calculateOperationExpense();
		}
		if(oFrtTax!=null){
			model.setProperty("/frTax", oFrtTax);
			this.calculateOperationExpense();
		}
		
		if(oRev!=null){
			model.setProperty("/rev", oRev);
			this.calculateOperationExpense();
			modelSumm.setProperty("/opProfit",oRev - modelSumm.getProperty("/opExp") );
		}
		sap.ui.getCore().setModel(model, "modelSumm");    
		this.calTotProfit();
	},
///////////////////////////////generic method for getting model handler////////////////////////////////////////////////////////
	getModel: function(modelId){
		var model = null;
		if(sap.ui.getCore().getModel(modelId)!=null){
			model = sap.ui.getCore().getModel(modelId);
		}else{
			model = new sap.ui.model.json.JSONModel();
		}
		return model;
	},
///////////////////////////////calculate total days in port rotation////////////////////////////////////////////////////////
	calcTotalDays: function() {
		var oPortTable = window.oPortTable;
		var nRows = oPortTable.getBinding("rows").getLength();  
		//var model = oPortTable.getModel();
		var data = oPortTable.getModel().getData()['modelData'];
		var oTotal = 0;

		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['sea'])){}
			else{
			oTotal += data[i]['sea'];
			}	
		}  
		var model = this.getModel('model');
		model.setProperty("/totDays", oTotal);
		var modelSumm = this.getModel('modelSumm');
		var laden = this.calcFoExpense();
		var foCons = oTotal * laden;
		modelSumm.setProperty("/FoCons", foCons);
		var price = modelSumm.getProperty("/FoPrice");
		
		var total = 0.0;
		if(price!=undefined && price!=''){
			modelSumm.setProperty("/FoExpense",(modelSumm.getProperty("/FoCons")*price));
		}
		
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		sap.ui.getCore().setModel(model, "model"); 
		
		this.sumBunkExp();
	},
///////////////////////////////calculate bunker expenses in summary////////////////////////////////////////////////////////
	calcFoExpense: function() {
		
		var model = null;

		if(sap.ui.getCore().getModel('vessel')!=null){
			model = sap.ui.getCore().getModel('vessel');
		}else{
			model = new sap.ui.model.json.JSONModel();
		}
		
		var laden = model.getData()['data4'][0]['laden'];
		return laden;
		
		console.log("laden value:",data,":datata",model.getData()['data4'][0] );
	},
///////////////////////////////calculate total bunker expense////////////////////////////////////////////////////////	
	sumBunkExp: function() {
		
		var modelSumm = null;

		if(sap.ui.getCore().getModel('modelSumm')!=null){
			modelSumm = sap.ui.getCore().getModel('modelSumm');
		}else{
			modelSumm = new sap.ui.model.json.JSONModel();
		}
		
		var total = 0;
		
		if (!isNaN(modelSumm.getProperty("/FoExpense"))){total += modelSumm.getProperty("/FoExpense");};
		if (!isNaN(modelSumm.getProperty("/DoExpense"))){total += modelSumm.getProperty("/DoExpense");};
		if (!isNaN(modelSumm.getProperty("/lsFoExpense"))){total += modelSumm.getProperty("/lsFoExpense");};
		if (!isNaN(modelSumm.getProperty("/lsDoExpense"))){total += modelSumm.getProperty("/lsDoExpense");};
		console.log ("bunk expense total :", total);
		console.log ("fo expense is :", modelSumm.getProperty("/FoExpense"));
		modelSumm.setProperty("/sumBunkExp",total);
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		this.calculateOperationExpense();
	},
	doHirCalc: function(oHirDay,oHirComm) {
		
		var modelSumm = null;
		var hirday = 0.0;
		var hircomm	= 0.0;

		if(sap.ui.getCore().getModel('modelSumm')!=null){
			modelSumm = sap.ui.getCore().getModel('modelSumm');
		}else{
			modelSumm = new sap.ui.model.json.JSONModel();
		}
		if(oHirDay!=null){
			modelSumm.setProperty("/hirDay",oHirDay);
			hirday = oHirDay;
			}
		else{
			hirday = modelSumm.getProperty("/hirDay");
		}
		if(oHirComm!=null){
			modelSumm.setProperty("/hirComm",oHirComm);
			hircomm	= oHirComm;
			}
		else{
			hircomm = modelSumm.getProperty("/hirComm");
			}
		if(hircomm!=undefined&&hirday!=undefined){
			modelSumm.setProperty("/netHire",hirday - (hirday*(hircomm/100))); 
			
			var  totDays = this.getModel('model').getProperty("/totDays");
			if(totDays!=undefined){
				var totHir = 0.00;
				totHir = totDays * (hirday - (hirday*(hircomm/100)));
				modelSumm.setProperty("/totHir",totHir);
				this.calcTotExp(totDays * (hirday - (hirday*(hircomm/100))),null);
			}
		}
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 

	},
	calcTotExp: function(oTotHir,oOperExp) {
		var totHir = 0.0; var operExp = 0.0;
		var modelSumm = this.getModel('modelSumm');
		if(oTotHir!=null){totHir = oTotHir;}else{totHir = modelSumm.getProperty("/totHir");}
		if(oOperExp!=null){operExp = oOperExp;}else{operExp = modelSumm.getProperty("/opExp");}
		if (isNaN(totHir)){totHir = 0.0;}
		if (isNaN(operExp)){operExp = 0.0;}
		console.log("cal net hire, operation expense:",operExp );
		
		modelSumm.setProperty("/totExp", (totHir + operExp) );
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		this.calTotProfit();
	},
	
	calTotProfit: function(){
		//profit = total revenue - total expense
		var modelSumm = this.getModel('modelSumm');
		var totRev = modelSumm.getProperty("/rev");
		var totExp = modelSumm.getProperty("/totExp");
		if (isNaN(totRev)){totRev = 0.0;}
		if (isNaN(totExp)){totExp = 0.0;}
		modelSumm.setProperty("/totProfit", (totRev - totExp) );
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
	}
});