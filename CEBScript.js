function myfunction()
{
	var unit = document.getElementById("unit").value;
	var range1 = 7.85;
	var range2 = 7.85;
	var range3 = 10;
	var range4 = 27.75;
	var range5 = 6;
	
	var amount = 0;
	
	if(unit<=30)
	{
		amount = range1*unit;
	}
	else if(unit>30 && unit<=60)
	{
		amount = (range1*30)+(range2*(unit-30));
	}
	else if(unit>60 && unit<=90)
	{
		amount = (range1*30)+(range2*30)+(range3*(unit-60));
	}
	else if(unit>90 && unit<120)
	{
		amount = (range1*30)+(range2*30)+(range3*30)+(range4*(unit-30));
	}
	else if(unit>120)
	{
		amount = (range1*30)+(range2*30)+(range3*30)+(range4*30)+(range5(unit-30));
	}
	var txtResult = document.getElementById("calculate");
	txtResult.innerHTML="<h4> Your Bill Amount is :  Rs." + amount + "</h4>";

}