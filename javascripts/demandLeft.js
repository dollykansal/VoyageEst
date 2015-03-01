 var Demand = function(){
	//Create the Accordion control
	var oAccordion = new sap.ui.commons.Accordion("accordionA"); 
	
	var oSection1 = new sap.ui.commons.AccordionSection("Demand1");		
	oSection1.setTitle("BRAEMAR SEASCOPE,ANTRACITE");		
	oSection1.setTooltip("BRAEMAR SEASCOPE");
	oSection1.addContent(new sap.ui.commons.TextView({text:"BRAEMAR SEASCOPE"}));
	var text1 = new sap.ui.commons.TextView({text:"ANTRACITE"});
	text1.addStyleClass("hidden");
	oSection1.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"NIKOLAEV"});
	text2.addStyleClass("hidden");
	oSection1.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"HAZIRA"});
	text3.addStyleClass("hidden");
	oSection1.addContent(text3);
	
	var oSection2 = new sap.ui.commons.AccordionSection( "Demand2" );		
	oSection2.setTitle("MID-SHIP,PHOSPHATES");		
	oSection2.setTooltip("MID-SHIP");
	oSection2.addContent(new sap.ui.commons.TextView({text:"MID-SHIP"}));
	var text1 = new sap.ui.commons.TextView({text:"PHOSPHATES"});
	text1.addStyleClass("hidden");
	oSection2.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"SAFAGA"});
	text2.addStyleClass("hidden");
	oSection2.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"SZCZECIN OR POLICE"});
	text3.addStyleClass("hidden");
	oSection2.addContent(text3);
	
	var oSection3 = new sap.ui.commons.AccordionSection( "Demand3" );		
	oSection3.setTitle("GALBRAITHS,BARLEY");		
	oSection3.setTooltip("GALBRAITHS");
	oSection3.addContent(new sap.ui.commons.TextView({text:"GALBRAITHS"}));
	var text1 = new sap.ui.commons.TextView({text:"BARLEY"});
	text1.addStyleClass("hidden");
	oSection3.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"NIKOLAEV PORT SILO"});
	text2.addStyleClass("hidden");
	oSection3.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"AGADIR RANGE"});
	text3.addStyleClass("hidden");
	oSection3.addContent(text3);

	var oSection4 = new sap.ui.commons.AccordionSection( "Demand4" );		
	oSection4.setTitle("GULF MARITIME,BAGGED CEMENT");		
	oSection4.setTooltip("GULF MARITIME");
	oSection4.addContent(new sap.ui.commons.TextView({text:"GULF MARITIME"}));
	var text1 = new sap.ui.commons.TextView({text:"BAGGED CEMENT"});
	text1.addStyleClass("hidden");
	oSection4.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"ANTALYA"});
	text2.addStyleClass("hidden");
	oSection4.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"MONROVIA"});
	text3.addStyleClass("hidden");
	oSection4.addContent(text3);
	
	var oSection5 = new sap.ui.commons.AccordionSection( "Demand5" );		
	oSection5.setTitle("GALBRAITHS,BULK FERT");		
	oSection5.setTooltip("GALBRAITHS");
	oSection5.addContent(new sap.ui.commons.TextView({text:"GALBRAITHS"}));
	var text1 = new sap.ui.commons.TextView({text:"BULK FERT"});
	text1.addStyleClass("hidden");
	oSection5.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"GABES"});
	text2.addStyleClass("hidden");
	oSection5.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"CHITTAGONG"});
	text3.addStyleClass("hidden");
	oSection5.addContent(text3);
	
	var oSection6 = new sap.ui.commons.AccordionSection( "Demand6" );		
	oSection6.setTitle("GULF MARITIME CO.,GMAP");		
	oSection6.setTooltip("GULF MARITIME CO.");
	oSection6.addContent(new sap.ui.commons.TextView({text:"GULF MARITIME CO."}));
	var text1 = new sap.ui.commons.TextView({text:"GMAP"});
	text1.addStyleClass("hidden");
	oSection6.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"MOREHEAD CITY"});
	text2.addStyleClass("hidden");
	oSection6.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"ITAQUI"});
	text3.addStyleClass("hidden");
	oSection6.addContent(text3);
	
	var oSection7 = new sap.ui.commons.AccordionSection( "Demand7" );		
	oSection7.setTitle("RESHAMWALA,HLSS/LAWFUL/STEELS");		
	oSection7.setTooltip("RESHAMWALA");
	oSection7.addContent(new sap.ui.commons.TextView({text:"RESHAMWALA"}));
	var text1 = new sap.ui.commons.TextView({text:"HLSS/LAWFUL/STEELS"});
	text1.addStyleClass("hidden");
	oSection7.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"DOP "});
	text2.addStyleClass("hidden");
	oSection7.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"ITAQUI"});
	text3.addStyleClass("hidden");
	oSection7.addContent(text3);
	
	var oSection8 = new sap.ui.commons.AccordionSection( "Demand8" );		
	oSection8.setTitle("INTEROCEAN,AMMONIUM NITRATE");		
	oSection8.setTooltip("INTEROCEAN");
	oSection8.addContent(new sap.ui.commons.TextView({text:"INTEROCEAN"}));
	var text1 = new sap.ui.commons.TextView({text:"AMMONIUM NITRATE"});
	text1.addStyleClass("hidden");
	oSection8.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"BSEA"});
	text2.addStyleClass("hidden");
	oSection8.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"VIZAG"});
	text3.addStyleClass("hidden");
	oSection8.addContent(text3);
	
	var oSection9 = new sap.ui.commons.AccordionSection( "Demand9" );		
	oSection9.setTitle("OPTIMA SHIPBROKERS,SULPHUR");		
	oSection9.setTooltip("OPTIMA SHIPBROKERS");
	oSection9.addContent(new sap.ui.commons.TextView({text:"OPTIMA SHIPBROKERS"}));
	var text1 = new sap.ui.commons.TextView({text:"SULPHUR"});
	text1.addStyleClass("hidden");
	oSection9.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"BSEA"});
	text2.addStyleClass("hidden");
	oSection9.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"BSEA"});
	text3.addStyleClass("hidden");
	oSection9.addContent(text3);
	
	var oSection10 = new sap.ui.commons.AccordionSection( "Demand10" );		
	oSection10.setTitle("CLARKSONS,UREA");		
	oSection10.setTooltip("CLARKSONS");
	oSection10.addContent(new sap.ui.commons.TextView({text:"CLARKSONS"}));
	var text1 = new sap.ui.commons.TextView({text:"UREA"});
	text1.addStyleClass("hidden");
	oSection10.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"YUZHNY"});
	text2.addStyleClass("hidden");
	oSection10.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"BRAZIL"});
	text3.addStyleClass("hidden");
	oSection10.addContent(text3);
	
	var oSection11 = new sap.ui.commons.AccordionSection( "Demand11" );		
	oSection11.setTitle("BERY MARITIME CHINA,FERTS");		
	oSection11.setTooltip("BERY MARITIME CHINA");
	oSection11.addContent(new sap.ui.commons.TextView({text:"BERY MARITIME CHINA"}));
	var text1 = new sap.ui.commons.TextView({text:"FERTS"});
	text1.addStyleClass("hidden");
	oSection11.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"DAMIETTA"});
	text2.addStyleClass("hidden");
	oSection11.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"JAMBURG"});
	text3.addStyleClass("hidden");
	oSection11.addContent(text3);
	
	var oSection12 = new sap.ui.commons.AccordionSection( "Demand12" );		
	oSection12.setTitle("BRAEMAR SEASCOPE,PEAS IN BULK");		
	oSection12.setTooltip("BRAEMAR SEASCOPE");
	oSection12.addContent(new sap.ui.commons.TextView({text:"BRAEMAR SEASCOPE"}));
	var text1 = new sap.ui.commons.TextView({text:"PEAS IN BULK"});
	text1.addStyleClass("hidden");
	oSection12.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"NOVOROSSISK"});
	text2.addStyleClass("hidden");
	oSection12.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"MUMBAI"});
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