/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    window.Content = {
        colorpickerEvent: function () {
            $('#colorpickerEvent').colorpicker().on('changeColor', function(e) {
                toastr.info('颜色值已改变');
                e.stopPropagation();
            });
        },
        run: function () {
            this.colorpickerEvent();
        }
    };

})(document, window, jQuery);
