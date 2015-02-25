var summary = function(oController){
	var aData = [];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});

	//Create a panel instance
	var oPanel1 = new sap.ui.commons.Panel({
		width : "370px"
	});

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel1.setText("Operation Expense");

	//Create a matrix layout with 2 columns
	var oMatrixOper = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '350px',
		columns : 4
	});

	oMatrixOper.setWidths('30%', '20%','30%', '20%');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Dem/Des'
	});

	var oInput = new sap.ui.commons.TextField({
		value : "{model>/demDes}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Bunker Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
			
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Add Comm.'
	});

	var oInput = new sap.ui.commons.TextField("aComm",{
		value: "{model>/aComm}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'C.E.V'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Brokerage'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{model>/brkg}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'ILOHC'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Freight tax'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{model>/frTax}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Ballast Bonus'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Liner Terms'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Routing Service'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Port Charge'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Others'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Add the form to the panels content area
	oPanel1.addContent(oMatrixOper);


	//////////////////////////////////////////bunker expense/////////////////////////////////////////////////
	//Create a panel instance
	var oPanel2 = new sap.ui.commons.Panel({
		width : "370px"
	});
	//Set the title of the panel
//	oPanel2.setTitle(new sap.ui.core.Title({
//	text : "Operation Expense",
//	icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel2.setText("Bunker Expense");

	//Create a matrix layout with 2 columns
	var oMatrixB = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '350px',
		columns : 4
	});

	oMatrixB.setWidths('30%', '20%','30%', '20%');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Price'
	});
	 
	var oInputPrice = new sap.ui.commons.TextField("idFoPrice",{
		//value : '0.00',
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			modelSumm.setProperty("/FoPrice",this.getValue());
			var cons = modelSumm.getProperty("/FoCons");
			if(this.getValue!=undefined && this.getValue()!=''&&cons!=undefined && cons!=''){
				modelSumm.setProperty("/FoExpense",(this.getValue()*cons));
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
		}
	
	});
	//oInput.bindProperty("value", "idFoPrice");
	oInputPrice.setModel(oModel);
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Price'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInputPrice);
	oMatrixB.createRow(oLabel, oInputPrice, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Consumption'
	});

	var oInputCons = new sap.ui.commons.TextField("idFoCons",{
		value : "{modelSumm>/FoCons}",
		editable : false,
		width : '100%'
	});
	//oInput.bindProperty("value", "idFoCons");
//	oInputCons.setModel(oModel);
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Consumption'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInputCons);
	oMatrixB.createRow(oLabel, oInputCons, oLabel1, oInput1);

	/////////////////////////////////////formatter for expense//////////////////////////////////

/*	var myModel = new sap.ui.model.json.JSONModel({
		idFoPrice: '1',
		idFoCons: '2'
	});

	//var myModel = sap.ui.getCore().getModel('model');
	var price = oInputPrice.getValue();
	var cons = oInputCons.getValue();
	
	//console.log("summary model is:", myModel);
	var oInputForm = new sap.ui.commons.TextField({width : '100%',id:'idFoExp'})
	.bindProperty("value", 
			{
		/*  parts: [
	    {path: "/firstName", type: new sap.ui.model.type.String()},
	    {path: "/lastName", type: new sap.ui.model.type.String()}
	    {path: "{model>/frTax}"},
	    {path: "{model>/brkg}"}
	  ],
		parts: [
		        {path: "/modelSumm/FoPrice"}
		        ],
		formatter: function(price){
			console.log("price",price);
			var int = null;
			if (idFoPrice) int = idFoPrice;
			if (idFoCons) int += idFoCons;
			
			return price;
		}
	});
	//oInputForm.bindProperty("value", "idFoExp");
	oInputForm.setModel(modelSumm); 
	*/
	//////////////////////////////////formatter//////////////////////////////////

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Expense'
	});
		var oInputForm = new sap.ui.commons.TextField({
		value : "{modelSumm>/FoExpense}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInputForm);
	oMatrixB.createRow(oLabel, oInputForm, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Price'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Price'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Consumption'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Consumption'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);

	//Add the form to the panels content area
	oPanel2.addContent(oMatrixB);
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Create a panel instance
	var oPanel3 = new sap.ui.commons.Panel({
		width : "420px"
	});
	//Set the title of the panel
//	oPanel3.setTitle(new sap.ui.core.Title({
//	text : "Operation Expense",
//	icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel3.setText("Result");

	//Create a matrix layout with 2 columns
	var oMatrixRes = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '400px',
		columns : 4
	});

	oMatrixRes.setWidths('100px', '100px','100px', '100px');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Hire/Day'
	});

	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Revenue'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'H/Add Comm.'
	});

	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{model>/opExp}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Net Hire'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Profit'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'C/Base'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Hire'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		width : '100%',
		visible : false
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		width : '100%',
		visible : false
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'PROFIT'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Add the form to the panels content area
	oPanel3.addContent(oMatrixRes);
	//////////////////////////////////////////////////////////////////////////////////////
	//Create a matrix layout with 2 columns
	var oMatrixFull = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		//width : '100%',
		columns : 3
	});

	oMatrixFull.setWidths('32%', '32%','36%');
	oMatrixFull.createRow(oPanel1,oPanel2,oPanel3);
	return (oMatrixFull);
}
