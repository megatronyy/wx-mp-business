
/**计算rem**/
(function (win) {
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid,
        hasRem = true;
    hasZoom = true;
    designWidth = 750;
    function refresh() {
        var width = docEl.getBoundingClientRect().width;
        if (hasRem) {
            var rem = width / 10;
            docEl.style.fontSize = rem + "px";
            remCalc.rem = rem;
            var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
            if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
                var remScaled = rem * rem / actualSize;
                docEl.style.fontSize = remScaled + "px";
            }
        }
        if (hasZoom) {
            var style = document.getElementById('y_style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'y_style';
            }
            style.innerHTML = '._z{zoom:' + width / designWidth + '}';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
    function dbcRefresh() {
        clearTimeout(tid);
        tid = setTimeout(refresh, 100);
    }
    win.addEventListener("resize", function () {
        dbcRefresh()
    }, false);
    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            dbcRefresh()
        }
    }, false);
    refresh();
    if (hasRem) {
        remCalc.refresh = refresh;
        remCalc.rem2px = function (d) {
            var val = parseFloat(d) / this.rem;
            if (typeof d === "string" && d.match(/px$/)) {
                val += "rem";
            }
            return val
        };
        win.remCalc = remCalc;
    }
})(window);




$(function () {
    //初始化城市及经销商信息
    ProvinceData.init('ddlProvince', 'ddlCity', 'agency');
    //提交订单 
    SaveInfo.init();
    var swiper01 = new Swiper('.sw-container-01', {
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function (swiper) {
        },
        onSlideChangeStart: function (swiper) {

            if (swiper.activeIndex == 5) {
                $('.btn-swbox01 p').removeClass('down').addClass('up');
                $('.btn-swbox01 p').eq(0).addClass('down');
            } else {
                $('.btn-swbox01 p').removeClass('down').addClass('up');
                $('.btn-swbox01 p').eq(swiper.activeIndex - 1).addClass('down');
            }

        }
    });
    var swiper02 = new Swiper('.sw-container-02', {
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function (swiper) {
        },
        onSlideChangeStart: function (swiper) {
            if (swiper.activeIndex == 5) {
                $('.btn-swbox02 p').removeClass('down').addClass('up');
                $('.btn-swbox02 p').eq(0).addClass('down');
            } else {
                $('.btn-swbox02 p').removeClass('down').addClass('up');
                $('.btn-swbox02 p').eq(swiper.activeIndex - 1).addClass('down');
            }
        }
    });
    var swiperHead = new Swiper('.sw-head', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,

        onInit: function (swiper) {
            //					
        },
        onSlideChangeEnd: function (swiper) {
        }
    });

    $('.btn-swbox01').on('click', 'p',function (e) {
        var index = parseInt($(this).data('value'));
        swiper01.slideTo(index);
    });
    $('.btn-swbox02').on('click', 'p',function(e) {
            var index = parseInt($(this).data('value'));
            swiper02.slideTo(index);
        });

});

/*用户注册留资*/
var SaveInfo = {
    username: "",//name
    sex: "0",//sex
    phone: "",//mobile   
    province: 0,
    city: 0,
    angency: "",//经销商信息
    source: '24',//线下活动-江铃驭胜汽车

    init: function () {
        SaveInfo.updateView();
    },
    updateView: function () {
        // SaveInfo.inputReg();
        SaveInfo.submit();
        $('select').on('touchstart', function () {
            $(this).find('option[value="0"]').attr('disabled', 'disabled');
        });
        $('select').change(function () {
            $(this).addClass('changed');
        });
    },
    inputReg: function () {
        $('input[name="username"]').blur(function () {
            var val = $(this).val();
            var reg = /^[a-zA-Z\u4E00-\u9FA5]*$/;
            //console.log(reg.test(val));
            if (val != "" && val != "test" && val != "空白" && val != "Unknown" && val != "未知" && val != "未告知" && this.validity.valid && reg.test(val)) {
                $(this).attr('placeholder', '姓名');
            } else {
                $(this).val('');
                $(this).attr('placeholder', '请您正确输入姓名');
            }
        });


        $('input[name="phone"]').blur(function () {
            var reg = /^1[34578]\d{9}$/;
            var val = $(this).val();
            if (isNaN(parseFloat(val))) {
                $(this).val('');
                $(this).attr('placeholder', '请您输入手机号');
            } else {
                if (reg.test(val)) {
                    $(this).attr('placeholder', '手机号');

                } else {
                    $(this).val('');
                    $(this).attr('placeholder', '请您正确输入手机号');
                }
            }

        });

    },

    submit: function () {
        $('#btn-userInfo').on('click', function (e) {
            e.preventDefault();           
            if (clickReg()) {
                $(".spiner-fixed").show();
                SaveInfo.username = $('input[name="username"]').val();
                SaveInfo.phone = $('input[name="phone"]').val();
                SaveInfo.province = $('select[name="ddlProvince"] option:selected').val();
                SaveInfo.city = $('select[name="ddlCity"] option:selected').val();
                SaveInfo.agency = $('select[name="agency"] option:selected').val();
                SaveInfo.agencyTxt = $('select[name="agency"] option:selected').html();

                var serialId = $("#hdSerialId").val();
                var yearType = $("#hdYearType").val();
                // 发起Ajax调用
                var xyData = {
                    name: SaveInfo.username,
                    mobile: SaveInfo.phone,
                    dealerName: SaveInfo.agencyTxt,
                    dealerId: SaveInfo.agency,
                    type: 0, //新车
                    cityId: SaveInfo.city,
                    source: SaveInfo.source,
                    sendUrl: window.location.href,
                    dasAccountId: dasAccountId,
                    SerialId: serialId,
                    YearType: yearType,
                };
                //console.log(xyData);
                $.ajax({
                    type: 'post',
                    url: '/SmartCloud/H5CommonShare/SetOrder',
                    data: xyData,
                    dataType: 'json',
                    success: function (msg) {
                        $(".spiner-fixed").hide();
                        if (msg.code == 1) {                            
                            showalert("报名成功,厂家将在3天内与您取得电话联系");
                            $('.btn-userInfo').removeClass('btn-move');
                            $('select option[value="0"]').attr('disabled', false);
                            $('#userForm')[0].reset();
                            $('select').removeClass('changed');
                        }
                        else {
                            showalert(msg.Msg);
                        }
                    }
                });
            }
        });
    }
};


function clickReg() {
    //名字不为空        
    var name = $("input[name='username']").val();
    if (name == "" || name == "姓名") {
        showalert("请输入姓名");
        //$("input[name='name']").focus();
        return false;
    }

    if (!name.match(/^([\u4E00-\u9FA5]{2,4}$)|(^[a-zA-Z]{1,8}$)/)) {
        showalert("抱歉，姓名需要输入2-4位汉字或八个英文字母");
        return false;
    }

    //手机号验证
    var phone = $("input[name='phone']").val();
    if (phone == "" || phone == "手机号") {
        showalert("手机号码不能为空！");
        // $("input[name='phone']").focus();
        return false;
    }

    if (!phone.match(/^(((1[3|5|7|8][0-9]{1}))+\d{8})$/)) {
        showalert("手机号码格式不正确！");
        //$("input[name='phone']").focus();
        return false;
    }

    //省，必选
    var province = $("#ddlProvince").val();
    //console.log(province);
    if (province == "0") {
        showalert("请选择省份");
        // $("select[name='provinceId']").focus();
        return false;
    }

    //市，必选
    var city = $("#ddlCity").val();
    if (city == "0") {
        showalert("请选择城市");
        // $("select[name='cityId']").focus();
        return false;
    }
    //经销商，必选
    var dealer = $("#agency").val();
    if (dealer == "0") {
        showalert("请选择经销商");
        //$("select[name='dealer']").focus();
        return false;
    }
    return true;
}
