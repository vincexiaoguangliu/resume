$(document).ready(function() {
    var cover = $(".cover"),
        figure = $("figure"),
        imgWraper = $(".img-wraper"),
        intro = $(".intro"),
        fillJS = $(".fill-js"),
        fillVue = $(".fill-vue"),
        fillRA = $(".fill-ra"),
        fillPS = $(".fill-ps"),
        fillGit = $(".fill-git"),
        fillGulp = $(".fill-gulp"),
        fillBS = $(".fill-bs"),
        fillJQ = $(".fill-jq"),
        fillWP = $(".fill-wp"),
        fillND = $(".fill-node"),
        navBar = $("nav"),
        navAbout = $(".nav-about"),
        navProject = $(".nav-project");
    var addClassFn = function(key, value) {
        key.css("width", value)
    };
    addClassFn(fillJS, "75%");
    addClassFn(fillVue, "65%");
    addClassFn(fillRA, "28%");
    addClassFn(fillPS, "70%");
    addClassFn(fillGit, "50%");
    addClassFn(fillGulp, "75%");
    addClassFn(fillBS, "85%");
    addClassFn(fillWP, "55%");
    addClassFn(fillJQ, "35%");
    addClassFn(fillND, "15%");
    figure.hover(function() {
        var _this = $(this);
        _this.css("z-index", "60");
        _this.find(".intro").css("display", "block");
        _this.find(".img-wraper").addClass("img-wraper-hover");
        cover.fadeIn(100)
    }, function() {
        var _this = $(this);
        _this.css("z-index", "auto");
        _this.find(".intro").css("display", "none");
        _this.find(".img-wraper").removeClass("img-wraper-hover", 1000);
        cover.fadeOut(100)
    });
    $(window).scroll(function() {
        if (navBar.offset().top > $(".header-container").height()) {
            navAbout.removeClass("nav-active");
            navProject.addClass("nav-active")
        } else {
            navAbout.addClass("nav-active");
            navProject.removeClass("nav-active")
        }
    })
});
