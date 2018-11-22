/*
	随机数
	参数：
		n:起始数字
		m:范围
 */
function numRandom(n,m) {
	if(n>m){
		return parseInt(m+Math.random()*(n-m+1));
	}else{
		return parseInt(n+Math.random()*(m-n+1));
	}
}
/*
冒泡排序
 */
function bubbleSort(arr){
	var temp;
	for(var i=1;i<arr.length;i++){
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	return arr;
}

/*
选择排序

 */
function selectSort(arr){
	var temp;
	 for(var i=0;i<arr.length-1;i++){
	 	for(var j=i+1;j<arr.length;j++){
	 		if(arr[i]>arr[j]){
	 			temp = arr[i];
	 			arr[i] = arr[j];
	 			arr[j] = temp;
	 		}
	 	}		
	 	
	 }
	 return arr;
}

/*
快速排序法

 */


function quickSort(arr){
	if(arr.length<=1){
		return arr;
	}

	//获取下标
	var midIndex = arr.length%2 == 0?arr.length/2:(arr.length+1)/2;
	//取中间值
	var mid = arr[midIndex];
	//定义左边的数组
	var left = [];
	//定义右边的数组
	var right = [];

	for(var i=0;i<arr.length;i++){
		if(i !=midIndex && arr[i]<=mid){
			left.push(arr[i]);
		}

		if(i !=midIndex && arr[i]>mid){
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(mid).concat(quickSort(right))
}

/*
随机验证码

n:需要要多少位的验证码
 */
function randomCode (n) {
	var str = "";
	for(var i=0;i<n;i++){
		var num = parseInt(48+Math.random()*(122-48+1));
		while((num>=58&& num<=64) || (num>=91&&num<=96)){
			num = parseInt(48+Math.random()*(122-48+1));
		}
		str+=String.fromCharCode(num);
	}

	return str;
}

/*
随机颜色

 */

function randomToColor(){
	var R = numRandom(0,255);
	var G = numRandom(0,255); 
	var B = numRandom(0,255);

	return "rgb("+R+","+G+","+B+")"; 
}

/*
随机颜色2
 */
function randomTo2Color(){
	var R = numRandom(0,255)
	var G = numRandom(0,255)
	var B = numRandom(0,255)

	return kzero(R,G,B);
}


function kzero(r,g,b){
	r = r.toString(16).length<2?"0"+r.toString(16):r.toString(16)
	g = g.toString(16).length<2?"0"+g.toString(16):g.toString(16)
	b = b.toString(16).length<2?"0"+b.toString(16):b.toString(16)
	
	return "#"+r+g+b;
}

/*
将时间对象转换为字符串
 */
function dateToString(d,sign) {
	if(!sign){
		sign = "/";
	}

	return d.getFullYear()+sign+ dzero((d.getMonth()+1))+sign+dzero(d.getDate())+" "+dzero(d.getHours())+":"+dzero(d.getMinutes())+":"+ dzero(d.getSeconds())
}

function dzero(n){
	if(n<10){
		return "0"+n;
	}

	return n;
}

/*
倒计时
 */
 function cDown(time){
	var day = Math.floor(time/(24*60*60*1000));
	var h = Math.floor(time%(24*60*60*1000)/(60*60*1000));
	var m = Math.floor(time%(24*60*60*1000)%(60*60*1000) / (60*1000));
	var s = Math.floor((time%(24*60*60*1000)%(60*60*1000) % (60*1000) / 1000));
	return {
		day:day,
		h:h,
		m:m,
		s:s
	}
}

/*
获取非行间样式
 */

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr]
	}
}

/* 
	获取 设置自定义属性
*/
function attr(){
	if(arguments.length == 2){
		return arguments[0].getAttribute(arguments[1]);
	}

	if(arguments.length == 3){
		arguments[0].setAttribute(arguments[1],arguments[2]);
	}
}

/*
	隐藏 显示
*/

function show(options){
	var el = document.querySelector(options.el);
	el.style.display = options.state;
}

/*
  获取id
 */

 function $(id) {
 	return document.getElementById(id.slice(1));
 }