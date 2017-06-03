$(document).ready(function () {
	const cover = $(".cover");
	const figure = $("figure");
	const imgWraper = $(".img-wraper");
	const intro = $(".intro");

	figure.hover(function () {
		let _this = $(this);
		_this.css('z-index', '60');
		_this.find('.intro').css('display', 'block');
		_this.find('.img-wraper').addClass('img-wraper-hover');
		cover.fadeIn(100);
	}, function () {
		let _this = $(this);
		_this.css('z-index', 'auto');
		_this.find('.intro').css('display', 'none');
		_this.find('.img-wraper').removeClass('img-wraper-hover', 1000);
		cover.fadeOut(100);
	});
});