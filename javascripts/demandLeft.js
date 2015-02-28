 var Demand = function(){
	//Create the Accordion control
	var oAccordion = new sap.ui.commons.Accordion("accordionA"); 
	
	var oSection1 = new sap.ui.commons.AccordionSection( "Demand1");		
	oSection1.setTitle("Demand1-12,000MT FERTILIZER");		
	oSection1.setTooltip("Demand1");
	oSection1.addContent(new sap.ui.commons.TextView({text:"ABC"}));
	var text1 = new sap.ui.commons.TextView({text:"ABC"});
	text1.addStyleClass("hidden");
	oSection1.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"ABC_Loading"});
	text2.addStyleClass("hidden");
	oSection1.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"ABC_Discharge"});
	text3.addStyleClass("hidden");
	oSection1.addContent(text3);
	
	var oSection2 = new sap.ui.commons.AccordionSection( "Demand2" );		
	oSection2.setTitle("Demand2-12,000MT WHEAT");		
	oSection2.setTooltip("Demand2");
	oSection2.addContent(new sap.ui.commons.TextView({text:"DEF"}));
	var text1 = new sap.ui.commons.TextView({text:"DEF"});
	text1.addStyleClass("hidden");
	oSection2.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"DEF_Loading"});
	text2.addStyleClass("hidden");
	oSection2.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"DEF_Discharge"});
	text3.addStyleClass("hidden");
	oSection2.addContent(text3);
	
	var oSection3 = new sap.ui.commons.AccordionSection( "Demand3" );		
	oSection3.setTitle("Demand3-12,000MT WHEAT");		
	oSection3.setTooltip("Demand3");
	oSection3.addContent(new sap.ui.commons.TextView({text:"GHI"}));
	var text1 = new sap.ui.commons.TextView({text:"GHI"});
	text1.addStyleClass("hidden");
	oSection3.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"GHI_Loading"});
	text2.addStyleClass("hidden");
	oSection3.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"GHI_Discharge"});
	text3.addStyleClass("hidden");
	oSection3.addContent(text3);

	var oSection4 = new sap.ui.commons.AccordionSection( "Demand4" );		
	oSection4.setTitle("Demand4-12,000MT WHEAT");		
	oSection4.setTooltip("Demand4");
	oSection4.addContent(new sap.ui.commons.TextView({text:"JKL"}));
	var text1 = new sap.ui.commons.TextView({text:"JKL"});
	text1.addStyleClass("hidden");
	oSection4.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"JKL_Loading"});
	text2.addStyleClass("hidden");
	oSection4.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"JKL_Discharge"});
	text3.addStyleClass("hidden");
	oSection4.addContent(text3);
	
	var oSection5 = new sap.ui.commons.AccordionSection( "Demand5" );		
	oSection5.setTitle("Demand5-12,000MT WHEAT");		
	oSection5.setTooltip("Demand5");
	oSection5.addContent(new sap.ui.commons.TextView({text:"MNO"}));
	var text1 = new sap.ui.commons.TextView({text:"MNO"});
	text1.addStyleClass("hidden");
	oSection5.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"MNO_Loading"});
	text2.addStyleClass("hidden");
	oSection5.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"MNO_Discharge"});
	text3.addStyleClass("hidden");
	oSection5.addContent(text3);
	
	var oSection6 = new sap.ui.commons.AccordionSection( "Demand6" );		
	oSection6.setTitle("Demand6-12,000MT WHEAT");		
	oSection6.setTooltip("Demand6");
	oSection6.addContent(new sap.ui.commons.TextView({text:"PQR"}));
	var text1 = new sap.ui.commons.TextView({text:"PQR"});
	text1.addStyleClass("hidden");
	oSection6.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"PQR_Loading"});
	text2.addStyleClass("hidden");
	oSection6.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"PQR_Discharge"});
	text3.addStyleClass("hidden");
	oSection6.addContent(text3);
	
	var oSection7 = new sap.ui.commons.AccordionSection( "Demand7" );		
	oSection7.setTitle("Demand7-12,000MT WHEAT");		
	oSection7.setTooltip("Demand7");
	oSection7.addContent(new sap.ui.commons.TextView({text:"STU"}));
	var text1 = new sap.ui.commons.TextView({text:"STU"});
	text1.addStyleClass("hidden");
	oSection7.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"STU_Loading"});
	text2.addStyleClass("hidden");
	oSection7.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"STU_Discharge"});
	text3.addStyleClass("hidden");
	oSection7.addContent(text3);
	
	var oSection8 = new sap.ui.commons.AccordionSection( "Demand8" );		
	oSection8.setTitle("Demand8-12,000MT WHEAT");		
	oSection8.setTooltip("Demand8");
	oSection8.addContent(new sap.ui.commons.TextView({text:"VWX"}));
	var text1 = new sap.ui.commons.TextView({text:"VWX"});
	text1.addStyleClass("hidden");
	oSection8.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"VWX_Loading"});
	text2.addStyleClass("hidden");
	oSection8.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"VWX_Discharge"});
	text3.addStyleClass("hidden");
	oSection8.addContent(text3);
	
	var oSection9 = new sap.ui.commons.AccordionSection( "Demand9" );		
	oSection9.setTitle("Demand9-12,000MT WHEAT");		
	oSection9.setTooltip("Demand9");
	oSection9.addContent(new sap.ui.commons.TextView({text:"YZA"}));
	var text1 = new sap.ui.commons.TextView({text:"YZA"});
	text1.addStyleClass("hidden");
	oSection9.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"YZA_Loading"});
	text2.addStyleClass("hidden");
	oSection9.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"YZA_Discharge"});
	text3.addStyleClass("hidden");
	oSection9.addContent(text3);
	
	var oSection10 = new sap.ui.commons.AccordionSection( "Demand10" );		
	oSection10.setTitle("Demand10-12,000MT WHEAT");		
	oSection10.setTooltip("Demand10");
	oSection10.addContent(new sap.ui.commons.TextView({text:"BCD"}));
	var text1 = new sap.ui.commons.TextView({text:"BCD"});
	text1.addStyleClass("hidden");
	oSection10.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"BCD_Loading"});
	text2.addStyleClass("hidden");
	oSection10.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"BCD_Discharge"});
	text3.addStyleClass("hidden");
	oSection10.addContent(text3);
	
	var oSection11 = new sap.ui.commons.AccordionSection( "Demand11" );		
	oSection11.setTitle("Demand11-12,000MT WHEAT");		
	oSection11.setTooltip("Demand11");
	oSection11.addContent(new sap.ui.commons.TextView({text:"EFG"}));
	var text1 = new sap.ui.commons.TextView({text:"EFG"});
	text1.addStyleClass("hidden");
	oSection11.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"EFG_Loading"});
	text2.addStyleClass("hidden");
	oSection11.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"EFG_Discharge"});
	text3.addStyleClass("hidden");
	oSection11.addContent(text3);
	
	var oSection12 = new sap.ui.commons.AccordionSection( "Demand12" );		
	oSection12.setTitle("Demand12-12,000MT WHEAT");		
	oSection12.setTooltip("Demand12");
	oSection12.addContent(new sap.ui.commons.TextView({text:"HIJ"}));
	var text1 = new sap.ui.commons.TextView({text:"HIJ"});
	text1.addStyleClass("hidden");
	oSection12.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"HIJ_Loading"});
	text2.addStyleClass("hidden");
	oSection12.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"HIJ_Discharge"});
	text3.addStyleClass("hidden");
	oSection12.addContent(text3);
		
	oAccordion.addSection( oSection1 );
	oAccordion.addSection( oSection2 );
	oAccordion.addSection( oSection3 );
	oAccordion.addSection( oSection4 );
	oAccordion.addSection( oSection5 );
	oAccordion.addSection( oSection6 );
	oAccordion.addSection( oSection7 );
	oAccordion.addSection( oSection8 );
	oAccordion.addSection( oSection9 );
	oAccordion.addSection( oSection10 );
	oAccordion.addSection( oSection11);
	oAccordion.addSection( oSection12 );
	oAccordion.onAfterRendering = function() {
		sap.ui.commons.Accordion.prototype.onAfterRendering.apply(this, arguments);
	    this.$().find('.sapUiAcdSection').draggable({
	      connectToDroppable: "#cargo .sapUiTableCnt",
	      revert:"invalid",
	      helper:"clone",
	      cursor:"pointer",
	      zIndex: 999999,
	      containment:"window",
	      start: function(event,ui){
//	    	  var id = ui.helper.context.id;
//	    	  $("#"+id+"-hdr").trigger("click");
	      },
	      drag:function(event, ui) {
	    	  $("div.sapUiAcdSectionHdr").parent().parent().parent().css("overflow","visible");
	      },
	      stop: function(event, ui){
//	    	  var id = ui.helper.context.id;
//	    	  $("#"+id+"-hdr").trigger("click");
	      }
	    });
	  };
	return oAccordion;
};