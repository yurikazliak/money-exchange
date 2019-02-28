// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {};

if (currency<1) { 
	return coins;
}
else if ((currency >=1)&&(currency<5)){
	return pennie(currency);
}
else if ((currency>=5)&&(currency<10)){
	return nickel(currency);
}
else if ((currency>=10)&&(currency<25)){
	return dime(currency);
}
else if ((currency>=25)&&(currency<50)){
	return quarter(currency);
}
else if ((currency>=50)&&(currency<10000)){
	return halfDollar(currency);
}
else {coins={error: "You are rich, my friend! We don't have so much coins for exchange"};
    return coins;
}

function pennie(currency){	
	coins['P']=currency;
	return coins;
}

function nickel(currency){
	let rest,divide;
	rest=currency%5;
	divide=(currency-rest)/5;
	coins['N']=divide;
	if (rest==0) {
		return coins;
	}else {
		pennie(rest);	
		return coins;
	}
}

function dime(currency){
	let rest, divide;
	rest=currency%10;
	divide=(currency-rest)/10;
	coins['D']=divide;
	if (rest==0) {		
		return coins;
	}else if (rest>=5&&rest<10){
		nickel(rest);
		return coins;
	}else{
		pennie(rest);
		return coins;
	}
}

function quarter(currency){
	let rest, divide;
	rest=currency%25;
	divide=(currency-rest)/25;
	coins['Q']=divide;
	if (rest==0) {
		return coins;
	}else if (rest>=10&&rest<25){
		dime(rest);
		return coins;
	}else if (rest>=5&&rest<10){
		nickel(rest);
		return coins;		
	}else{
		pennie(rest);
		return coins;
	}
}

function halfDollar(currency){
	let rest, divide;
	rest=currency%50;
	divide=(currency-rest)/50;
	coins['H']=divide;
	if (rest==0) {		
		return coins;
	}else if (rest>=25&&rest<50){
		quarter(rest);
		return coins;
	}else if (rest>=10&&rest<25){
		dime(rest);
		return coins;
	}else if (rest>=5&&rest<10){
		nickel(rest);
		return coins;		
	}else{
		pennie(rest);
		return coins;
	}
}
return coins;
}
