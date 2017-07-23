//定义key名称
var carName = "shopcar"
//将商品添加到购物车
function addShopCar(product){
	//先获取本地数据
	var productData = getCar();
	//如果本地里面没有任何商品
	if(!productData){
		//创建一个JSON数据，将商品添加到这个JSON数据里面
		var proData = [
			product,
		]
		//再存储到本地存储（添加到购物车）
		addCar(proData)
	}else{
		//本地已经有数据（商品）
		//将数据转换成JSON格式的数据
		var carData = JSON.parse(productData);
		var bool = true;
		//遍历这个数据
		for(var i=0;i<carData.length;i++){
			//通过id判断是否有相同的商品，如果有相同的商品，直接加数量和小计
			if(carData[i].imgsrc == product.imgsrc){
				carData[i].pro_num = parseInt(carData[i].pro_num) + parseInt(product.pro_num);
				carData[i].pro_total = (parseFloat(carData[i].pro_total) + parseFloat(product.pro_total));
				bool = false;
				break;
			}
		}
		//如果没有相同的商品，直接将这个商品添加到购物车
		if(bool){
			//数组添加数据的方法push()
			carData.push(product)
		}
		//再重新将所有的商品存储到购物车
		addCar(carData);
	}
}
//通过指定的key获取商品数据
function getCar(){
	return localStorage.getItem(carName);
}
//通过指定的key添加商品到本地
function addCar(productData){
	localStorage.setItem(carName,JSON.stringify(productData));
}
//通过指定的name删除对应的商品
function delProduct(imgsrc){
	//先获取本地数据
	var carData = JSON.parse(getCar());
	//定义一个空数组，用来存储id不相等的商品
	var arrData = [];
	for(var i=0;i<carData.length;i++){
		if(carData[i].imgsrc == imgsrc){
			//如果id等于本地数据其中一个商品的id，就直接跳出这一次循环，再进行下一次循环
			continue;
		}else{
			//把id不相等的商品添加到新数组里面
			arrData.push(carData[i])
		}
	}
	//再重新将数据添加到购物车里面
	addCar(arrData);
}
//改变本地数据的数量
function changeCarNum(imgsrc,pro_num,pro_total){
	var carData = JSON.parse(getCar());
	for(var i=0;i<carData.length;i++){
		if(carData[i].imgsrc == imgsrc){
			carData[i].pro_num = pro_num;
			carData[i].pro_total = pro_total
			break;
		}
	}
	addCar(carData);
}

//产品详情本地存储

//产品列表产品信息添加到产品详情里
var proName = "prodeta"
//数据添加到产品详情
function addProdetails (product) {
	
		//创建一个JSON数据，将商品添加到这个JSON数据里面
		var pro_data = [
			product,
		]
		//更新本地存储
		addProdata(pro_data);
}
//通过指定的key获取商品数据
function addProdata(proData){
	localStorage.setItem(proName,JSON.stringify(proData));
}
//通过指定的key添加商品到本地
function getProdata () {
	return localStorage.getItem(proName);
}


//支付页本地存储
//定义本地存储key名称
var payName = "proPay"
//将商品添加到支付页
function addproPay(product){
	var payData = [
		product,
	]

		addPay(payData);
}
//通过指定的key获取商品数据
function getPay(){
	return localStorage.getItem(payName);
}
//通过指定的key添加商品到本地
function addPay(productData){
	localStorage.setItem(payName,JSON.stringify(productData));
}
function delOrder(imgsrc){
	//先获取本地数据
	var carData = JSON.parse(getPay());
	//定义一个空数组，用来存储id不相等的商品
	var arrData = [];
	for(var i=0;i<carData.length;i++){
		if(carData[i].imgsrc == imgsrc){
			//如果id等于本地数据其中一个商品的id，就直接跳出这一次循环，再进行下一次循环
			continue;
		}else{
			//把id不相等的商品添加到新数组里面
			arrData.push(carData[i])
		}
	}
	//再重新将数据添加到购物车里面
	addPay(arrData);
}