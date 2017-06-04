$(document).ready(function () {
  var cover = $(".cover"),
      figure = $("figure"),
      imgWraper = $(".img-wraper"),
      intro = $(".intro"),
      fillJS = $(".fill-js"),
      fillHTML = $(".fill-html"),
      fillCSS = $(".fill-css"),
      fillPS = $(".fill-ps"),
      fillGit = $(".fill-git"),
      fillGulp = $(".fill-gulp"),
      fillBS = $(".fill-bs"),
      navBar = $("nav"),
      navAbout = $(".nav-about"),
      navProject = $(".nav-project");

  // 技能进度条动画
  var addClassFn = function (key, value) {
    key.css('width', value);
  };

  addClassFn(fillJS, '70%');
  addClassFn(fillHTML, '85%');
  addClassFn(fillCSS, '85%');
  addClassFn(fillPS, '90%');
  addClassFn(fillGit, '75%');
  addClassFn(fillGulp, '80%');
  addClassFn(fillBS, '90%');

  // 作品明细图片展示动画
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

  // nav随窗口滚动文字高亮变化
  $(window).scroll(function () {
    if (navBar.offset().top > 720) {
      navAbout.removeClass("nav-active");
      navProject.addClass("nav-active");
    } else {
      navAbout.addClass("nav-active");
      navProject.removeClass("nav-active");
    };
  });
});