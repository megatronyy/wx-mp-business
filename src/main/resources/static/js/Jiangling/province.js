var ProvinceData = {
    JSonData:"",
    init: function (a, b, c) {
        ProvinceData.JSonData = ProvinceData.GetDealer();//eval('(' +  + ')');
        if (a) {
            ProvinceData.BindProvince(a);
        }
        if (a && b) {
            $('#' + a).change(function() {
                ProvinceData.BindCity(a, b);
                $(this).addClass('changed');
            });
        }
        if (a && b && c) {
            $('#' + b).change(function() {
                $(this).addClass('changed');
                ProvinceData.BindAgency(a, b, c);
            });
        }
    },
    BindProvince: function (a) {
        if (ProvinceData.JSonData && ProvinceData.JSonData.length > 0) {
            var b = document.getElementById(a);
            if (b && b.options) {
                b.options.length = 0;
                b.options[0] = new Option("选择省份", 0);
                for (var i = 0; i < ProvinceData.JSonData.length; i++) {
                    b.options[b.options.length] = new Option(ProvinceData.JSonData[i].dealer_name,
                        ProvinceData.JSonData[i].dealer_id);
                }
            }
        }
    },
    BindCity: function (a, b) {
        var c = document.getElementById(a);
        if (!c) { return }
        c = c.options[document.getElementById(a).selectedIndex];
        if (!c) { return }
        var d = c.value;
        //console.log(d);
        if (d && d > 0) {
            var e = document.getElementById(b);
            e.options.length = 0;
            e.options[e.options.length] = new Option("选择城市", 0);
            for (var i = 0; i < ProvinceData.JSonData.length; i++) {
                 if (ProvinceData.JSonData[i].dealer_id == d) {
                      for (var j = 0; j < ProvinceData.JSonData[i].city.length; j++) {
                          e.options[e.options.length] = new Option(ProvinceData.JSonData[i].city[j].dealer_name,
                              ProvinceData.JSonData[i].city[j].dealer_id);
                      }
                 }
            }
        } else if (d && d == 0) {
            var e = document.getElementById(b);
            e.options.length = 0;
            e.options[e.options.length] = new Option("选择城市", 0);
        }
    },
    BindAgency: function (a, b, c) {
        var d = document.getElementById(a);
        if (!d) { return }
        d = d.options[document.getElementById(a).selectedIndex];
        if (!d) { return }
        var e = d.value;
        var d = document.getElementById(b);
        if (!d) { return }
        d = d.options[document.getElementById(b).selectedIndex];
        if (!d) { return }
        var f = d.value;
        if (e && e > 0 && f && f > 0) {
            var g = document.getElementById(c);
            g.options.length = 0;
            g.options[g.options.length] = new Option("选择经销商", 0);
            for (var i = 0; i < ProvinceData.JSonData.length; i++) {
                 if (ProvinceData.JSonData[i].dealer_id == e) {
                     var h = ProvinceData.JSonData[i];
                     for (var j = 0; j < h.city.length; j++) {
                          if (h.city[j].dealer_id == f) {
                              var l = h.city[j];
                              for (var k = 0; k < l.dealer.length; k++) {
                                  g.options[g.options.length] =
                                      new Option(l.dealer[k].dealer_name, l.dealer[k].dealer_id);
                              }
                              return;
                          }
                     }
                 }
            }
        } else if ((e && e == 0) || (f && f == 0)) {
            var g = document.getElementById(c);
            if (g != null) {
                g.options.length = 0;
                g.options[g.options.length] = new Option("选择经销商", 0);
            }
        }
    },
    GetDealer: function() {
        var dealer = "";
        var serialId = $("#hdSerialId").val();
        var xyData = {
            SerialId: serialId,
        };
        $.ajax({
            url: '/SmartCloud/H5CommonShare/GetSaleDealerCityRela',
            type: 'post',
            dataType: "json",
            data: xyData,
            async: false,
            //contentType: "application/json; charset=utf-8",
            success: function (result) {
                if (result) {
                    dealer = result;
                }
            }
        });
        return dealer;
    }
};


/*
(function ($) {
    var n = "https://h5php.xingyuanauto.com/Flow/public/index.php/port/Aes/wx_token";
    $.post(n, function (e) {
        if (e.start == 0) {
            return alert(e.message);
        }
        function getUrl() {
            var a = window.location.href;
            var b = a.split('?')[0];
            var c = b.split('index.html')[0];
            var d = c + 'img/share.jpg';
            return d;
        }
        var f = '敢闯者 享自由 2018款海马S5强力上市';
        var g = window.location.href;
        var h = '2018款海马S5强力上市，万元首付轻松提新车，24期0息秒批秒贷！';
        var i = getUrl();
        console.log(i);
        var j = e.appId;
        var k = e.timestamp;
        var l = e.nonceStr;
        var m = e.signature;
        wx.config({
            debug: false,
            appId: j,
            timestamp: k,
            nonceStr: l,
            signature: m,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo']
        });
        wx.ready(function () {
            wx.onMenuShareTimeline({
                 title: f, link: g, desc: h, imgUrl: i, success: function () { }, cancel: function () { }
            });
            wx.onMenuShareAppMessage({
                 title: f, desc: h, link: g, imgUrl: i, type: '', dataUrl: '', success: function () { }, cancel: function () { }
            });
            wx.onMenuShareQQ({
                 title: f, desc: h, link: g, imgUrl: i, success: function () { }, cancel: function () { }
            });
            wx.onMenuShareQZone({
                 title: f, desc: h, link: g, imgUrl: i, success: function () { }, cancel: function () { }
            });
            wx.onMenuShareWeibo({
                 title: f, desc: h, link: g, imgUrl: i, success: function () { }, cancel: function () { }
            })
        })
    }, 'json')
})(jQuery);*/