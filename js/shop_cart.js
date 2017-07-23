
//往购物车添加数据（产品）
$(function(){
	function loadCar(){
		var carData = JSON.parse(getCar());
		console.log(carData);
		if (carData) {
			var tbody = $(".cart_list tbody");
			for (var i=0; i<carData.length;i++) {
				//复选框
				var tick = "<td><img src='img/no_tick.png' class='tick'/></td>";
				//图片
				var proimg = "<td><a href='pro_details.html'><img class='pro_img' src="+carData[i].imgsrc+" alt='' /></a></td>";
				//产品名称
				var proname = "<td><p class='proname'><a href='pro_details.html'>"+carData[i].proname+"</a></p><p><a href='pro_details.html'>德尔CED-5</a></p></td>";
				//价格
				var pro_price = "<td class='price'>"+carData[i].pro_price+"</td>";
				//数量
				var pro_num = "<td class='buy_num'><button type='button' class='decline'>-</button><input type='text' value="+carData[i].pro_num+" /><button type='button' class='increase'>+</button></td>"
				//合计
				var pro_total = "<td class='subtotal'>￥"+carData[i].pro_total+"</td>";
				//删除
				var del_pro = "<td><a href='javaScript:void(0)' class='del_pro'>删除</a></td>";
				tbody.append("<tr>"+tick+proimg+proname+pro_price+pro_num+pro_total+del_pro+"</tr>")
			}
		}
	}
	loadCar();
})

//点击购买时，添加本地储存
function addcarPay(){
	var trlen = $(".cart_list tbody tr").length;
	var payData = [];
	for (var i=0;i<trlen;i++) {
		var tick_src = $(".cart_list tbody tr").eq(i).find("img.tick").attr("src");
		if (tick_src == "img/tick.png") {
			var carData = JSON.parse(getCar());console.log(i);
			var imgsrc = $(".cart_list tbody tr").eq(i).find(".pro_img").attr("src");
			for (var j=0;j<carData.length;j++) {
				if (imgsrc == carData[j].imgsrc) {
					payData.push(carData[j]);console.log("cardata"+carData[j]);
					delProduct(imgsrc);
					self.location='confirm_order.html'; 
				}
			}
		}
	}
	addPay(payData);
}
