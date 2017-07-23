//获取产品的数据，再传到产品详情的本地存储
$(function () {
	function Setproduct () {
		var imgsrc = "" ;
		var proname = "" ;
		var price = "" ;
		$(".pro_list li").click(function(){
			imgsrc = $(this).find("img").attr("src");console.log(imgsrc);
			proname = $(this).find("span").text();console.log(proname);
			price = $(this).find("b").text();console.log(price);
			
			var product = {
				imgsrc:imgsrc,
				proname:proname,
				price:price
			}
			addProdetails(product);
		})
	}
	Setproduct();
})