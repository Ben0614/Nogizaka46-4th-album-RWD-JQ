// 控制漢堡選單
let menuOpened = false;
// 控制語言選單
let langOpened = false;

const loading = document.querySelector('.loading')
const loading_gif = document.querySelector('.loading .gif')

// 控制旋轉gif
setTimeout(function () {
    loading_gif.style.display = 'none'
}, 1500)

// 控制load
setTimeout(function () {
    loading.style.left = '-100%'
    loading.style.opacity = '.5'
}, 2000)


const banner_pic = document.querySelector('.banner .pic')
const banner_content = document.querySelector('.banner .text-pic .content')
const angel = document.querySelector('.angel')

// 讓banner::after (黑幕)滑出畫面
banner_pic.classList.add('change')

// 文字顯示 opacity 變 1 
setTimeout(function () {
    banner_content.style.opacity = 1
    banner_content.style.transition = '1s'
}, 4200)

// 天使滑入  
setTimeout(function () {
    angel.style.right = 0
    angel.style.transition = '2s'
}, 4000)

const lang_selector_img = document.querySelector('.lang-selector img')
const lang_selector_ul = document.querySelector('.lang-selector ul')
const lang_selector_li = document.querySelectorAll('.lang-selector li')

// 點擊語言選單，就讓ul顯示
lang_selector_img.addEventListener('click', function () {
    langOpened = !langOpened
    if (langOpened) {
        lang_selector_ul.style.height = lang_selector_ul.scrollHeight + 'px'
        lang_selector_ul.style.transition = '.5s'
    } else {
        lang_selector_ul.style.height = 0
        lang_selector_ul.style.transition = '.5s'
    }

})

// 去除兄弟元素圓點
function siblingsCircle(item) {
    var p = item.parentNode.children;
    for (var i = 0; i < p.length; i++) {
        if (p[i] !== item) {
            p[i].firstElementChild.style.display = 'none'
        }
    }
}

// 點擊li，就讓當前的小圓點顯示，其他li的小圓點隱藏
lang_selector_li.forEach((li) => {
    li.addEventListener('click', function () {
        this.firstElementChild.style.display = 'block'
        siblingsCircle(li)
    })
})

const hum = document.querySelector('.hum')
const hum_list = document.querySelector('.hum-list')
const top_line = document.querySelector('.top-line')
const center_line = document.querySelector('.center-line')
const bottom_line = document.querySelector('.bottom-line')

// 漢堡選單
hum.addEventListener('click', function () {
    menuOpened = !menuOpened;
    if (menuOpened) {
        // 顯示list
        hum_list.style.opacity = 1
        hum_list.style.zIndex = 100
        // 線條角度改變 中線隱藏
        // 讓位置相同在旋轉
        top_line.style.top = '40%'
        top_line.style.background = '#ccc'
        top_line.style.transform = 'rotate(-45deg)'
        top_line.style.transition = '.5s'
        center_line.style.display = 'none'
        bottom_line.style.top = '40%'
        bottom_line.style.background = '#ccc'
        bottom_line.style.transform = 'rotate(45deg)'
        bottom_line.style.transition = '.5s'
        document.body.style.overflow = 'hidden'
    } else {
        // 隱藏list
        hum_list.style.opacity = 0
        hum_list.style.zIndex = -1
        // 線條回復
        top_line.style.top = '15%'
        top_line.style.background = '#ccc'
        top_line.style.transform = 'rotate(0)'
        top_line.style.transition = '.5s'
        center_line.style.display = 'block'
        bottom_line.style.top = '65%'
        bottom_line.style.background = '#ccc'
        bottom_line.style.transform = 'rotate(0)'
        bottom_line.style.transition = '.5s'
        document.body.style.overflow = 'auto'
    }
})

const header = document.querySelector('header')
const banner = document.querySelector('.banner')
const slick_pic = document.querySelectorAll('.slick .item .pic')
const album_wrap_item = document.querySelectorAll('.album-wrap .item')
const privilege_title = document.querySelector('.privilege .title')
const privilege_photo = document.querySelector('.privilege .photo')
const privilege_real_date = document.querySelector('.privilege .real-date')
const privilege_exchange_coupon = document.querySelector('.privilege .exchange-coupon')
const gallery = document.querySelector('.gallery')
const movie = document.querySelector('.movie')
const link_banner_item = document.querySelectorAll('.link-banner .item')
const sns = document.querySelector('footer .sns')
const copyright = document.querySelector('footer .copyright')
const remodal = document.querySelector('.remodal')
const close_btn = document.querySelector('.close-btn')
const yt_iframe = document.querySelector('.yt iframe')

// 桌機時， header和hum添加isHide
if (window.innerWidth >= 992) {
    header.classList.add('isHide')
    hum.classList.add('isHide')
}

// 監聽滾動
window.addEventListener('scroll', function () { // 螢幕寬度 >= 992
    if (window.innerWidth >= 992) {
        // 桌機
        // 被捲去的頭部 >= banner的高度
        if (document.documentElement.scrollTop >= banner.offsetHeight) {
            // 讓header和hum顯示
            header.classList.add('isShow')
            header.classList.remove('isHide')
            hum.classList.add('isShow')
            hum.classList.remove('isHide')
        } else {
            // 讓header和hum隱藏
            header.classList.add('isHide')
            header.classList.remove('isShow')
            hum.classList.add('isHide')
            hum.classList.remove('isShow')
        }
    }

    // 被捲去的頭部 + 螢幕可視範圍的高度 >= .slick .item .pic 距離頂端的高度
    slick_pic.forEach((pic) => {
        if ((document.documentElement.scrollTop + window.innerHeight) >= pic.offsetTop) {
            // 不透明度調到1顯示
            pic.style.opacity = 1
            pic.style.transition = '2s'
        } else {
            // 不透明度調回0
            pic.style.opacity = 0
            pic.style.transition = '1s'
        }
    })

    // 被捲去的頭部 + 螢幕可視範圍的高度 >= .album-wrap .item 距離頂端的高度
    album_wrap_item.forEach((item) =>{
        if ((document.documentElement.scrollTop + window.innerHeight) >= item.offsetTop) {
            // 不透明度調到1顯示
            item.style.opacity = 1
            item.style.transition = '2s'
        } else {
            // 不透明度調回0
            item.style.opacity = 0
            item.style.transition = '1s'
        }
    })

    // 如果觸碰到就刷淡
    album_wrap_item.forEach((item) =>{
        item.addEventListener('mouseenter', function () {
            item.style.opacity = .7
            item.style.transition = '.3s'
        })
        item.addEventListener('mouseleave', function () {
            item.style.opacity = 1
            item.style.transition = '.3s'
        })

    })

    // privile 從外滑入
    if ((document.documentElement.scrollTop + window.innerHeight) >= privilege_title.offsetTop) {
        privilege_title.style.transform = 'translate(0)'
        privilege_title.style.transition = '1s'
    } else {
        privilege_title.style.transform = 'translate(100%)'
        privilege_title.style.transition = '1s'
    }
    if ((document.documentElement.scrollTop + window.innerHeight) >= privilege_photo.offsetTop) {
        privilege_photo.style.transform = 'translate(0)'
        privilege_photo.style.transition = '1s'
    } else {
        privilege_photo.style.transform = 'translate(-150%)'
        privilege_photo.style.transition = '1s'
    }
    if ((document.documentElement.scrollTop + window.innerHeight) >= privilege_real_date.offsetTop) {
        privilege_real_date.style.transform = 'translate(0)'
        privilege_real_date.style.transition = '1s'
    } else {
        privilege_real_date.style.transform = 'translate(300%)'
        privilege_real_date.style.transition = '1s'
    }
    if ((document.documentElement.scrollTop + window.innerHeight) >= privilege_exchange_coupon.offsetTop) {
        privilege_exchange_coupon.style.transform = 'translate(0)'
        privilege_exchange_coupon.style.transition = '1s'
    } else {
        privilege_exchange_coupon.style.transform = 'translate(-450%)'
        privilege_exchange_coupon.style.transition = '1s'
    }
    // gallery 淡入
    if ((document.documentElement.scrollTop + window.innerHeight) >= gallery.offsetTop) {
        gallery.style.opacity = 1
        gallery.style.transition = '.5s'
    } else {
        gallery.style.opacity = 0
        gallery.style.transition = '.5s'
    }
    // movie 淡入
    if ((document.documentElement.scrollTop + window.innerHeight) >= movie.offsetTop) {
        movie.style.opacity = 1
        movie.style.transition = '1s'
    } else {
        movie.style.opacity = 0
        movie.style.transition = '1s'
    }
    // link_banner_item
    link_banner_item.forEach((item)=> {
        if ((document.documentElement.scrollTop + window.innerHeight) >= item.offsetTop) {
            // change讓w100%
            item.classList.add('change')
            // 文字淡入
            item.firstElementChild.style.opacity = 1
            item.firstElementChild.style.transition = '1s'
            item.firstElementChild.style.transitionDelay = '.6s'
        } else {
            // 移除change
            item.classList.remove('change')
            // 文字淡出
            item.firstElementChild.style.opacity = 0
            item.firstElementChild.style.transition = '.1s'
        }
    })

    if ((document.documentElement.scrollTop + window.innerHeight) >= sns.offsetTop) {
        // sns icon淡入
        sns.style.opacity = 1
        sns.style.transition = '.5s'
        copyright.style.opacity = 1
        copyright.style.transition = '.5s'
    } else {
        // sns icon淡出
        sns.style.opacity = 0
        sns.style.transition = '.5s'
        copyright.style.opacity = 0
        copyright.style.transition = '.5s'
    }

    // 點擊movie開啟remodal
    movie.addEventListener('click', () => {
        // 點擊movie開啟remodal
        remodal.style.display = 'flex'
        // 重設yt連結內容
        yt_iframe.setAttribute('src', 'https://www.youtube.com/embed/hccLVfv8yjc')
    })
    // 關閉視窗
    close_btn.addEventListener('click', () => {

        remodal.style.display = 'none'
        // 將yt連結內容改為空，避免影片持續播放
        yt_iframe.setAttribute('src', '')
    })


})


$(function () {
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

    // 盡量不要用jquery直接修改css，用class方式添加或移除

    // let menuOpened = false;

    // 頁面載入中
    // 往左消失，delay 2s
    // 移動時刷淡
    // $('.loading').css({
    //     'left': '-100%',
    //     'transition': '1s',
    //     'transition-delay': '2s',
    //     'opacity': '.5'
    // });

    // 旋轉gif，要比loading早消失
    // $('.loading .gif').delay(1500).fadeOut();

    // 讓banner::after (黑幕)滑出畫面
    // $('.banner .pic').addClass('change');

    // 文字顯示 opacity 變 1 
    // $('.banner .text-pic .content').css({
    //     'opacity': '1',
    //     'transition': '1s',
    //     'transition-delay': '4.2s'
    // });

    // 天使滑入
    // $('.angel').delay(2000).css({
    //     'right': '0',
    //     'transition': '2s',
    //     'transition-delay': '2s'
    // });

    // 點擊語言選單，就讓ul顯示
    // $('.lang-selector img').click(function () {
    //     $('.lang-selector ul').stop().slideToggle(300);
    // })

    // 點擊li，就讓當前的小圓點顯示，其他li的小圓點隱藏
    // $('.lang-selector li').click(function () {
    //     $(this).find('div').show();
    //     $(this).siblings().find('div').hide();
    // })

    // 漢堡選單
    /*$('.hum').on('click', function () {
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
    })*/

    // 桌機時， header和hum添加isHide
    // if ($(window).width() >= 992) {
    //     $('header,.hum').addClass('isHide')
    // }

    // 被捲去的頂部
    // $(window).scroll(function () {
        // 螢幕寬度 >= 992
        // if ($(window).width() >= 992) {
        // 桌機
        // 被捲去的頭部 >= banner的高度
        // if ($(document).scrollTop() >= $('.banner').height()) {
        // 讓header和hum顯示
        // $('header,.hum').addClass('isShow').removeClass('isHide')
        // } else {
        // 讓header和hum隱藏
        //         $('header,.hum').addClass('isHide').removeClass('isShow')
        //     }
        // }

        // 被捲去的頭部 + 螢幕可視範圍的高度 >= .slick .item .pic 距離頂端的高度
        // if (($(document).scrollTop() + $(window).height()) >= $('.slick .item .pic').offset().top) {
        //     $('.slick .item .pic').css({
        // 不透明度調到1顯示
        //         'opacity': '1',
        //         'transition': '2s'
        //     });
        // } else {
        //     $('.slick .item .pic').css({
        // 不透明度調回0
        //         'opacity': '0',
        //         'transition': '1s'
        //     });
        // }

        // 被捲去的頭部 + 螢幕可視範圍的高度 >= .album-wrap .item 距離頂端的高度
        // if ($(document).scrollTop() + $(window).height() >= $('.album-wrap .item').offset().top) {
        // 不透明度從0調到1
        //     $('.album-wrap .item').css({
        //         'opacity': '1',
        //         'transition': '2s'
        //     });
        // } else {
        //     $('.album-wrap .item').css({
        //         'opacity': '0',
        //         'transition': '1s'
        //     });
        // }

        // 如果觸碰到就刷淡
        // $('.album-wrap .item').hover(function () {
        //     $(this).css({
        //         'opacity': '.7',
        //         'transition': '.3s'
        //     });
        // }, function () {
        //     $(this).css({
        //         'opacity': '1',
        //         'transition': '.3s'
        //     });
        // })



        // if (($(document).scrollTop() + $(window).height()) >= $('.privilege .title').offset().top) {
        //     $('.privilege .title').css({
        //         'transform': 'translate(0)',
        //         'transition': '1s'
        //     });
        // } else {
        //     $('.privilege .title').css({
        //         'transform': 'translate(100%)',
        //         'transition': '1s'
        //     });
        // }

        // if (($(document).scrollTop() + $(window).height()) >= $('.privilege .photo').offset().top) {
        //     $('.privilege .photo').css({
        // 從外面移回來
        //         'transform': 'translate(0)',
        //         'transition': '1s'
        //     });
        // } else {
        //     $('.privilege .photo').css({
        // 移出去
        //         'transform': 'translate(-150%)',
        //         'transition': '1s'
        //     });
        // }

        // if (($(document).scrollTop() + $(window).height()) >= $('.privilege .real-date').offset().top) {
        //     $('.privilege .real-date').css({
        // 從外面移回來
        //         'transform': 'translate(0)',
        //         'transition': '1s'
        //     });
        // } else {
        //     $('.privilege .real-date').css({
        // 移出去
        //         'transform': 'translate(300%)',
        //         'transition': '1s'
        //     });
        // }
        // if (($(document).scrollTop() + $(window).height()) >= $('.privilege .exchange-coupon').offset().top) {
        //     $('.privilege .exchange-coupon').css({
        // 從外面移回來
        //         'transform': 'translate(0)',
        //         'transition': '1s'
        //     });
        // } else {
        //     $('.privilege .exchange-coupon').css({
        // 移出去
        //         'transform': 'translate(-450%)',
        //         'transition': '1s'
        //     });
        // }

        // if ($(document).scrollTop() + $(window).height() >= $('.gallery').offset().top) {
        // 淡入
        //     $('.gallery').stop().fadeIn(500);
        // } else {
        // 淡出
        //     $('.gallery').stop().fadeOut(500);
        // }

        // if ($(document).scrollTop() + $(window).height() >= $('.movie').offset().top) {
        // 淡入
        //     $('.movie').stop().fadeIn(500);
        // } else {
        // 淡出
        //     $('.movie').stop().fadeOut(500);
        // }

        // $('.link-banner .item').each(function () {
        //     if ($(document).scrollTop() + $(window).height() >= $(this).offset().top) {
        // change讓w100%
        // $(this).addClass('change');
        // 文字淡入
        //     $(this).find('.content').css({
        //         'opacity': '1',
        //         'transition': '1s',
        //         'transition-delay': '.6s'
        //     })
        // } else {
        // 移除change
        // $(this).removeClass('change');
        // 文字淡出
        //         $(this).find('.content').css({
        //             'opacity': '0',
        //             'transition': '.1s'
        //         })
        //     }
        // })


        // if (($(document).scrollTop() + $(window).height()) >= $('footer .sns').offset().top) {
        // sns icon淡入
        //     $('footer .sns').stop().fadeIn(500);
        //     $('footer .copyright').stop().fadeIn(500);
        // } else {
        // sns icon淡出
        //         $('footer .sns').stop().fadeOut(500);
        //         $('footer .copyright').stop().fadeOut(500);
        //     }

        // })

        // 點擊movie開啟remodal
        // $('.movie').on('click', function () {
        //     $('.remodal').css('display', 'flex');
        // 重設yt連結內容
        //     $('.yt iframe').attr('src', 'https://www.youtube.com/embed/hccLVfv8yjc')
        // })

        // 關閉視窗
        // $('.close-btn').on('click', function () {
        //     $('.remodal').css('display', 'none');
        // 將yt連結內容改為空，避免影片持續播放
        //     $('.yt iframe').attr('src', '')
    // })




})