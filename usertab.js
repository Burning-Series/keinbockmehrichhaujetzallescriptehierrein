// ==UserScript==
// @name         usertab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bs.to/home
// @match        https://bs.to/
// @grant        none
// donationsURL paypal.me/JonathanHeindl :3
// ==/UserScript==

(function() {
	'use strict';
	setTimeout(function(){
		var sB=$(sbMsg)[0];
		var par=sB.parentElement;
		sB.oninput=function(a,b,c){
			var usercontainer=$(sbUserCont)[0].children;
			var onlineNames=[];
			for(var i=par.children.length-1;i>-1;i--){
				if(par.children[i].localName==="li12"){
					par.children[i].remove();
				}
			}
			for(var t=0;t<usercontainer.length;t++){
				if(sB.value.length>2){
					if(sB.value.indexOf("@")>-1 && usercontainer[t].children[0].textContent.toLowerCase().indexOf(sB.value.split("@")[1].toLowerCase())>-1){
						onlineNames.push(usercontainer[t].children[0].textContent);
					}
				}
			}
			sB.onl=onlineNames;
			sB.index=0;
			if(sB.value.length>2&&onlineNames.length>0){
				var field=document.createElement("li12");
				field.style.width="200px";
				var height=onlineNames.length*20+20;
				var top=sB.offsetTop-(height);
				field.style.position="absolute";
				field.style.top=top+"px";
				field.style.height=height+"px";
				field.style.left=sB.offsetLeft+"px";
				field.style.background="white";
				field.style.border="black 1px solid";
				sB.fie=field;
				for(var j=0;j<onlineNames.length;j++){
					var username=document.createElement("el");
					username.innerText=onlineNames[j];
					username.style.position="absolute";
					username.style.top=j*20+8+"px";
					username.style.left=20+"px";
					username.style.width="160px";
					field.append(username);
				}
				par.append(field);
			}
		};
		sB.onkeydown=function(a,b,c){
			if(a.keyCode===38||a.keyCode===40){
				if(sB.fie.children[sB.index]){
					sB.fie.children[sB.index].style.backgroundColor="white";
				}
				function index(plus){
					if(plus){
						sB.index++;
						if(sB.index>sB.onl.length-1){
							sB.index=0; 
						}
					}else{
						sB.index--;
						if(sB.index==-1){
							sB.index=sB.onl.length-1;
						}
					}
				}
				if(sB.index===undefined){
					sB.index=0;
				}
				if(a.keyCode===38){
					index(false);
				}else{
					index(true);
				}
				sB.fie.children[sB.index].style.backgroundColor="blue";
				sB.value=sB.value.replace(sB.value.split("@")[1].split(" ")[0],sB.onl[sB.index]);
			}else{

			}

		};
	},1000);
	// Your code here...
})();