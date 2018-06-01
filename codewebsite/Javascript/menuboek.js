window.onload = function(){
	document.getElementById('menutoggle').onclick = function(){
 
 		var menu = document.getElementById('menu');
 
 		if (menu.className == 'active') {
 			menu.className = 'inactive';
 		} else {
 		menu.className = 'active';
 		}
	};
};