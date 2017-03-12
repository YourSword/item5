//window窗体大小发生改变的事件 onresize

    function winclient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
        };
    }

//滚动事件
     function winscroll(){
            return {
            top:scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
            
            left:scrollLeft=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
            };
    }

    function getPageY(event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    }

//能够让页面往上走
    function animateTop(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = winscroll().top;
            // console.log(winscroll().top)

            var step = leader*0.1;
            if (leader > target) {
                leader = leader - step;
                
                window.scrollTo(0,leader);

            }else if(leader < target){
                leader = leader + step;
                
                window.scrollTo(0,leader);

            } else {
                clearInterval(obj.timer);
            }
        }, 25);
    }
//能够让页面往下走
    function animateDown(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = winscroll().top+1;
            // console.log(deltaY)

            var step = (target-leader)*0.1;
            console.log(step)

            if(leader < target){
                leader = leader + step;
                
                window.scrollTo(0,leader);

            } else {
                clearInterval(obj.timer);
            }
        }, 25);
    }
