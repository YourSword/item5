

//window窗体大小发生改变的事件 onresize
var darkHeader=document.getElementById('dark_header');
var dTopbar=document.getElementsByClassName('d_topbar')[0];
var dHContent=document.getElementsByClassName('d_h_content')[0];
var darkTotop=document.getElementsByClassName('dark_totop')[0];
darkHeader.style.height=winclient().height+"px";
// console.log(darkHeader.style.height);
window.onresize = function () {
	darkHeader.style.height=winclient().height + "px";
	darkHeader.style.lineHeight=winclient().height + "px";
};

//滚动到一定值使标题栏固定
var darkH1=document.getElementsByClassName('dark_h1')[0];
window.onscroll=function(){
	//让totop小标签显示隐藏
	if(winscroll().top<darkHeader.offsetHeight){
		darkTotop.style.display="none";
	}else{
		darkTotop.style.display="block";
	}

//让   dTopbar    固定

    if(winscroll().top>darkHeader.offsetHeight-dTopbar.offsetHeight){
        // dTopbar.style.position="fixed";
        // dTopbar.style.top=0;
        dTopbar.className="d_topbar fixed"
        // darkH1.style.paddingTop = dTopbar.offsetHeight + "px";
    }else{
        dTopbar.className="d_topbar"
        // dTopbar.style.position="absolute";
        // dTopbar.style.top=null;
        // .style.paddingTop=0;
        // darkH1.style.paddingTop=0;
    }

    //滚动屏幕让 d_h_content 渐隐
	var opa=1-winscroll().top/darkHeader.offsetHeight;
	dHContent.style.opacity=opa;

}

//点击菜单按钮出现菜单
var dMMenuBtn=document.getElementsByClassName('d_m_menuBtn')[0];
var dMList=document.getElementsByClassName('d_m_list')[0];
var flag=true;//开关按钮
dMMenuBtn.onclick=function(){
	if(flag){
		dMList.style.display="block";
		flag=false;
	}else{
		dMList.style.display="none";
		flag=true;
	}

//点击后 dMList 不显示了 发生了冒泡
//问题发生在dMMenuBtn身上就在dMMenuBtn身上清除冒泡
	var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

//点击其他地方让mask和show隐藏
var dMLogo=document.getElementById('dMLogo');
var dWiki=document.getElementById('dWiki');
var dIndex=document.getElementById('dIndex');


document.onclick = function (event) {
    var event = event || window.event;
    var targetId = event.target ? event.target.id : event.srcElement.id;
    //判断是否等于ID
    if (targetId != "dIndex"&& targetId != "dWiki"  && targetId != "dMLogo") {
        dMList.style.display="none";
    }
}

//小arrow
var dArrowDown=document.getElementsByClassName('d_arrowDown')[0];
var arrowDown=document.getElementById('arrowDown');
		// var timer=null;
		// var i=0;
dArrowDown.onmouseover=function(){
	// clearInterval(timer);
	// timer=setInterval(function(){
	// 	//leader = leader + step
	// 	// var target=10;
	// 	var step=0;
	// 	step = 2*i;
	// 	console.log(step);
	// 	arrowDown.style.top=step+"px";
	// 	if(step>10){
	// 		clearInterval(timer);
	// 		i=0;
	// 	}
	// 	i++;
	// },15)
	arrowDown.style.top=5+"px";
	//不用设置计时器了，太麻烦！！！
	arrowDown.style.transition=0.2+"s";
}
dArrowDown.onmouseout=function(){
	arrowDown.style.top=0;
}
dArrowDown.onclick=function(){
	var a=darkHeader.offsetHeight-dTopbar.offsetHeight;
	// console.log(a);
        clearInterval(darkTotop.timer);
	animateDown(dArrowDown, a);

}

//totop按钮
var timer=null;
darkTotop.onclick=function(){
	// window.scrollTo(0,0);
	// console.log(winscroll().top)
        clearInterval(dArrowDown.timer);
	animateTop(darkTotop, 0);
}



