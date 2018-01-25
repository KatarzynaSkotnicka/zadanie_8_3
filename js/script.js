var lancuchWejsciowy = "javascript jest super",
	lancuchWyjsciowy = "";

for(i = 0; i < lancuchWejsciowy.length; i++){
	if(lancuchWejsciowy[i] === "a"){
		lancuchWyjsciowy += "4";
	} else if(lancuchWejsciowy[i] === "e"){
		lancuchWyjsciowy += "3";
	} else if(lancuchWejsciowy[i] === "i"){
		lancuchWyjsciowy += "1";
	} else {
		lancuchWyjsciowy += lancuchWejsciowy[i];
	}
}

console.log(lancuchWyjsciowy);