var boleto=0,descuento=0,des=0,res=0 ;
function calcular(){
	boleto=parseFloat(document.getElementById("textCosto").value);
	descuento=parseInt(document.getElementById("textOpcion").value);
	switch(descuento){
		case 1:
		case 2:
		case 3:
		des=(boleto/100)*(50);
		break;
		case 4:
		des=(boleto/100)*(25);
		break;
		default:
		alert("El valor del descuento es incorrecto");
		break;
			}
		res=boleto-des;
		document.getElementById("textResul").value=res;
}