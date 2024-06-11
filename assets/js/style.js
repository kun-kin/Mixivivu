$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-in").flatpickr({
        dateFormat: "d/m/Y",
        enableTime: true,
        minDate: "today"
    });
    $("#check-out").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".header-toggle").click(function() {
        $(this).toggleClass('active');
        $(".header-menu").toggleClass('opened');
    });


    $(".searchpage-sort-btn").click(function() {
        $(this).children('.searchpage-sort__dropdown').toggleClass('active');
    });
    $(document).mouseup(function(e) {
        if ($(e.target).closest(".searchpage-sort__dropdown.active").length ===
            0) {
            $('.searchpage-sort__dropdown').removeClass('active');
        }
    });


    $(".searchpage-sort-btn .searchpage-sort__dropdown-item").click(function() {
        var textItem = $(this).text().trim();
        $(this).parents('.searchpage-sort-btn').children('.button').children('span').text(textItem);
    });

    $(".tabs-header .tabs-item").click(function() {
        $(this).parent('.tabs-header').children('.tabs-item').removeClass('active');
        $(this).addClass('active');

    });


    $('.minus').click(function() {
        var $input = $(this).parent().find('.number');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('.number');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.yacht-detail-room__type #deleteall-roomcard').click(function() {
        var $input = $(this).parents('.yacht-detail-room__type').find('.number');
        $input.val(0);
        $input.change();
        return false;
    });


    $("input[name=typeflight]:radio").click(function() {
        var idV = $(this).attr('id');
        // alert(idV);
        if (idV == "roundtrip") {
            $('#departure-roundtrip').show();
        } else if (idV == "oneway") {
            $('#departure-roundtrip').hide();
        }
    });



    $(".flight-search-selectinput__button").click(function() {
        $(this).parent('.flight-search-selectinput').children('.flight-search-selectinput__dropdown-inner').show();
    });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".flight-search-selectinput__dropdown-inner").length ===
            0) {
            $('.flight-search-selectinput__dropdown-inner').hide();
        }
    });

    $(".btn-arrow-change").click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('span').text('Khứ hồi');
            $('#flight-search-arrival').show();
        } else {
            $(this).find('span').text('Một chiều');
            $('#flight-search-arrival').hide();
        }
    });


    $(".airfare-content-group-wrap .airfare-content-head").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent('.airfare-content-group-wrap').find('.airfare-content-detailrow').slideToggle(200);
    });


    $(".airfare-list .airfare-content-group-wrap .airfare-content-head .flight-content-selectbtn").click(function(e) {
        e.preventDefault();
        $(this).text(($(this).text() == 'Chọn') ? 'Chọn lại' : 'Chọn');
        $(this).parent('.airfare-content-head').toggleClass('selected');
        $(this).parents('.airfare-content-group').children('.airfare-content-group-wrap').toggle();
        $(this).parents('.airfare-content-group-wrap').show();
        $('.airfare-content-group-wrap').children('.airfare-content-head').toggleClass('active');
        $(this).parents('.airfare-list').children('.paginations').toggle();
    });


    $(".airfare-list .airfare-list-head").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('closed');
        $(this).parents('.airfare-list').children('.airfare-list-content').toggle();
    });


    $(".room-picker .input-group").click(function(e) {
        e.preventDefault();
        $(this).parents('.room-picker').children('.room-picker__dropdown').slideToggle();
    });

    $(".room-picker__item .rpk-plus").click(function() {
        var valItem = $(this).parents('.room-picker__item').children('.room-picker__item-value');
        valItem.val(parseInt(valItem.val()) + 1);
        valItem.change();
        return false;
    });
    $(".room-picker__item .rpk-minus").click(function() {
        var valItem = $(this).parents('.room-picker__item').children('.room-picker__item-value');
        var count = parseInt(valItem.val() - 1);
        count = count < 0 ? 0 : count;
        valItem.val(count);
        valItem.change();
        return false;
    });

    $(".room-picker__dropdown .room-picker__action-btn").click(function(e) {
        e.preventDefault();
        $(this).parents('.room-picker__dropdown').hide();
        var adultNum = $('#adult-num').val();
        var childrenNum = $('#children-num').val();
        $('#total-people-num').val(adultNum + ' người lớn' + ' - ' + childrenNum + ' trẻ em');
        $('#total-people-num').change();
        return false;
    });
    $(document).mouseup(function(e) {
        if ($(e.target).closest(".room-picker__dropdown").length ===
            0) {
            $('.room-picker__dropdown').slideUp();
        }
    });





    $(".collapse-head").click(function() {
        $(this).children('.faqs-header').toggleClass('active');
        $(this).next().slideToggle();

    });

});