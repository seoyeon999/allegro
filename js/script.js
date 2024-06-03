//header background
$(document).ready(function () {
    var jbOffset = $('header').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 700) {//여기 지정된 길이 이후부터 적용됩니다
            $('header').addClass("header_scroll");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('header').removeClass("header_scroll");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
});


//hamburger button
$(function () {
    $("#slide-open").click(function () {
        if ($("#burgur").hasClass("on")) {
            $("#burgur").removeClass("on");
            $("#slide").removeClass("on");
        } else {
            $("#burgur").addClass("on");
            $("#slide").addClass("on");
        }
    });
    $("#slide ul li a").click(function () {
        if ($("#burgur").hasClass("on")) {
            $("#burgur").removeClass("on");
            $("#slide").removeClass("on");
        } else {
            $("#burgur").addClass("on");
            $("#slide").addClass("on");
        }
    });
});

//move to <a>
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);//움직이는 시간 조정
                return false;
            }
        }
    });
});

//cursor
document.addEventListener("mousemove", e => {
    gsap.to(".text", {
        x: e.clientX,
        y: e.clientY,
        stagger: { // wrap advanced options in an object
            each: -0.02,
            ease: "power2.inOut",
        }
    })
})

//purchase
$(function () {
    $(".purchase").mouseup(function () {
        alert("로그인이 필요한 서비스입니다.");
        location.href = 'login.html';
    });
});
