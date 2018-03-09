$(function () {
    var sliderState = true;
    $.init();
    $('.button-fill').on('click', function () {
        if ($("#name").val() == "") {
            $.toast('请填写用户名');
            return;
        }
        if ($("#pwd").val() == "") {
            $.toast('请填写密码');
            return;
        }
        if (sliderState) {
            $.toast('请拖动滑块验证');
            return;
        }
        var pwd = $("#pwd").val();
        var url = $("#l_url").val();
        url = url.replace("_username", $("#name").val()).replace("_password", pwd);
        location.href = url;

    });

    var verifyCode = function (elem) {
        if (!$(elem).length) return;

        var $slider = $(elem),
          slider = $slider[0],
          startTime,
          endTime;
        $slider.html('拖动滑块验证');
        noUiSlider.create(slider, {
            start: 0,
            padding: 4,
            connect: [true, false],
            range: {
                'min': [0],
                'max': [104]
            }
        });

        $slider.find('.noUi-connect').html('<span>智慧创新机</span>');

        slider.noUiSlider.on('start', function (values, handle) {
            startTime = new Date();
        });

        slider.noUiSlider.on('update', function (values, handle) {
            if (values[handle] == 100) {
                $slider.find('.noUi-handle')
                  .css({
                      "background-image": "url(" + _ResourceUrl + "/xy/Xing/img/verify-available.png)",
                  });
                slider.setAttribute('disabled', true);
                endTime = new Date();
                $('.button-fill').removeAttr('disabled').removeClass('btn-disable');
                console.log(endTime.getTime() - startTime.getTime());
                sliderState = false;
            }
        });

        slider.noUiSlider.on('change', function (values, handle) {
            if (values[handle] < 100) {
                slider.noUiSlider.set(0);
            }
        });

        slider.noUiSlider.on('end', function (values, handle) {

        });
    };

    verifyCode('#slider-range');

});