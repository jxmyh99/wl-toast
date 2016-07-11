(function($) {
    'use strict'

    function show(html, className) {
        className = className || "";
        $('.modal-mask').length === 0 ? $("<div class='modal-mask toast'></div>").appendTo(document.body) : $('.modal-mask').removeClass('dialog').addClass('toast');
        var tpl = '<div class="modal-box ' + className + '"><div class="toast-main">' + html + '</div></div>';
        $('.modal-mask').show().addClass('mask-visible');
        $(tpl).appendTo(document.body).show().removeClass('modal-out').addClass('modal-in');
    }

    function hide(callback) {
        $('.modal-mask').remove();
        $('.modal-box').addClass('modal-out').on('transitionend webkitTransitionEnd', function() {
            var $this = $(this);
            $this.remove();
            callback && callback($this);
        })
    }

    $.toast = function(text, style, callback) {
        if (typeof style == 'function') {
            callback = style;
        }
        var className;
        switch (style) {
            case 'cancel':
                // 取消操作
                className = 'toast-cancel';
                break;
            case 'stop':
                // 禁止操作
                className = 'toast-forbidden';
                break;
            case 'loading':
                // 加载中
                className = 'toast-loading';
                break;
            case 'error':
                //错误
                className = 'toast-error';
                break;
            case 'ok':
                // 成功
                className = 'toast-ok';
                break;
            default:
                // 默认为文本
                className = 'toast-text';
                break;
        }

        if (text === 'loading' || style == 'loading') {
            className = 'toast-loading';
            var html = '<div class="toast-loading-main">';
            for (var i = 0; i < 12; i++) {
                html += '<div class="toast-loading-leaf toast-loading-leaf_' + i + '"></div>';
            }
            html += '</div>';
            html += '<span>' + (text === 'loading' ? "数据加载中" : text) + '</span>';
            show(html, className);
            if (callback) callback();
            return;
        } else {
            show('<i class="icon-toast"></i> <span>' + (text || '已经完成') + '</span>', className);
            setTimeout(function() {
                hide(callback);
            }, 2500);
        }
    }
    $.hideloading = function(callback) {
        hide(callback);
    }
}($))
