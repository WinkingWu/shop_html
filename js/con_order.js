$(function(){
	function loadOrder(){
		var carData = JSON.parse(getPay());
		var num = 0;
		var total = 0;
		console.log(carData);
		if (carData) {
			var tbody = $(".cart_list tbody");
			for (var i=0; i<carData.length;i++) {
				//复选框
				var tick = "<td><img src='img/no_tick.png' class='tick'/></td>";
				//图片
				var proimg = "<td><a href='###'><img class='pro_img' src="+carData[i].imgsrc+" alt='' /></a></td>";
				//产品名称
				var proname = "<td><p class='proname'><a href='###'>"+carData[i].proname+"</a></p><p>德尔CED-5</p></td>";
				//价格
				var pro_price = "<td class='price'>"+carData[i].pro_price+"</td>";
				//数量
				var pro_num = "<td class='buy_num'>×"+carData[i].pro_num+"</td>"
				//合计
				var pro_total = "<td class='subtotal'>￥"+carData[i].pro_total+"</td>";
				//删除
				var del_pro = "<td><a href='javaScript:void(0)' class='del_pro'>删除</a></td>";
				tbody.append("<tr>"+tick+proimg+proname+pro_price+pro_num+pro_total+del_pro+"</tr>");
				//数量
				num = num+parseFloat(carData[i].pro_num);
				//总价
				total = (parseFloat(total)+parseFloat(carData[i].pro_total)).toFixed(2);
			}
			
			var discount = parseFloat($("#discount").text().replace("￥",""));console.log(discount)
			var freight = parseFloat($("#freight").text().replace("￥",""));console.log(freight)
			var payment = (total-discount+freight).toFixed(2);console.log(payment)
			$(".payment").text("￥"+payment);
			$("#num").text(num);
			$("#money").text("￥"+total);console.log($("#total").text())
		}
	}
	loadOrder();
})