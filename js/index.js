
	/* 焦点获取 */
	var p_value = $(".search .txt").val();
	$(".search .txt").focus(function(){
		if($(this).val()== p_value){
			$(this).val("");
		}
	});
	$(".search .txt").blur(function(){
		if($(this).val()==""){
			$(this).val(p_value);
		}
	});

	/* 二级导航 */
	$(".subNav .mainNav ul li").hover(function(){
		$(this).find(".menu").show();
		$(this).addClass("hover");
	},function(){
		$(this).find(".menu").hide();
		$(this).removeClass("hover");
	});

	/* 广告图滚动*/

	var sub_ = 0;
	var timeShu = null;
	$("#Adv .ImgList").hover(function(){
		clearInterval(timeShu);
	},function(){
		autoPlay();
	});
	$("#Adv ul.button li").hover(function(){/*鼠标划入时*/
		clearInterval(timeShu);/*定时器清楚不成功*/
		sub_ = $(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		$("#Adv .ImgList").eq(sub_).fadeIn().siblings("div").fadeOut();
	},function(){/*鼠标划出时*/
		autoPlay();
	});

function autoPlay(){
		timeShu = setInterval(function(){
			if(sub_<4){
				if(sub_==3){sub_=-1;};
				sub_++;
				$("#Adv ul.button li").eq(sub_).addClass("hover").siblings().removeClass("hover");
				$("#Adv .ImgList").eq(sub_).fadeIn().siblings("div").fadeOut();
			}
		},2000);
	};
	autoPlay();

// 路线推荐选项卡效果
	var index_1 = 0;
$('ul.select_but li').mouseover(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");//改变按钮的样式
		sub_b = $(this).index();
		$(".select_con .select_content").eq(sub_b).show().siblings("div").hide();

});

//路线推荐文字滑动效果
$("ul.sel_imgList li").hover(function(){
	$(this).find("p").animate({height:"41px",padding:"2px 5px"},200);
},function(){
	$(this).find("p").animate({height:"0px",padding:"0px 5px"},200);
});

//广告滑动效果
	var sub_j = 0;
	var timec =null;
	sub_j = $("ul.Part_ScrollBut li").index();
$("ul.Part_ScrollBut li").hover(function(){
		clearInterval(timec);
		$(this).addClass("hover").siblings("li").removeClass("hover");
		sub_j = $(this).index();
		$("ul.Part_ScrollTxt li").eq(sub_j).show().siblings("li").hide();
		$(".Part_ScrollCon").animate({left:sub_j*(-339)},1000);
},function(){
	autoPaly1();
});


function autoPaly1(){
	timec =setInterval(function(){
		
		if(sub_j<5){
			if(sub_j==4){sub_j=-1;}
			sub_j++;
			$("ul.Part_ScrollBut li").eq(sub_j).addClass("hover").siblings("li").removeClass("hover");
			$("ul.Part_ScrollTxt li").eq(sub_j).show().siblings("li").hide();
			$(".Part_ScrollCon").animate({left:sub_j*(-339)},1000);
		}else{sub_j=-1;}	
		
	},2000);
}
autoPaly1();


//选项卡2

function sel_tab(a,b,c){
	var sub_1 = 0;
	$(a).mouseover(function(){
		$(this).addClass("hover").siblings("a").removeClass("hover");
		sub_1 = $(this).index();
		$(b).eq(sub_1).css("display","block").siblings("img").hide();
		$(c).eq(sub_1).css("display","block").siblings("div").hide();

	});

};
sel_tab("#Part3 p.title a.sel_a","#Part3 .Part3Con .Part3ConL img","#Part3 .Part3ConR .Part3ConR_com");
sel_tab("#Part4 p.title a.sel_a","#Part4 .Part3Con .Part3ConL img","#Part4 .Part3ConR .Part3ConR_com");

//签证选项卡
function sel_tab1(a,c){
	var sub_1 = 0;
	$(a).mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		sub_1 = $(this).index();
		$(c).eq(sub_1).css("display","block").siblings().hide();

	});

};
sel_tab1("#Part5 ul.part5_selbut li","#Part5 .part5_con .part5_content");

//向下动画
$(".part5_comm").hover(function(){
	$(this).find("p").stop(true,true).slideDown();
},function(){
	$(this).find("p").stop(true,true).slideUp();
});

//微信二维码

$("#fixedBox #fixedBox_Con ul li.li4 a.wx1").hover(function(){
	$("#fixedBox #fixedBox_Con ul li.li4 img.erm").show();

},function(){
	$("#fixedBox #fixedBox_Con ul li.li4 img.erm").hide();
});

/*横幅广告显示*/

$(window).scroll(function(){
	var Top = $(window).scrollTop();
	if(Top>1000){
		$("#fixedBox").addClass("scrollDisplay");
	}else{
		$("#fixedBox").removeClass("scrollDisplay");
	}
	
});

//去掉悬浮QQ
$("#Kf img.but_close").click(function(){
		$("#Kf").hide();
});

//内页图片左右切换
	
	var sub_s = 0;
	var len = $("#webPart1_Scroll .webPart1_ScrollCon dl").length; 
$("#webPart1 .webPart1_R .dirl").click(function(){
		clearInterval(zd1);
		clearInterval(zd2);
		sub_s++;
		if(sub_s<len-2){
			$("#webPart1_Scroll .webPart1_ScrollCon").animate({left:-168*sub_s+"px"},1000);
		}else{
			sub_s=len-3;
		}
});

$("#webPart1 .webPart1_R .dirr").click(function(){
	clearInterval(zd1);
	clearInterval(zd2);
	sub_s--;
	if(sub_s>0){
		$("#webPart1_Scroll .webPart1_ScrollCon").animate({left:-168*sub_s+"px"},1000);
	}else{
		sub_s=1;
	}
	
});

var zd1 = null;
var zd2 = null;
function atuoPaly3(){
	clearInterval(zd2);
	zd1	= setInterval(function(){
		sub_s++;
		if(sub_s<len-2){
			$("#webPart1_Scroll .webPart1_ScrollCon").animate({left:-168*sub_s+"px"},1000);
		}else{
			sub_s=len-3;
			atuoPaly4();
		}
	},2000);
};
atuoPaly3();
function atuoPaly4(){
	clearInterval(zd1);
	zd2 = setInterval(function(){
		sub_s--;
		if(sub_s>0){
			$("#webPart1_Scroll .webPart1_ScrollCon").animate({left:-168*sub_s+"px"},1000);
		}else{
			sub_s=1;
			atuoPaly3();
		}
	},2000);
};


/*左边滚动*/
    var index_2 = 0;
    var up_click=0;
    var sjs = 0;
	var arraylist = null;
$("ul.webAdvbutton li").click(function(){
	index_2 = $(this).index();
	$(this).addClass("on").siblings("li").removeClass("on");
	$(".webAdvtxt dd").eq(index_2).show().siblings("dd").hide();
	$(".webAdvcon img").eq(up_click).css("z-index","3");//把一走的图片调到最上面
	$(".webAdvcon img").eq(index_2).css("z-index","2");
	sjs = getRandom(4)-1;
	arraylist = [{"top":"-270px"},{"left":"-361px"},{"right":"-361px"},{"bottom":"-270px"}];
	if( up_click == index_2){
	}else{
		$(".webAdvcon img").eq(up_click).stop(true,true).animate( arraylist[sjs],400,function(){
			//$(".webAdvcon img").eq(up_click).css({"top":"0px","z-index":"0"});
            $(".webAdvcon img").eq(up_click).removeAttr("style");
            up_click = index_2;
		});
	}	
});

function getRandom(n){
	return Math.floor(Math.random()*n+1);
}
/*风景详细页的*/

sel_tab1(".Deltail_btn img",".Deltail_img img");


/*内页签证页滚动条的样式*/

var sp1 = 0;
$(".Web_QzNav span").hover(function(){
	sp1 = $(this).index();
	$(this).addClass("on").siblings("span").removeClass("on");
	$(".Web_QzScroll").stop(true,true).animate({scrollTop:500*(sp1-1)+"px"},500);
},function(){});