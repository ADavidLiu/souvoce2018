$(document).ready(function () {
    
    var $headerBtn = $(".header__btn");
    var $headerMenu = $(".header__menu");

    $headerBtn.click(function () {
        $headerMenu.slideToggle("fast");
    });

    if ($(".section-products").length > 0) {
        var $productHeader = $(".section-products__item-header");
        $productHeader.click(function() {
            var $this = $(this);
            var $btn = $this.children(".section-products__item-btn");
            $btn.toggleClass("section-products__item-btn--active");
            $this.parent().children(".section-products__item-content").slideToggle("fast");
        });
    }

    if ($(".section-groups--tables").length > 0) {
        var $tableToggle = $(".section-groups__toggle");
        $tableToggle.click(function() {
            var $this = $(this);
            $this.parents(".section-groups__item").find(".table--remaining").slideToggle("fast");
        });
    }
    
});