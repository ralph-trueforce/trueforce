function getCurrentFilename() {
    var page_name = window.location.pathname;
    var position = page_name.lastIndexOf('/') + 1;
    return page_name.substring(position);
}

$(document).ready(function(){
	$('.next-arrow').hover(function(){
		$(this).attr("src","img/TF-ScrollButton-Active.png");
	},function(){
		$(this).attr("src","img/TF-ScrollButton-Default.png");
	}
	);

	$('#hover-pic1').hover(function(){
		$('#onhover-div1').css("display","block");
	},function(){
		$('#onhover-div1').css("display","none");
	});
	$('#hover-pic2').hover(function(){
		$('#onhover-div2').css("display","block");
	},function(){
		$('#onhover-div2').css("display","none");
	});
	$('#hover-pic3').hover(function(){
		$('#onhover-div3').css("display","block");
	},function(){
		$('#onhover-div3').css("display","none");
	});
	$('#hover-pic4').hover(function(){
		$('#onhover-div4').css("display","block");
	},function(){
		$('#onhover-div4').css("display","none");
	});
	$('.arrow-right').hover(function(){
		$(this).attr("src","img/TF-ArrowButton-Active.png");
	},function(){
		$(this).attr("src","img/TF-ArrowButton-Default.png");
	}
	);
	var index=0;
	var changeText=function(i)
	{
		var text=null;
		switch(i+1){
			case 1:
				text='<b>How users interact<br> with your brand</b><br><br> Solution Research<br> Usability research';
				break;
            case 2:
                text='<b>A design incorporating<br> youur business goals</b><br><br> Journey Mapsl<br> Blueprints';
                break;
            case 3:
                text='<b>Look and feel</b><br><br>Wireframes<br> Prototypes';
                break;
            case 4:
                text='<b>Development, testing<br> and deployment</b><br> HTML5/CSS3<br> iOS<br>Android<br>Javascript programing';
                break;
            case 5:
                text='<b></b><br><br> English<br> Spanish<br>German';
				break;
			default:
				text='First<br> Second<br> Third<br> Fourth<br> Fifth';
		}
		$('#center-paragraph').html(text);
	};
    var changeTextTF=function(i)
    {
        var text=null;
        switch(i+1){
            case 1:
                text='<b>How users interact<br> with your brand</b><br><br> Solution Research<br> Usability research';
                break;
            case 2:
                text='<b>A design incorporating<br> youur business goals</b><br><br> Journey Mapsl<br> Blueprints';
                break;
            case 3:
                text='<b>HLook and feel</b><br><br>Wireframes<br> Prototypes';
                break;
            case 4:
                text='<b>Development, testing<br> and deployment</b><br> HTML5/CSS3<br> iOS<br>Android<br>Javascript programing';
                break;
            default:
                text='Front End<br>Back End<br>SOA<br>Project Management<br>Mobile';
        }
        $('#center-paragraph').html(text);
    };
    var changeTextDevelopment=function(i)
    {
        var text=null;
        switch(i+1){
            case 1:
                text='UX<br> UI<br> Business Analysis';
                break;
            case 2:
                text='Front end<br>Back End<br> SOA<br>Mobile<br>Project Management<br>Product Management';
                break;
            case 3:
                text='White Box<br>Black Box<br> Performance Testing';
                break;
            case 4:
                text=' Deploy<br> Release<br> Support<br>';
                break;
            default:
                text='Front End<br>Back End<br>SOA<br>Project Management<br>Mobile';
        }
        $('#center-paragraph').html(text);
    };
	var hoverOrClick=function(){
		$(this).css("background","#6ADBD8");
		var listItem=$(this).parent();
		index=$(listItem).parent().children().index(listItem);
		var labelSelector='#tf-label'+(index+1).toString();
		var innerSlice=$('.inner-ring li').eq(index).children();
		innerSlice.css("background","#c3f1ef");
		changeText(index);
		$(labelSelector).css("color","#6ADBD8");
		$('.ring > .slice > .slice-contents').not(this).css("background","#bec3c7");
		$('.inner').not(innerSlice).css("background","#e5e7e9");
		$('.tf-label').not(labelSelector).css("color","#000000");
	};
    var hoverOrClickTF=function(){
        $(this).css("background","#6ADBD8");
        var listItem=$(this).parent();
        index=$(listItem).parent().children().index(listItem);
        var labelSelector='#tf-label'+(index+1).toString();
        var innerSlice=$('.inner-ring li').eq(index).children();
        innerSlice.css("background","#c3f1ef");
        changeText(index);
        $(labelSelector).css("color","#6ADBD8");
        $('.ringTF > .sliceTF > .slice-contents').not(this).css("background","#bec3c7");
        $('.inner').not(innerSlice).css("background","#e5e7e9");
        $('.tf-label').not(labelSelector).css("color","#000000");
    };
    var hoverOrClickDev=function(){
        $(this).css("background","#6ADBD8");
        var listItem=$(this).parent();
        index=$(listItem).parent().children().index(listItem);
        var labelSelector='#tf-label'+(index+1).toString();
        var innerSlice=$('.inner-ring li').eq(index).children();
        innerSlice.css("background","#c3f1ef");
        changeTextDevelopment(index);
        $(labelSelector).css("color","#6ADBD8");
        $('.ringDev > .sliceDev > .slice-contents').not(this).css("background","#bec3c7");
        $('.inner').not(innerSlice).css("background","#e5e7e9");
        $('.tf-label').not(labelSelector).css("color","#000000");
    };

	$('.ring > .slice > .slice-contents').hover(hoverOrClick).click(hoverOrClick);
    $('.ringTF > .slice > .slice-contents').hover(hoverOrClickTF).click(hoverOrClickTF);
    $('.ringDev > .sliceDev > .slice-contents').hover(hoverOrClickDev).click(hoverOrClickDev);

	var toogleHover=false;

	$(document).scroll(function(event){
		var scroll=$(document).scrollTop();
		var viewportHeight=$(window).height();

        var file = getCurrentFilename();
        var distance = (file.length === 0) ? 400 : -500;

		if(scroll>=(viewportHeight + distance))
		{
		    //Page
			$('#header-container').css("top","0px");
			$('#header .navbar-default').css({"background-color":"rgba(255,255,255,0.4)", "border-bottom":"1px solid #EAEBEC"});
			$('#header a').css("color","#4B4B4B");
			$('#brand-image').attr("src","img/TF-LogoB.png");
            $('ul.vert').css("background-color", "rgba(255, 255, 255, 0.4)");
			toogleHover=true;
		}
		else
		{
		    //Header
			$('#header-container').css("top","40px");
			$('#header .navbar-default').css({"background-color":"rgba(0,0,0,0.4)", "border-bottom":"none"});
			$('#header a').css("color","#FFFFFF");
			$('#brand-image').attr("src","img/TF-LogoW.png");
            $('ul.vert').css("background-color", "rgba(0, 0, 0, 0.4)");
			toogleHover=false;
		}
	});
	$('#header a').hover(function(){
		if(toogleHover)
		{
			$(this).css("color","#000");
		} else {
            $(this).css("color","#6AD8D8");
        }
	},function(){
		if(toogleHover)
		{
			$(this).css("color","#4B4B4B");
		} else {
            $(this).css("color","#ffffff");
        }
	});

    $('li.v a').hover (function() {
        if (toogleHover) {
            $(this).css("color","#000");
		} else {
            $(this).css("color","#6AD8D8");
        }
    },function() {
        if (toogleHover) {
            $(this).css("color","#4B4B4B");
		} else {
            $(this).css("color","#ffffff");
        }
    });

});