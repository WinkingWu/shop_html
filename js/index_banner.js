			$(function(){
				var lilen = $(".bd li").length;
				var winw = $(window).width();
				var index = 0;
				var toggle = true;
				//多少张banner图就自动添加多少个li（圆点）
				for (i=1;i<=lilen;i++) {
					$(".hd ol").append("<li></li>");
					$(".hd ol li").eq(index).addClass("on");
				}

				$(".bd li").width(winw);
				$(".bd ul").width(winw*(lilen+1));
				//li设置位置一字排开
				for (i=0;i<lilen;i++) {

					$(".bd li").eq(i).css("left",(i*winw)+"px");
					
				}
				//窗口改变更新
				$(window).resize(function(){
					location.reload();
				})
				//根据索引值改变ul left值
				function show(){
					if (index>lilen-1) {
							index=0;
						}
						$(".bd ul").animate({"left":(-index*winw)+"px"},300,function(){toggle = true;});
						$(".hd li").eq(index).addClass("on").siblings().removeClass("on");
				}
				//切换下一张
				function next(){
					if(toggle){
						toggle = false;
						index+=1;
						show();
					}
				}
				//点击圆点切换
				$(".hd li").click(function(){
					if(toggle){
						toggle = false;
						index = $(this).index();
						show();
					}
				})
				//点击下一张
				$(".next").click(function(){
					
						if(toggle){
						toggle = false;
						index+=1;
						show();
					}
				})
				//点击上一张
				$(".prve").click(function(){
					
						if(toggle){
						toggle = false;
						index-=1;
						if (index<0) {
							index=lilen-1;
						}
						$(".bd ul").animate({"left":(-index*winw)+"px"},300,function(){toggle = true;});
							console.log(index);
						$(".hd li").eq(index).addClass("on").siblings().removeClass("on");
					}
				})
				//鼠标触发
				$(".banner").mouseover(function(){
					clearInterval(lb);
				})
				$(".banner").mouseout(function(){
					lunbo()
				})
				//自动轮播
				function lunbo(){
					lb=setInterval(next,3000);
				}
				lunbo();
			})