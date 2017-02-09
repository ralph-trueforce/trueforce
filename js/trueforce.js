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
				text='&nbsp;<br><b>How users interact<br>with your brand</b><br><br>Solution Research<br>Usability research';
				break;
            case 3:
                text='&nbsp;<br><b>A design incorporating<br>your business goals</b><br><br>Journey Maps<br>Blueprints';
                break;
            case 2:
                text='&nbsp;<br><b>Look and feel</b><br><br>Wireframes<br>Prototypes';
                break;
            case 4:
                text='<b>Development, testing<br> and deployment</b><br> HTML5/CSS3<br> iOS<br>Android<br>Javascript programing';
                break;
            case 5:
                text='<br>&nbsp;<br>English<br>Spanish<br>German';
				break;
			default:
				text='First<br> Second<br> Third<br> Fourth<br> Fifth';
		}
		$('#center-paragraph').html(text);
	};

    var changeTextDevelopment=function(i)
    {
        var text=null;
        switch(i+1){
            case 1:
                text='<br>&nbsp;<br>UX<br>UI<br>Business Analysis';
                break;
            case 2:
                text='Front end<br>Back End<br>SOA<br>Mobile<br>Project Management<br>Product Management';
                break;
            case 3:
                text='<br>&nbsp;<br>White Box<br>Black Box<br> Performance Testing<br>';
                break;
            case 4:
                text='<br>&nbsp;<br>Deploy<br>Release<br>Support<br>';
                break;
            default:
                text='Front End<br>Back End<br>SOA<br>Project Management<br>Mobile';
        }
        $('#center-paragraph').html(text);
    };

    $('#tf-label1').css("color","#6ADBD8");
    $('#slice0').not(this).css("background","#6ADBD8");
    $('#internalslice1').css("background","#c3f1ef");

    if (document.location.pathname.indexOf('customer') !== -1) {
        $('#center-paragraph').html('&nbsp;<br><b>How users interact<br>with your brand</b><br><br>Solution Research<br>Usability research');
    } else {
        $('#center-paragraph').html('<br>&nbsp;<br>UX<br>UI<br>Business Analysis');
    }

	var hoverOrClick=function(){
		$(this).css("background","#6ADBD8");
		var listItem=$(this).parent();
		index=$(listItem).parent().children().index(listItem);
		var labelSelector='#tf-label'+(index+1).toString();
		//console.log(index+1);
		var innerSlice=$('.inner-ring li').eq(index).children();
		innerSlice.css("background","#c3f1ef");
		changeText(index);
		$(labelSelector).css("color","#6ADBD8");
		$('.ring > .slice > .slice-contents').not(this).css("background","#bec3c7");
		$('.inner').not(innerSlice).css("background","#e5e7e9");
		$('.tf-label').not(labelSelector).css("color","#000000");
	};

    var hoverOrClickDev=function(e){
        //console.log($(this));
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

    var hoverSlice=function(e) {
        $(this).children().css("background","#6ADBD8");
        var listItem=$(this);
        index=$(listItem).parent().children().index(listItem);
        var labelSelector='#tf-label'+(index+1).toString();
        var innerSlice=$('.inner-ring li').eq(index).children();
        innerSlice.css("background","#c3f1ef");
        $(labelSelector).css("color","#6ADBD8");
        changeTextDevelopment(index);

        $('.ringDev > .sliceDev > .slice-contents').not(this.firstChild).css("background","#bec3c7");
        $('.inner').not(innerSlice).css("background","#e5e7e9");
        $('.tf-label').not(labelSelector).css("color","#000000");
    };

    var hoverSliceFive=function(e) {
        $(this).children().css("background","#6ADBD8");
        var listItem=$(this);
        index=$(listItem).parent().children().index(listItem);
        var labelSelector='#tf-label'+(index+1).toString();
        var innerSlice=$('.inner-ring li').eq(index).children();
        innerSlice.css("background","#c3f1ef");
        $(labelSelector).css("color","#6ADBD8");
        changeText(index);

        $('.ringDev > .sliceDev > .slice-contents').not(this.firstChild).css("background","#bec3c7");
        $('.inner').not(innerSlice).css("background","#e5e7e9");
        $('.tf-label').not(labelSelector).css("color","#000000");
    };

    var hoverInnerSliceDev=function(e) {
        var listItem=$(this);
        index=$(listItem).parent().children().index(listItem);
        var choose = $( "#slice" + index );

        choose.css("background", "#6ADBD8");
        var labelSelector='#tf-label'+(index+1).toString();
        var innerSlice=$('.inner-ring li').eq(index).children();
        innerSlice.css("background","#c3f1ef");
        $(labelSelector).css("color","#6ADBD8");
        changeTextDevelopment(index);

        $('.ringDev > .sliceDev > .slice-contents').not(choose).css("background","#bec3c7");
        $('.inner').not(innerSlice).css("background","#e5e7e9");
        $('.tf-label').not(labelSelector).css("color","#000000");
    };

    var hoverInnerSlice=function(e) {
        var listItem=$(this);
        index=$(listItem).parent().children().index(listItem);
        var choose = $( "#slice" + index );

        choose.css("background", "#6ADBD8");
        var labelSelector='#tf-label'+(index+1).toString();
        var innerSlice=$('.inner-ring li').eq(index).children();
        innerSlice.css("background","#c3f1ef");
        $(labelSelector).css("color","#6ADBD8");
        changeText(index);

        $('.ring > .slice > .slice-contents').not(choose).css("background","#bec3c7");
        $('.inner').not(innerSlice).css("background","#e5e7e9");
        $('.tf-label').not(labelSelector).css("color","#000000");
    };

	$('.ring > .slice > .slice-contents').hover(hoverOrClick).click(hoverOrClick);
    $('.ring > .slice').hover(hoverSliceFive);
    $('.ringDev > .sliceDev > .slice-contents').hover(hoverOrClickDev).click(hoverOrClickDev);
    $('.ringDev > .sliceDev').hover(hoverSlice);
    $('.inner-ring > .sliceDev').hover(hoverInnerSliceDev);
    $('.inner-ring > .slice').hover(hoverInnerSlice);

	var toogleHover=false;

	$(document).scroll(function(event){
		var scroll=$(document).scrollTop();
		var viewportHeight=$(window).height();

        var file = getCurrentFilename();
        var distance = (file.length === 0) ? 400 : -500;

        var homeHeight = $('#tf-home').css('height');
        if (!homeHeight) {
            homeHeight = $('#tf-sales').css('height');
            if (!homeHeight) {
                homeHeight = $('#tf-dev').css('height');
                if (!homeHeight) {
                    homeHeight = $('#tf-about').css('height');
                }
            }
        }

        if (homeHeight) {
            var pictureDistance = Number(homeHeight.replace('px', ''));
            if (pictureDistance > viewportHeight + distance) {
                pictureDistance = viewportHeight + distance;
            }

            if (scroll >= pictureDistance - 28) {
                //Page
                $('#header-container').css("top", "0px");
                $('#header .navbar-default').css({
                    "background-color": "rgba(255,255,255,0.4)",
                    "border-bottom": "1px solid #EAEBEC"
                });
                $('#header a').css("color", "#4B4B4B");
                $('#brand-image').attr("src", "img/TF-LogoB.png");
                $('ul.vert').css("background-color", "rgba(255, 255, 255, 0.4)");
                toogleHover = true;
            }
            else {
                //Header
                $('#header-container').css("top", "40px");
                $('#header .navbar-default').css({"background-color": "rgba(0,0,0,0.4)", "border-bottom": "none"});
                $('#header a').css("color", "#FFFFFF");
                $('#brand-image').attr("src", "img/TF-LogoW.png");
                $('ul.vert').css("background-color", "rgba(0, 0, 0, 0.4)");
                toogleHover = false;
            }
        }

        var homeHeader = $('#tf-home').css('height');
        if (homeHeader) {
            var distanceHeader = Number(homeHeader.replace('px', ''));
            console.log(distanceHeader);
            var arrow = $('.down-arrow');
            console.log(scroll);

            if (scroll >= distanceHeader - 867) {
                console.log('no arrow');
                arrow.css('position', 'absolute');
                arrow.css('margin-bottom', '-560px');
                arrow.css('bottom', '0px');
            } else {
                console.log('arrow');
                arrow.css('position', 'fixed');
                arrow.css('margin-bottom', '0px');
                arrow.css('bottom', '40px');
            }
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