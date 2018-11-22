function ajax(options){
    	//创建ajax对象                                兼容IE
    	var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
        //整理data中数据  将 a:1,b:2转换为  a=1&b=2;
        var str = "";
        //获取对象中的key值 => for in
        for(var key in options.data){
        	str+= "&"+key+"="+options.data[key];
        }
        str = str.slice(1);

        //判断请求方式  get  post
        if(options.type == "get"){//get请求在URL中
        	var url = options.url +"?"+str;
        	xhr.open("get",url)
        	xhr.send()
        }else if(options.type =="post"){//post 请求在http中
        	xhr.open("post",options.url);
        	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        	xhr.send(str)
        }
        //监听
        xhr.onreadystatechange = function(){
        	if(xhr.readyState==4 && xhr.status==200){
        		//
        		var d = xhr.responseText;
        		//将请求的数据传递给成功回调函数
        		options.success(d);
        	}else if(xhr.status!=200){
        		//失败则将服务器的状态传递给失败的回调函数
        		options.error(xhr.status);
        	}
        }
    }
