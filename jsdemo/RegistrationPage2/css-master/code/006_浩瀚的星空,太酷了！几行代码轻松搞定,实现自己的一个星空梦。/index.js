// 星空粒子数量
var starCount=400;
// 动画时间
var maxTime=30;

var universe=document.getElementById("universe") 
var w=window;

var width=w.innerWidth;
var height=w.innerHeight;

// 生成400个粒子
for(let i=0;i<starCount;++i){
    // 随机高度
    var ypos=Math.round(Math.random()*height)
    var stat=document.createElement("div")

    // 时间范围  大概时1S至  36S
    var speed=1000*(Math.random()*maxTime+1)
    
    // 设置粒子属性 stat0 stat1 stat2 stat3
    stat.setAttribute("class","stat"+(3-Math.floor(speed/1000/8)))

    stat.style.background="white";

    // 添加节点
    universe.appendChild(stat);

    // 开始设置动画
    stat.animate(
        [   
            // 起始位置
            {
                // transform: translate3d();
                transform:"translate3d("+width+"px,"+ypos+"px,0)"
            },
            // 结束位置
            {
                transform:"translate3d(-"+Math.random()*256+"px,"+ypos+"px,0)"
            }
        ],
        // 设置动画的属性
        {
            delay:Math.random()*-speed,
            duration:speed,
            iterations:1000
        }
    );
}