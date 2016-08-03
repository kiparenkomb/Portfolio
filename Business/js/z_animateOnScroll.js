//Last changes: October 20, 2014

(function ($) {
    'use strict';

    $.fn.animateOnScroll = function (options) {
        var settings = $.extend({
            timeout: 100,
            offsetTop: 0.95,
            offsetBottom: 0.05,
            scrollDownEffect: 'fadeInUp',
            scrollUpEffect: 'fadeInDown',
            minBrowserWidth: 641,
            once: true
        }, options);

        var $this = this;
        var oldScrollTop = -100;
        var loaded = false;

        var methods = {
            removeEffects: function ($target) {
                $target
                    .removeClass(settings.scrollDownEffect)
                    .removeClass(settings.scrollUpEffect);

                if (!document.documentElement.classList.contains("ie9")) return;

                $target.css({'opacity': '0'});
            },
            addEffect: function ($target, i, e1, e2) {
                if (!$target.hasClass(e1)) {
                    setTimeout(function () {
                        $target.addClass(e2);
                    }, settings.timeout * i);
                }
            },
//
            scrollDownEx: function (index, top) {
                var $target = $(this);
                var targetTop = $target.offset().top;

                if (targetTop < top) {
                    methods.addEffect($target, index, settings.scrollUpEffect, settings.scrollDownEffect);
                } else {
                    if (!settings.once) methods.removeEffects($target);
                }
            },
            scrollUpEx: function (index, bottom) {
                var $target = $(this),
                    targetBottom = $target.offset().top + $target.height();

                if (targetBottom > bottom) {
                    methods.addEffect($target, index, settings.scrollDownEffect, settings.scrollUpEffect);
                } else
                    methods.removeEffects($target);
            },
//
            scrollDown: function ($elem, scrollTop) {
                var top = scrollTop + Math.floor(window.innerHeight * settings.offsetTop);

                $elem.each(function (index) {
                    methods.scrollDownEx.call(this, index, top);
                });
            },
            scrollUp: function ($elem, scrollTop) {
                var bottom = scrollTop + Math.floor(window.innerHeight * settings.offsetBottom);

                $($elem.get().reverse()).each(function (index) {
                    methods.scrollUpEx.call(this, index, bottom);
                });
            },
            scroll: function ($elem) {
                if (window.innerWidth < settings.minBrowserWidth) return;
                if (document.body.classList.contains('no-anim')) return;

                var newScrollTop = $(window).scrollTop();

                if (oldScrollTop < newScrollTop) {
                    methods.scrollDown($elem, newScrollTop);
                } else if (oldScrollTop > newScrollTop) {
                    if (!settings.once) {
                        methods.scrollUp($elem, newScrollTop);
                    }
                } else {
                    if (!loaded) {
                        methods.scrollDown($elem, newScrollTop);
                        loaded = true;
                    }
                }

                oldScrollTop = newScrollTop;
            }
        };

        $(window)
            .load(function () {
                methods.scroll($this);
            })
            .scroll(function () {
                methods.scroll($this);
            });

        return this;
    };
})(jQuery);
