
//往购物详情添加数据（产品）
$(function(){
	function loadCar(){
		var carData = JSON.parse(getPay());
		var total = 0;
		if (carData) {
			var tbody = $(".order_list");
			for (var i=0; i<carData.length;i++) {
			
				//图片
				var proimg = '<li><a href="pro_details.html"><img src="'+carData[i].imgsrc+'" alt="" /></a></li>';
				//产品名称
				var proname = '<li><p><a href="pro_details.html">'+carData[i].proname+'</a></p><p><a href="pro_details.html">德尔CED-5</a></p></li>';
				//价格
				var pro_price = '<li>'+carData[i].pro_price+'</li>';
				//数量
				var pro_num = '<li><button>-</button><input type="text" value="'+carData[i].pro_num+'" disabled="disabled"/><button>+</button></li>'
				//合计
				var pro_total = '<li>￥'+carData[i].pro_total+'</li>';
				
				tbody.append("<ul>"+proimg+proname+pro_price+pro_num+pro_total+"</ul>");
				//总价
				total = (parseFloat(total)+parseFloat(carData[i].pro_total)).toFixed(2)
			}
			$("#total").text("￥"+total);
			var discount = parseFloat($("#discount").text().replace("￥",""));console.log(discount)
			var freight = parseFloat($("#freight").text().replace("￥",""));console.log(freight)
			var payment = (total-discount+freight).toFixed(2);console.log(payment)
			$(".payment").text("￥"+payment);
		}
	}
	loadCar();
	})