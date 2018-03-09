
/**计算rem**/
(function(win){
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid,
        hasRem = true;
   var hasZoom = true;
   var designWidth = 750;
    function refresh(){
        var width = docEl.getBoundingClientRect().width;
        if(hasRem){
            var rem = width/10;
            docEl.style.fontSize = rem + "px";
            remCalc.rem = rem;
            var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
            if(actualSize!== rem && actualSize>0 && Math.abs(actualSize-rem)>1){
                var remScaled = rem*rem/actualSize;
                docEl.style.fontSize = remScaled + "px";
            }
        }
        if(hasZoom){
            var style = document.getElementById('y_style');
            if(!style){
                style = document.createElement('style');
                style.id = 'y_style';
            }
            style.innerHTML = '._z{zoom:'+ width/designWidth + '}';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
    function dbcRefresh(){
        clearTimeout(tid);
        tid = setTimeout(refresh,100);
    }
    win.addEventListener("resize",function() {
        dbcRefresh();
    },false);
    win.addEventListener("pageshow",function(e){
        if(e.persisted) {
            dbcRefresh();
        }
    },false);
    refresh();
    if(hasRem){
        remCalc.refresh = refresh;
        remCalc.rem2px = function(d){
            var val = parseFloat(d)/this.rem;
            if(typeof d==="string" && d.match(/px$/)){
                val+="rem";
            }
            return val;
        };
        win.remCalc = remCalc;
    }
})(window);



/*用户注册留资*/
var SaveInfo = {
    username:"",//name
    sex:"0",//sex
    phone:"",//mobile   
    province:0,
    city:0,
    angency:"",//经销商信息
    source: '22',//线下活动-海马汽车
    //cartime:null,
   // more_name:'海马',
   // more_start:8,
    //chart:'user_eleven',//必传状态码
    //cartype:'未选择',//car_type   
    init:function(){
        //function GetQueryString(name){
        //    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        //    var r = window.location.search.substr(1).match(reg);
        //    if(r!=null&&r!=undefined)return  unescape(r[2]); return null;
        //}
        //SaveInfo.source = GetQueryString('source')==null?'bbs':GetQueryString('source');
        SaveInfo.updateView();
    },
    updateView:function(){
        SaveInfo.inputReg();
        SaveInfo.submit();
        $('select').on('touchstart',function(){
            $(this).find('option[value="0"]').attr('disabled','disabled');
        });
        $('select').change(function() {
            $(this).addClass('changed');
        });
    },
    inputReg:function(){
        $('input[name="username"]').blur(function(){
            var val = $(this).val();
            var reg =/^[a-zA-Z\u4E00-\u9FA5]*$/;
            //console.log(reg.test(val));
            if(val!=""&&val!="test"&&val!="空白"&&val!="Unknown"&&val!="未知"&&val!="未告知"&&this.validity.valid&&reg.test(val)){
                $(this).attr('placeholder','姓名');
            }else{
                $(this).val('');
                $(this).attr('placeholder','请您正确输入姓名');
            }
        });


        $('input[name="phone"]').blur(function(){
            var reg = /^1[34578]\d{9}$/;
            var val = $(this).val();
            if(isNaN(parseFloat(val))){
                $(this).val('');
                $(this).attr('placeholder','请您输入手机号');
            }else{
                if(reg.test(val)){
                    $(this).attr('placeholder','手机号');

                }else{
                    $(this).val('');
                    $(this).attr('placeholder','请您正确输入手机号');
                }
            }

        });

    },
    clickReg:function(){
        var usernameReg = false, phoneReg = false, provinceReg = false, cityReg = false, agency = false;
        var inputUsername = document.getElementById('username');
        if(inputUsername.validity.valid){
            usernameReg = true;
        }else{
            usernameReg = false;
        }
        var reg = /^1[34578]\d{9}$/;
        if(reg.test($('input[name="phone"]').val())){
            phoneReg = true;
        }else{
            phoneReg = false;
        }
        function selectReg(selectName){
            var val = $('select[name='+selectName+'] option:selected').val();
            var reg;
            if(val&&val!=0){
                reg = true;
            }else{
                reg = false;
            }
            return reg;

        }
        provinceReg = selectReg('ddlProvince');
        cityReg = selectReg('ddlCity');
        agency = selectReg('agency');
        var total = usernameReg && phoneReg & provinceReg & cityReg & agency;
        // console.log(usernameReg,phoneReg,provinceReg,cityReg,agency);
        //console.log(total);
        return total;
        //return true;
    },
    submit:function(){
        $('#btn-userInfo').on('click',function(e){
            e.preventDefault();
            $(".alert").click(function(){
                $(".alertBox").fadeOut(300);
                $('.btn-userInfo').addClass('btn-move');
            });
            if(SaveInfo.clickReg()) {
                $(".spiner-fixed").show();
                SaveInfo.username = $('input[name="username"]').val();
                SaveInfo.phone = $('input[name="phone"]').val();
                SaveInfo.province = $('select[name="ddlProvince"] option:selected').val();
                SaveInfo.city = $('select[name="ddlCity"] option:selected').val();
                SaveInfo.agency = $('select[name="agency"] option:selected').val();
                SaveInfo.agencyTxt = $('select[name="agency"] option:selected').html();


                // 发起Ajax调用
                var xyData = {
                    name: SaveInfo.username,
                    mobile: SaveInfo.phone,
                    dealerName: SaveInfo.agencyTxt,
                    dealerId: SaveInfo.agency,
                    type: 0,//新车
                    cityId: SaveInfo.city,
                    source: SaveInfo.source,
                    sendUrl: window.location.href,
                    dasAccountId: dasAccountId
                    //sex:SaveInfo.sex,
                    //SaveInfo.province + ',' +SaveInfo.city + ',' + SaveInfo.agency,
                    //car_type:SaveInfo.cartype,
                    //buy_time: SaveInfo.buytime,
                    //chart:SaveInfo.chart,                    
                    //more_name:SaveInfo.more_name,
                    //more_start:SaveInfo.more_start
            };
                //console.log(xyData);
                $.ajax({
                    type:'post',
                    url: '/SmartCloud/H5CommonShare/SetOrder_old',
                    data:xyData,
                    dataType:'json',
                    success:function(msg){
                        //console.log(msg);
                        if (msg.code == 1) {
                            $(".spiner-fixed").hide();
                            $(".success").show();                            
                            $('.btn-userInfo').removeClass('btn-move');
                            $('select option[value="0"]').attr('disabled',false);
                            $('#userForm')[0].reset();
                            $('select').removeClass('changed');
                         }
                        //else if(msg.code==1005){//重复提交
                        //    $(".repaceagain").show();
                        //    $('select option[value="0"]').attr('disabled',false);
                        //    $('.btn-userInfo').removeClass('btn-move');
                        //    $('#userForm')[0].reset();
                        //}
                        else {
                            $(".error").show();
                            $(".spiner-fixed").hide();
                        }
                    }
                });
            }else{
                $(".error").show();               
            }

        });
    }
};

$(function () {
    //初始化城市及经销商信息
    ProvinceData.init('ddlProvince', 'ddlCity', 'agency');
    //提交订单 
    SaveInfo.init();

    var swiper01 = new Swiper('.sw-01', {
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            //					swiper.activeIndex=1;
        },
        onSlideChangeEnd: function (swiper) {
            //					console.log(swiper.activeIndex);
        }
    });
    var swiper0101 = new Swiper('.sw-01-01', {
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,
        prevButton: '.sw-head-prev',
        nextButton: '.sw-head-next',
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        },
        onSlideChangeEnd: function (swiper) {
            //					console.log(swiper.activeIndex);
        }
    });
    swiper01.params.control = swiper0101;//需要在Swiper2初始化后，Swiper1控制Swiper2
    swiper0101.params.control = swiper01;//需要在Swiper1初始化后，Swiper2控制Swiper1
    var swiper02 = new Swiper('.sw-02', {
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,

        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        },
        onSlideChangeEnd: function (swiper) {
        }
    });
    var swiper0201 = new Swiper('.sw-02-01', {
        direction: 'horizontal',
        autoplay: 3000,
        speed: 500,
        loop: true,
        prevButton: '.sw-head-prev',
        nextButton: '.sw-head-next',
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        },
        onSlideChangeEnd: function (swiper) {
        }
    });
    swiper02.params.control = swiper0201;//需要在Swiper2初始化后，Swiper1控制Swiper2
    swiper0201.params.control = swiper02;//需要在Swiper1初始化后，Swiper2控制Swiper1
});
