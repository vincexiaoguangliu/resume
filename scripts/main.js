$(document).ready(function () {
	var cover = $(".cover");
	var figure = $("figure");
	var imgWraper = $(".img-wraper");
	var intro = $(".intro");

	figure.hover(function () {
		var _this = $(this);
		_this.css('z-index', '60');
		_this.find('.intro').css('display', 'block');
		_this.find('.img-wraper').addClass('img-wraper-hover');
		cover.fadeIn(100);
	}, function () {
		var _this = $(this);
		_this.css('z-index', 'auto');
		_this.find('.intro').css('display', 'none');
		_this.find('.img-wraper').removeClass('img-wraper-hover', 1000);
		cover.fadeOut(100);
	});
});