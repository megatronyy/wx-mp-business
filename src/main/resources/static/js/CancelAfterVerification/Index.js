
window.URL = window.URL || window.webkitURL;
var fileElem = document.getElementById("fileElem"),
    fileList = $('.input-list .check');


function handleFiles(obj) {
    var files = obj.files,
        file = files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("请确保文件为图像类型");
        return false;
    }
    img = new Image();

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        // base64
        img.src = this.result;
        fileList.find('input').val(this.result);

    }


    img.onload = function (e) {

        fileList.find('img').remove();

        fileList.append(img);
        $('.check-wrapper').addClass('heightAuto');
    }
}
function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
$(function () {

    $("#submit").click(function () {
        var UserName = Trim($("#UserName").val());
        var UserPhone = Trim($("#UserPhone").val());
        var VinID = Trim($("#VinID").val());
        var DealPrice = Trim($("#DealPrice").val());
        var InvoiceUrl = Trim($("#InvoiceUrl").val());

        if (UserName == "" || UserName == null) {
            alert("用户名称不可为空");
            return false;
        }
        if (UserPhone == "" || UserPhone == null) {
            alert("手机号不可为空");
            return false;
        }
        if (VinID == "" || VinID == null) {
            alert("车架号不可为空");
            return false;
        }
        if (DealPrice == "" || DealPrice == null) {
            alert("成交价不可为空");
            return false;
        }
        if (InvoiceUrl == "" || InvoiceUrl == null) {
            alert("购车发票不可为空");
            return false;
        }
        if (UserPhone.length>11) {
            alert("手机号不可超过11位");
            return false;
        }
        if (VinID.length > 17) {
            alert("车架号不可超过17位");
            return false;
        }
        var data = new Object();
        data.InvoiceUrl = InvoiceUrl;
        data.UserName = UserName;
        data.UserPhone = UserPhone;
        data.VinID = VinID;
        data.DealPrice = DealPrice;
        data.CouponPrice = CouponPrice;
        data.SourceID = 3;
        data.DealerId = DealerId;
        data.McOrderId = McOrderId;
        data.InfoType = 1;
        data.InfoId = InfoId;
        data.OpenId = OpenId;
        data.OpUserName = OpUserName;
        data.VerifiedId = VerifiedId;
        data.UserId = UserId;
        $.showPreloader('正在提交');
        $.ajax({
            type: "post",
            url: _webRoot + "/CancelAfterVerification/SaveVerification",
            data: {
                data: JSON.stringify(data)
            },
            dataType: "json",
            success: function (data) {
                $.hidePreloader();
                if (data.success) {
                    window.location = _webRoot + "/CancelAfterVerification/SuccessVerification";
                }
                else {
                    alert(data.msg);
                }
            }
        });
    })
})