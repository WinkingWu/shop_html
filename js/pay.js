function orderShow(){
	$("#order_details").toggle();
}

//支付页面
function PayShow(){
	$("#pay_box").css("display","block");
	$("#password_box input").eq(0).focus()
}
function PayHidden(){
	$("#pay_box").css("display","none");
}


$(function(){
		//支付类型打钩
	$(".pay_method").find("li").click(function(){
		console.log($(".pay_method").find("a").length);
		var len = $(".pay_method").find("a").length;console.log("len:"+len)
		for (var i=0;i<len;i++) {
			$(".pay_method").find("a").eq(i).children().eq(0).attr("src","img/no_select.png")
		}
		$(this).find("img").eq(0).attr("src","img/select.png");
	})
	//当对input相关操作时触发
//	$("#inp").bind('input propertychange', function() { 
//	 console.log($(this).val()) 
//	});
	function inputChange(obj){
		$(obj).keyup(function() { 
			var value = $(this).val();console.log("前面"+value)
			var keycode = event.keyCode;
			if (isNaN(value) || value == "") {
				$(this).val("");
				if(keycode == 8){
		 			console.log("huoqujiaodian");
		 			if ($(this)[0] != $("#inp6")[0]) {
		 				$(obj).prev("input").focus();
		 				$(obj).prev("input").val("");
		 			}
		 		}
			} else{
				$(this).next("input").focus();
			}
		});
	}
	

	$("#password_box input").focus(function(){
		
		inputChange($(this));
			$("#inp6").keydown(function() {
				var kc = event.keyCode;
				console.log("02"+kc)
				var val = $(this).val();
				if (val == "") {
					if (kc == 8) {
					 	
		 				$(this).prev("input").val("");console.log("03sdfsdf");
		 				$(this).prev("input").focus();
		 				
					}
				}	
			})
	})
})

function submitPay(){
	var r = confirm("是否支付？")
	if (r==true){
    	self.location='pay_success.html'; 
    }
  else{
    	self.location='pay_failure.html'; 
    }
}

