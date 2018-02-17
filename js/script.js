/*GLOBAL VARIABLES*/
var startPosition = 0;
var endPosition = 0
var currentString = 0;
var currentElement = 0;
var counterId = 0;
var startId = 0;
var endId = 0;


        function selectedFormat (style) {
		var mode = document.designMode;
		document.designMode = "on";
		var editorDoc = document.getElementById("document");
            	editorDoc.focus();
		document.execCommand(style, false, null);
		document.designMode = "off";
        }
/*
	function ready
	transfer to a function: nullWW
	return a function: null
*/
function ready(){
	var newdocument = document.getElementById("document");
	
	var boldBtn = document.getElementById("bold");
	var italicBtn = document.getElementById("italic");
	var underlineBtn = document.getElementById("underline");
	var strongBtn = document.getElementById("strong");
	var upIndexBtn = document.getElementById("upindex");
	var downIndexBtn = document.getElementById("downindex");
	
	var selectionObj = window.getSelection();
	
	newdocument.addEventListener("mousedown",function(e){
		var childNodes = newdocument.childNodes;
		console.log(childNodes);
		console.log(childNodes[0].textContent);
		console.log(e);
		currentElement = e.path[0].id;
		startId = e.path[0].id;
	})
		
	
	newdocument.addEventListener("mouseup", function(e) {
		//var startAbsolutePosition = getAbsolutePosition(window.getSelection());
		//alert(startAbsolutePosition);
		console.log(e);
		//alert(getContent());
		var selObj = window.getSelection(); 
		var selRange = selObj.getRangeAt(0);
		var clientRects = selRange.getClientRects();
		console.log(clientRects);
		console.log(selRange);
		var lineHeight = 16;
		//alert(e.clientY);
		var posY = Math.floor(e.clientY/lineHeight);
		//alert(posY);
		//alert(lineHeight*posY);
		console.log("selange = " + selObj);
		if (selObj!=""){
			var hMenu = document.getElementById("h-menu");
			hMenu.classList.remove("hide-animate");
			hMenu.classList.add("show-animate");
			hMenu.style.left = (clientRects[0].left + (clientRects[0].width/2) - 115) + "px";
			hMenu.style.top = (clientRects[0].y-50) + "px";
			hMenu.style.display = "block";	
		} else {
			var hMenu = document.getElementById("h-menu");
			hMenu.classList.remove("show-animate")
			hMenu.classList.add("hide-animate");
			setTimeout(function(){
				hMenu.style.display = "none";
			},200);
		}
		//endId = e.path[0].id;
	});
	
	/*
	Registration click event for bold button 
	*/
	boldBtn.addEventListener("click",function(){
		selectedFormat("bold");
	});
	
	/*
	Registration click event for italic button 
	*/
	italicBtn.addEventListener("click",function(){
		selectedFormat("italic");
	});
	
	/*
	Registration click event for underline button 
	*/
	underlineBtn.addEventListener("click",function(){
		selectedFormat("underline");
	});
	
	/*
	Registration click event for strong button 
	*/
	strongBtn.addEventListener("click",function(){
		selectedFormat("strikeThrough");
		});
	
	/*
	Registration click event for upIndex button 
	*/
	upIndexBtn.addEventListener("click",function(){
		selectedFormat("superscript");
	});
	
	/*
	Registration click event for downIndex button 
	*/
	downIndexBtn.addEventListener("click",function(){
		selectedFormat("subscript");
	})
	
	document.addEventListener("keydown",function(e){
		console.log(e.keyCode);
		/*if (e.keyCode > 32){
			var str = document.getElementById("document").innerText;
			if (str.length==0){
				newdocument.innerHTML += e.key;			
			} else {
				newdocument.innerHTML += e.key;
			}
		} else {
			switch (e.keyCode){
				case 8: 
					var str = document.getElementById("document").innerHTML;
					newdocument.innerHTML = str.slice(0,-1);
					break;
				case 13:
					newdocument.innerHTML+="<br>";
			}
		}*/
		
	})
}