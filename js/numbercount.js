var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.title')) && !isVisible) {
        yearCount();
        personCount();
        percentCount();
        isVisible = true;
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}


function yearCount() {
    var memberCountConTxt = 2015;

    $({ val: 0 }).animate({ val: memberCountConTxt }, {
        duration: 1800,
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $("#year").text(num + "년");
        },
        complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $("#year").text(num + "년");
        }
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }
}

function personCount() {
    var memberCountConTxt = 54;

    $({ val: 0 }).animate({ val: memberCountConTxt }, {
        duration: 1800,
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $("#person").text(num + "명");
        },
        complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $("#person").text(num + "명");
        }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }
}

function percentCount() {
    var memberCountConTxt = 99;

    $({ val: 0 }).animate({ val: memberCountConTxt }, {
        duration: 1800,
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $("#percent").text(num + "%");
        },
        complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $("#percent").text(num + "%");
        }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }
}