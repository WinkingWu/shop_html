//获取购物车的数据，再传到本地存储
var product = {};//定义一个json来获取数据
$(function(){
	function setProduct () {
		var imgsrc = $(".pro_img").children("img").attr("src");console.log(imgsrc);
		var proname = $("#pro_name").text();console.log(proname);
		var pro_price = $("#pro_price").text();console.log(pro_price);
		var pro_num = $(".buy_num>input").val();console.log(pro_num);
		var pro_total = parseFloat($("#pro_price").text().replace("￥",""))*pro_num;console.log(pro_total)
		
		product = {
			imgsrc:imgsrc,
			proname:proname,
			pro_price:pro_price,
			pro_num:pro_num,
			pro_total:pro_total
		}
	}
	//加入购物车时，添加本地存储
	$("#add_cart").click(function(){
		setProduct();
		addShopCar(product);
		Carnum();
	})
	//点击购买时，添加数据本地存储
	$("#add_pay").click(function(){
		setProduct();
		addproPay(product);
	})
})

//获取购物车的数据，再传到支付页的本地存储


//更新产品详情数据
$(function(){
	function loadProdata(){
		var proData = JSON.parse(getProdata());
		if (proData) {
			for (var i=0;i<proData.length;i++) {
				$("#preview img").attr("src",proData[i].imgsrc) ;
				$(".pro_img img").attr("src",proData[i].imgsrc) ;
				$("#pro_price").text(proData[i].price);
				$("#pro_name").text(proData[i].proname);
			}
		}
	}
	loadProdata();
})
$(function(){
	$(".mark li").click(function(){
		var src = $(this).find("img").attr("src");console.log(src);
		var index = $(this).index();
		for (var i=0;i<=index;i++) {
			$(this).parent(".mark").find("img").eq(i).attr("src","img/xing1.png")
		}
		for (var j=index+1;j<5;j++) {
			$(this).parent(".mark").find("img").eq(j).attr("src","img/xing3.png")
		}
	})
})

function Toggle(event){
	var that = event.target;console.log($(that).parent().siblings());
	var index =$(that).index();console.log(index)
	$(that).addClass("on").siblings().removeClass("on");
	if (index==1) {
		$(".comment").addClass("show").siblings().removeClass("show")
	} else{
		$(".details").addClass("show").siblings().removeClass("show")
	}
}


function AddToggle(obj){
		$(obj).siblings(".add").slideDown();
		$(obj).siblings(".add").mouseleave(function(){
			$(this).slideUp();
		})
		$(obj).siblings(".add").find("li").mousedown(function(){
			var add = $(this).text();
			$(obj).val(add);
			$(obj).css("border-color","#009247")
			$(this).parents(".add").slideUp();
		})
		$("body").mousedown(function(){
			$(obj).siblings(".add").slideUp();
		})
}
