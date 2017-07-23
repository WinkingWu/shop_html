$(function(){
	function submitLogin(){
		var usernameVal = $("#username").val();
		var passwordVal = $("#password").val();
		var codeVal = $("#code").val();
		if (usernameVal == "" || passwordVal == "") {
			alert("请输入用户名或密码！");
			return false ;
		}
		else if (codeVal == "") {
			alert("验证码不能为空！");
		}else{
			var userInfos = localStorage.getItem("userInfos");
			if (!userInfos) {
				alert("该用户未注册,请先注册！");
				return false ;
			} else{
				var userData =JSON.parse(userInfos);
				var bool = true ;
				for (var i=0;i<userData.length;i++) {
					if (userData[i].username == usernameVal) {
						bool = false ;
						if (userData[i].password == passwordVal) {
							return true ;
						}else{
							alert("密码错误！请重新输入？");
							return false ;
						}
						break;
					}
				}
				if (bool) {
					alert("该用户未注册！请先注册！");
				}
			}
		}
	}
	//提交时验证
	$("#submit").click(function(){
		if (submitLogin()) {
			var src = $("form .tick").attr("src");
			var src1 = "img/no_tick.png"
			if (src != src1) { 
				setLoginData();
			}else {
				clearLoginData()
			}
			$(".login_info form").attr("onsubmit","return true");
		}
	})
	//把本地的存储添加到登录框
	function addLoginData(){
		var userData = getLoginData("LoginInfo");
		if (userData) {
			var LoginData = JSON.parse(userData);
			$("#username").val(LoginData.username);
			$("#password").val(LoginData.password);
			$("form .tick").attr("src","img/tick.png")
		}
	}
	addLoginData();
	//创建本地存储保存本地信息
	function setLoginData(){
		var username = $("#username").val();
		var password = $("#password").val();
		var userInfo = {
		username:username,
		password:password
		};
		localStorage.setItem("LoginInfo",JSON.stringify(userInfo));
	}
	function clearLoginData(){
		return localStorage.removeItem("LoginInfo");
	}
	//获取本地存储登录信息
	function getLoginData(userKey){
		return localStorage.getItem(userKey)
	}
	
	
	$("#auto_login").children("font").click(function(){
		var src = $("#auto_login .tick").attr("src");
		var src1 = "img/no_tick.png";
		var src2 = "img/tick.png";
		if (src == src1) {
			$("#auto_login .tick").attr("src",src2);
		} else{
			$("#auto_login .tick").attr("src",src1);
		}
	})
})