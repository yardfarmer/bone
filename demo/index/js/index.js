var qkStatic = 'http://static.qiakr.com/';
function replaceWebp(){
	// 获取slider下的所有图片
	// 如果支持webp，则替换成webp图片，如果不支持则替换成普通图片
// 	?imageMogr2/format/webp  七牛图片处理
	var QNWebp = 'imageMogr2/format/webp';
	var $imgs = $('#flexSliderBox .hasWebp');
	if(Modernizr.webp.alpha){
		$imgs.map(function(i,v){
			var $this = $(this);
			var url = $this.data('url');
			var wepUrl = url+(url.indexOf('?')>-1 ? '&': '?')+QNWebp;
			$this.attr('src', wepUrl);
		});
	}else{
		$imgs.map(function(i,v){
			var $this = $(this);
			var url = $this.data('url');
			$this.attr('src', url);
		});
	}
}
// replaceWebp();

	$(window).load(function() { 
		$("#preloader").delay(100).fadeOut("slow");
		$("#load").delay(100).fadeOut("slow");
	});

// 菜单的滚动监听
$('body').scrollspy({target:'#headerNavbar'});

// header 的滚动监听
$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	}else{
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});

$('.navbar-nav li a.scroll-to').on('click', function(e){
	var $this = $(this);
	$('html,body').stop().animate({
		scrollTop:$($this.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	e.preventDefault();
})

// LOGO墙生成
var brandImgs = [];
var tNum = 1;
while(tNum<=32){
	brandImgs.push(tNum);
	tNum++;
}
var x=0, y=0;
brandImgs = brandImgs.map(function(v, i){
	return '<li class="brand-logo">'+v+'</li>';
});
// $('#brandBox').html(brandImgs.join(''));
window.scrollReveal = new scrollReveal({reset: true});
// 相册滚动
var $sliderBox = $('#flexSliderBox');
var $slideItems = $sliderBox.find('.slides>li');
$slideItems.length>1?$sliderBox.flexslider() : $slideItems.css('display','block');

// 视差插件初始化
$.stellar();