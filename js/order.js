$(function(){
	function loadOrder(){
		var carData = JSON.parse(getPay());
		console.log(carData);
		if (carData) {
			var tbody = $("tbody");
			for (var i=0; i<carData.length;i++) {
				//复选框
				var tick = "<td><img src='img/no_tick.png' class='tick'/>";
				//图片
				var proimg = "<a href='pro_details.html'><img class='pro_img' src="+carData[i].imgsrc+" alt='' /></a></td>";
				//产品名称
				var proname = "<td><p class='proname'><a href='pro_details.html'>"+carData[i].proname+"</a></p><p><a href='pro_details.html'>德尔CED-5</a></p></td>";
				//价格
				var pro_price = "<td class='price'>"+carData[i].pro_price+"</td>";
				//时间
				var time = '<td>2017-02-03&nbsp;&nbsp;16:12</td>';
				//状态
				var state = '<td>未付款</td>';
				//操作
				var operation = '<td><h4><a href="pay.html">立即付款</a></h4><p><a href="order_details.html">查看订单</a></p><p><a class="del_order" href="###">取消订单</a></p></td>';
				tbody.append("<tr>"+tick+proimg+proname+pro_price+time+state+operation+"</tr>");
				
			}
			
			
		}
	}
	loadOrder();
	$(".del_order").click(function(){
		$(this).parents("tr").remove();
		var imgsrc = $(this).parents("td").siblings().find(".pro_img").attr("src");console.log(imgsrc);
		delOrder(imgsrc)
	})
	
	//选项卡
	$(".order_menu li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
})