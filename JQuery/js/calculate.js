$(document).ready(loadWhenPageReady);

function loadWhenPageReady() 
{
	$(".numbers").click(checkevent);
	$(".calculate").click(checkevent);

	$("#allclear").click(allclear);
	$("#posneg").click(posneg);
	$("#sqrt").click(sqrt);
	$("#decimal").click(decimal);
	
	function checkevent()
	{
		var currentsymbol = $(this).html().trim();
		$(currentsymbol).val(currentsymbol);
		console.log("currentsymbol = " + currentsymbol);
	}
	function multiply()
	{
		let	val1Element	=	$("#value1");
		let	val2Element	=	$("#value2");
		let	val3Element	=	$("#value3");
		let ansElement	=	$("#answer");

		let val1Number	=	val1Element.val();
		let val2Number	=	val2Element.val();
		let val3Number	=	val3Element.val();
		let	ansNumber	=	val1Number	*	val2Number;

		console.log("val1Number	=	" + val1Number);
		console.log("val2Number	=	" + val2Number);	
		console.log("val3Number	=	" + val3Number);
		console.log("ansNumber	=	" + ansNumber);

		ansNumber.val(ansNumber);
	}
}