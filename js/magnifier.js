		window.onload = function () {
			var preview = document.getElementById("preview");
			var box = document.getElementById("box");
			var big_view = document.getElementById("big_view");
			var img = document.createElement("img");
			
			img.style.position="absolute";
			big_view.appendChild(img);
			
			preview.onmouseover = function(){
				box.style.display = "block";
				big_view.style.display = "block";
				img.src = preview.getElementsByTagName("img")[0].src;
				
			}
			preview.onmouseout = function(){
				box.style.display = "none";
				big_view.style.display = "none";
			}
			preview.onmousemove = function(e){
				var e = e || window.event;
				var imgX = e.pageX;
				var imgY = e.pageY;
				var boxLeft = imgX - preview.offsetLeft - box.offsetWidth/2;
				var boxTop = imgY - preview.offsetTop - box.offsetHeight/2;
				if(boxLeft < 0){
					boxLeft = 0;
				}else if(boxLeft > preview.offsetWidth - box.offsetWidth){
					boxLeft = preview.offsetWidth - box.offsetWidth;
				}
				if(boxTop < 0){
					boxTop = 0;
				}else if(boxTop > preview.offsetHeight - box.offsetHeight){
					boxTop = preview.offsetHeight - box.offsetHeight;
				}
				box.style.left = boxLeft + "px";
				box.style.top = boxTop + "px";
				var count = img.offsetWidth/preview.getElementsByTagName("img")[0].offsetWidth;
				img.style.left = -boxLeft*count + "px";
				img.style.top = -boxTop*count + "px";
		}	
		}
		