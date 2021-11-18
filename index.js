$(function () {
    // 盡量不要用jquery直接修改css，用class方式添加或移除

    let menuOpened = false;

    // 頁面載入中
    // 往左消失，delay 2s
    // 移動時刷淡
    $('.loading').css({
        'left': '-100%',
        'transition': '1s',
        'transition-delay': '2s',
        'opacity': '.5'
    });

    // 旋轉gif，要比loading早消失
    $('.loading .gif').delay(1500).fadeOut();

    // 讓banner::after (黑幕)滑出畫面
    $('.banner .pic').addClass('change');

    // 文字顯示 opacity 變 1 
    $('.banner .text-pic .content').css({
        'opacity': '1',
        'transition': '1s',
        'transition-delay': '4.2s'
    });

    // 天使滑入
    $('.angel').delay(2000).css({
        'right': '0',
        'transition': '2s',
        'transition-delay': '2s'
    });

    // 點擊語言選單，就讓ul顯示
    $('.lang-selector img').click(function () {
        $('.lang-selector ul').stop().slideToggle(300);
    })

    // 點擊li，就讓當前的小圓點顯示，其他li的小圓點隱藏
    $('.lang-selector li').click(function () {
        $(this).find('div').show();
        $(this).siblings().find('div').hide();
    })

    // 輪播
    $('.slick').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // 漢堡選單
    $('.hum').on('click', function () {
        menuOpened = !menuOpened;

        if (menuOpened == true) {
            $('.hum-list').stop().fadeIn();

            // 線條角度改變 中線隱藏
            // 讓位置相同在旋轉
            $('.top-line').css({
                'top': '40%',
                'background': '#ccc',
                'transform': 'rotate(-45deg)',
                'transition': '.5s'
            })
            $('.center-line').hide();
            $('.bottom-line').css({
                'top': '40%',
                'background': '#ccc',
                'transform': 'rotate(45deg)',
                'transition': '.5s'
            })

            // body添加overflow:hidden 讓滾動條隱藏
            $('body').css('overflow', 'hidden');

        } else {
            $('.hum-list').stop().fadeOut();

            $('.top-line').css({
                'top': '15%',
                'background': '#ccc',
                'transform': 'rotate(0)',
                'transition': '.5s'
            })
            $('.center-line').show();
            $('.bottom-line').css({
                'top': '65%',
                'background': '#ccc',
                'transform': 'rotate(0)',
                'transition': '.5s'
            })

            $('body').css('overflow', 'auto');
        }
    })

    // 桌機時， header和hum添加isHide
    if ($(window).width() >= 992) {
        $('header,.hum').addClass('isHide')
    }

    // 被捲去的頂部
    $(window).scroll(function () {
        // 螢幕寬度 >= 992
        if ($(window).width() >= 992) {
            // 桌機
            // 被捲去的頭部 >= banner的高度
            if ($(document).scrollTop() >= $('.banner').height()) {
                // 讓header和hum顯示
                $('header,.hum').addClass('isShow').removeClass('isHide')
            } else {
                // 讓header和hum隱藏
                $('header,.hum').addClass('isHide').removeClass('isShow')
            }
        }

        // 被捲去的頭部 + 螢幕可視範圍的高度 >= .slick .item .pic 距離頂端的高度
        if (($(document).scrollTop() + $(window).height()) >= $('.slick .item .pic').offset().top) {
            $('.slick .item .pic').css({
                // 不透明度調到1顯示
                'opacity': '1',
                'transition': '2s'
            });
        } else {
            $('.slick .item .pic').css({
                // 不透明度調回0
                'opacity': '0',
                'transition': '1s'
            });
        }

        // 被捲去的頭部 + 螢幕可視範圍的高度 >= .album-wrap .item 距離頂端的高度
        if ($(document).scrollTop() + $(window).height() >= $('.album-wrap .item').offset().top) {
            // 不透明度從0調到1
            $('.album-wrap .item').css({
                'opacity': '1',
                'transition': '2s'
            });
        } else {
            $('.album-wrap .item').css({
                'opacity': '0',
                'transition': '1s'
            });
        }

        // 如果觸碰到就刷淡
        $('.album-wrap .item').hover(function () {
            $(this).css({
                'opacity': '.7',
                'transition': '.3s'
            });
        }, function () {
            $(this).css({
                'opacity': '1',
                'transition': '.3s'
            });
        })



        if (($(document).scrollTop() + $(window).height()) >= $('.privilege .title').offset().top) {
            $('.privilege .title').css({
                'transform': 'translate(0)',
                'transition': '1s'
            });
        } else {
            $('.privilege .title').css({
                'transform': 'translate(100%)',
                'transition': '1s'
            });
        }

        if (($(document).scrollTop() + $(window).height()) >= $('.privilege .photo').offset().top) {
            $('.privilege .photo').css({
                // 從外面移回來
                'transform': 'translate(0)',
                'transition': '1s'
            });
        } else {
            $('.privilege .photo').css({
                // 移出去
                'transform': 'translate(-150%)',
                'transition': '1s'
            });
        }

        if (($(document).scrollTop() + $(window).height()) >= $('.privilege .real-date').offset().top) {
            $('.privilege .real-date').css({
                // 從外面移回來
                'transform': 'translate(0)',
                'transition': '1s'
            });
        } else {
            $('.privilege .real-date').css({
                // 移出去
                'transform': 'translate(300%)',
                'transition': '1s'
            });
        }
        if (($(document).scrollTop() + $(window).height()) >= $('.privilege .exchange-coupon').offset().top) {
            $('.privilege .exchange-coupon').css({
                // 從外面移回來
                'transform': 'translate(0)',
                'transition': '1s'
            });
        } else {
            $('.privilege .exchange-coupon').css({
                // 移出去
                'transform': 'translate(-450%)',
                'transition': '1s'
            });
        }

        if ($(document).scrollTop() + $(window).height() >= $('.gallery').offset().top) {
            // 淡入
            $('.gallery').stop().fadeIn(500);
        } else {
            // 淡出
            $('.gallery').stop().fadeOut(500);
        }

        if ($(document).scrollTop() + $(window).height() >= $('.movie').offset().top) {
            // 淡入
            $('.movie').stop().fadeIn(500);
        } else {
            // 淡出
            $('.movie').stop().fadeOut(500);
        }

        $('.link-banner .item').each(function () {
            if ($(document).scrollTop() + $(window).height() >= $(this).offset().top) {
                // change讓w100%
                $(this).addClass('change');
                // 文字淡入
                $(this).find('.content').css({
                    'opacity': '1',
                    'transition': '1s',
                    'transition-delay': '.6s'
                })
            } else {
                // 移除change
                $(this).removeClass('change');
                // 文字淡出
                $(this).find('.content').css({
                    'opacity': '0',
                    'transition': '.1s'
                })
            }
        })


        if (($(document).scrollTop() + $(window).height()) >= $('footer .sns').offset().top) {
            // sns icon淡入
            $('footer .sns').stop().fadeIn(500);
            $('footer .copyright').stop().fadeIn(500);
        } else {
            // sns icon淡出
            $('footer .sns').stop().fadeOut(500);
            $('footer .copyright').stop().fadeOut(500);
        }

    })

    // 點擊movie開啟remodal
    $('.movie').on('click', function () {
        $('.remodal').css('display', 'flex');
        // 重設yt連結內容
        $('.yt iframe').attr('src', 'https://www.youtube.com/embed/hccLVfv8yjc')
    })

    // 關閉視窗
    $('.close-btn').on('click', function () {
        $('.remodal').css('display', 'none');
        // 將yt連結內容改為空，避免影片持續播放
        $('.yt iframe').attr('src', '')
    })




})