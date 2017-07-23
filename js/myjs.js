//导航栏（商品类型）
$(function (){
	//导航下拉
	function Navdropdown(){
		var toggle=true;
		if ($(".navbar .dropdown div.dropdown_menu").hasClass("hidden")) {
			toggle=false;
		}
		$(".navbar .dropdown_btn").click(function(){
			if(toggle){
			$(".navbar .dropdown_menu").addClass("hidden");
			console.log("隐藏");
			toggle=false;
			}
			else {
				$(".navbar .dropdown_menu").removeClass("hidden");
			console.log("显示");
					toggle=true;
			}
		})
	}

	//shop_list 筛选添加on属性
	function Screen(){
		$(".screen dd a").click(function(){
			$(this).parents("dd").addClass("on").siblings().removeClass("on");
		})
	}
	$(".brand").find("a").click(function(){
		$(".brand").find("a").parent().removeClass("on");
		$(this).parent().addClass("on")
		
	})
	
	//shop_list 价格检验为正数
	function Test_num(){
		var num1="";
		var num2="";
		$("#num_range input").change(function(){
			num1 = $("#num_range input").eq(0).val();
			num2 = $("#num_range input").eq(1).val();
			if (num1<0 || isNaN(num1)) {
				alert("请输入正确的数值范围！");
				$("#num_range input").eq(0).val(null);
			}
			if (num2<0 || isNaN(num2)) {
				alert("请输入正确的价格范围！");
				$("#num_range input").eq(1).val(null);
			}
		})
		
		$("#num_range button").click(function(){
			if (num1=="" || num2=="") {
				alert("请输入价格范围！");
			}
		})
	}
	//产品详情/购物车购买数量
	function Buy_num(){
		var num;
		$(".buy_num input").bind('input propertychange',function(){
			num = $(this).val();
			if(isNaN(num) || num==0 || num==null){
				$(this).val(1);
				num = $(this).val();
			}
			num = parseInt(num);
			$(this).val(num);
			
			//价格小计
			var  price = parseFloat($(this).parents("td").siblings(".price").text().replace("￥",""));
			var subtotal = parseFloat($(this).parents("td").siblings(".price").text().replace("￥",""))*num;
			$(this).parents("td").siblings(".subtotal").text("￥"+subtotal);
			//更新本地存储的产品数量
			var imgsrc = $(this).parents("tr").find(".proname").attr("src");
			changeCarNum(imgsrc,num,subtotal);
			Pro_total();
		})
		$(".buy_num button.decline").click(function(){
			num = $(this).siblings("input").val();
			num--;
			if (num<1) {
				num = 1;
			}
			$(this).siblings("input").val(num);
			
		
			//价格小计
			var  price = parseFloat($(this).parents("td").siblings(".price").text().replace("￥",""));
			var subtotal = parseFloat($(this).parents("td").siblings(".price").text().replace("￥",""))*num;
			$(this).parents("td").siblings(".subtotal").text("￥"+subtotal);
			//更新本地存储的产品数量
			var imgsrc = $(this).parents("tr").find(".pro_img").attr("src");
			changeCarNum(imgsrc,num,subtotal);
			Pro_total();
		})
		$(".buy_num button.increase").click(function(){
			num = $(this).siblings("input").val();
			num++;
			$(this).siblings("input").val(num);
			
			//价格小计
			var  price = parseFloat($(this).parents("td").siblings(".price").text().replace("￥",""));
			var subtotal = parseFloat($(this).parents("td").siblings(".price").text().replace("￥",""))*num;
			$(this).parents("td").siblings(".subtotal").text("￥"+subtotal);
			//更新本地存储的产品数量
			var imgsrc = $(this).parents("tr").find(".pro_img").attr("src");
			changeCarNum(imgsrc,num,subtotal);
			Pro_total();
		})
	}
	var tick_src1 = "img/no_tick.png";
	var tick_src2 = "img/tick.png";
	//所有价格合计
	function Pro_total(){
		var trlen = $(".cart_list tbody tr").length;
		var total = 0;
		var count = 0;
		for (var i=0 ;i<trlen;i++) {
			var tick_src = $(".cart_list tbody tr").eq(i).find("img.tick").attr("src");
			if (tick_src==tick_src2) {
				var sub = parseFloat($(".cart_list tbody tr").eq(i).find(".subtotal").text().replace("￥",""));
				var inpval = parseFloat($(".cart_list tbody tr").eq(i).find(".buy_num input").val());
				total = total + sub;
				count = count + inpval;
			}
		}
		$("#total").text(total);
		$("#count").text(count);
		//产品类型加类on
		$(".itemInfo_wrap ol li").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
		})
	}
	//放大镜切换
	function Mag_switch(){
		$(".spec-list li").mouseover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var imgsrc = $(this).children("img").attr("src");
			$("#preview img").attr("src",imgsrc)
		})
	}
	//如果所有产品都选中，则全选；
	function Pro_all () {
		var trlen = $(".cart_list tbody tr").length;
		var num = 0;
		for (var i=0;i<trlen;i++) {
			var tick_src = $(".cart_list tbody tr").eq(i).find("img.tick").attr("src");
			if (tick_src == tick_src1) {
				break;
			}
			num++;console.log("num:"+num)
			if (num==trlen) {
				$("a.all_tick img").attr("src",tick_src2);
			}
		}
	}
	//多选框切换
	function Tick(){
		$("img.tick").click(function(){console.log("dianjile")
			var tick_src = $(this).attr("src");
			switch (tick_src){
				case tick_src1:
					$(this).attr("src",tick_src2);
					//如果所有产品都选中，则全选；
					Pro_all();
					Pro_total();
					break;
				default:
					$(this).attr("src",tick_src1);
					//如果有产品取消选中，则取消全选；
					$("a.all_tick img").attr("src",tick_src1);
					Pro_total();
					break;
			}
		})
		//全选
		$("a.all_tick").click(function(){
			$(this).children(".tick").unbind();//移除tick的点击事件的影响
			var tick_src = $("a.all_tick img").attr("src");
			switch (tick_src){
				case tick_src1:
			$(".tick").attr("src",tick_src2);
					break;
				default:
			$(".tick").attr("src",tick_src1);
					break;
			}
			Pro_total();
		})
	}
	//删除商品
	function Del_pro(){
		$("a.del_pro").click(function(){
			var imgsrc = $(this).parents("td").siblings().find(".pro_img").attr("src");
			var r = confirm("是否删除？")
			if (r==true){
		    	delProduct(imgsrc);
				$(this).parents("tr").remove();
				Pro_all();
				Pro_total();
				Carnum();
		  }
		})
		//删除所选商品
		$("a#del_sel").click(function(){
			var trlen = $(".cart_list tbody tr").length;console.dir(trlen);
			for (var i=0;i<trlen;i++) {
				var tick_src = $(".cart_list tbody tr").eq(i).find("img.tick").attr("src");
				if (tick_src == tick_src2) {
					//删除本地存储商品
					var imgsrc = $(".cart_list tbody tr").eq(i).find(".pro_img").attr("src");console.log(imgsrc)
					delProduct(imgsrc);
					$(".cart_list tbody tr").eq(i).remove();
					i--;
				}
			}
			Pro_total();
		})
	}

	Navdropdown();
	Branddropdown();
	Screen();
	Test_num();
	Buy_num();
	Mag_switch();
	Tick();
	Del_pro();
	Pro_total();
	Carnum()
})

//购物车产品数量
function Carnum(){
	var carData = JSON.parse(localStorage.getItem('shopcar'));
	if (carData) {
		$("#car_num").text(carData.length);
	}
}


//支付页面
function PayShow(){
	$("#pay_box").css("display","block");
}
function PayHidden(){
	$("#pay_box").css("display","none");
}

	//shop_list品牌下拉
	function Branddropdown(){
		$(".brand .more").toggle();
	}

//验证码切换
function swichCode(){
	
	var imgArry = ["yzm01.jpg","yzm02.jpg","yzm03.jpg","yzm04.jpg","yzm05.jpg","yzm06.jpg"];
	var ranNum = Math.floor(Math.random()*6);console.log(ranNum);
	$("#code").siblings("span").find("img").attr("src","img/"+imgArry[ranNum])
	
}
