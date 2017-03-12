// JavaScript Document
window.onload=function(){
	var opin=document.getElementsByClassName("pin");
	var harr=[]//用于储存每列的高度
	var onivW=document.body.clientWidth||document.documentElement.clientWidth;
	var opinW=opin[0].offsetWidth
		console.log(onivW,opinW)
	var cols=Math.floor(onivW/opinW)
	for(var i=0;i<opin.length;i++){
		if(i<cols){
			harr.push(opin[i].offsetHeight)	
		}
		else{
			var minH=Math.min.apply(null,harr)
			var index=getminH(harr,minH);
			opin[i].style.position="absolute";
			opin[i].style.top=minH+"px"
			opin[i].style.left=opin[index].offsetLeft+"px";
			harr[index]+=opin[i].offsetHeight;
		}
	}
}
	//定义寻找对应最小高度列的定位值的函数
	function getminH(arr,val){
		for(var i in arr){
			if(arr[i]==val){
				return i;	
			}	
		}
	}
	function checkscroll(){
		var lastH=opin[opin.length-1].offsetHeight/2
	}





