function encrypt() {
    var text = document.getElementById("input").value.toLowerCase();
    text = removeAccents(text);
    text = text.replace(/e/gm, "enter");
    text = text.replace(/i/gm, "imes");
    text = text.replace(/a/gm, "ai");
    text = text.replace(/o/gm, "ober");
    text = text.replace(/u/gm, "ufat");
    document.getElementById("output").value = text;
    document.getElementById("img-munheco").style.display = "none";
    document.getElementById("no-input").style.display = "none";
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";
}

function decrypt() {
    var text = document.getElementById("input").value;
    text = text.replace(/enter/gm, "e");
    text = text.replace(/imes/gm, "i");
    text = text.replace(/ai/gm, "a");
    text = text.replace(/ober/gm, "o");
    text = text.replace(/ufat/gm, "u");
    document.getElementById("output").value = text;
    document.getElementById("img-munheco").style.display = "none";
    document.getElementById("no-input").style.display = "none";
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";
}

function copyText() {
    var text = document.getElementById("output");
    text.select();
    document.execCommand("copy");
}

function removeAccents(text){
	const wordStress = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ñ':'n'};
	return text.split('').map( character => wordStress[character] || character).join('').toString();	
}