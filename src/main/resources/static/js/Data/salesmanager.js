var jmChart = window.jmChart;

var cknodate = 0;
var liData = {
    manager_client: $('#manager-client-data').find('li'),
    manager_thread: $('#manager-thread-data').find('li'),
    manager_salesCard: $('#manager-salesCard-data').find('li'),
    manager_car: $('#manager-car-data').find('li'),
    manager_cloud: $('#manager-cloud-data').find('li')
}
var ss_star = 0;
var ss_end = 6;
// 数据首页
$(function () {

    $("#beforeday").click(function () {
        var my = $(this);
        my.siblings().removeClass('active');
        my.addClass('active');
        loadBeforeDay();
    });
    $('#thismonth').click(function () {
        var my = $(this);
        my.siblings().removeClass('active');
        my.addClass('active');
        loadThisMonth(3);//3为本月
    });
    $('#lastmonth').click(function () {
        var my = $(this);
        my.siblings().removeClass('active');
        my.addClass('active');
        loadThisMonth(4);//4为上月
    });
    $('#CustomerData').click(function () {
        var my = $(this);
        var date = $("#hiddate").val()
        var webroot=$("#hidwebroot").val();
        var dealerid=$("#hidDealerId").val();
        var dateObj = getTypeDate(date);
        window.location.href = webroot + '/Data/CustomerData?dealerid=' + dealerid + '&StDate=' + dateObj.StartTime + '&EdDate=' + dateObj.EndTime
     
    });
    $('#OpportunityData').click(function () {
        var my = $(this);
        var date = $("#hiddate").val()
        var webroot = $("#hidwebroot").val();
        var dealerid = $("#hidDealerId").val();
        var dateObj = getTypeDate(date);
        window.location.href = webroot + '/Data/BusinessOpportunityData?dealerid=' + dealerid + '&StDate=' + dateObj.StartTime + '&EdDate=' + dateObj.EndTime

    });
    $('#SalesCardData').click(function () {
        var my = $(this);
        var date = $("#hiddate").val()
        var webroot = $("#hidwebroot").val();
        var dealerid = $("#hidDealerId").val();
        var dateObj = getTypeDate(date);
        window.location.href = webroot + '/Data/SalesCardData?dealerid=' + dealerid + '&StDate=' + dateObj.StartTime + '&EdDate=' + dateObj.EndTime

    });
    // 首次加载
    loadBeforeDay();
});

// 加载前一天数据
function loadBeforeDay() {
    var dateObj = getTypeDate(1); // 获取上一天时间
    $('.date').text(formatDateShort(dateObj.StartTime) + '统计');
    dataHide();
    cknodate = 0;
    $("#hiddate").val(1)
    var paramsData = {};
    paramsData.StartDate = dateObj.StartTime;
    paramsData.EndDate = dateObj.EndTime;
    paramsData.DealerId = $('#hidDealerId').val();
 
    paramsData.AccountId = 0;

    // 销售经理-前一天-客户
    if ($('#manager-client').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetCustomerBarData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Sum > 0)
                        cknodate += 1;
                    var manager = {
                        ele: 'manager-client',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(manager);
                }
            }
        });
    }
    // 销售经理-前一天-线索
    if ($('#manager-thread').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetClueBarData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Sum > 0)
                        cknodate += 1;
                    var manager = {
                        ele: 'manager-thread',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(manager);
                }
            }
        });
    }
    // 销售经理-前一天-销售名片
    if ($('#manager-salesCard').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetSalesCardBarData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Sum > 0)
                        cknodate += 1;
                    var manager = {
                        ele: 'manager-salesCard',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(manager);
                }
            }
        });
    }
    // 销售经理-前一天-慧车通
    if ($('#manager-car').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetHctBarData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Sum > 0)
                        cknodate += 1;
                    var manager = {
                        ele: 'manager-car',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(manager);
                }
            }
        });
    }
    // 销售经理-前一天-慧销云
    if ($('#manager-cloud').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetHxyBarData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Sum > 0)
                        cknodate += 1;
                    var manager = {
                        ele: 'manager-cloud',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(manager);
                }
            }
        });
    }
}

// 加载本月/上月数据
// obj表示类型，3为本月，4为上月
function loadThisMonth(obj) {
    var dateObj = getTypeDate(obj); // 获取时间
    $('.date').text(formatDateShort(dateObj.StartTime) + '至' + formatDateShort(dateObj.EndTime) + '统计');
    dataShow();
    cknodate = 0;
    $("#hiddate").val(obj)
    var paramsData = {};
    paramsData.StartDate = dateObj.StartTime;
    paramsData.EndDate = dateObj.EndTime;
    paramsData.DealerId = $('#hidDealerId').val();
    paramsData.AccountId =0;

    // 销售经理-本月/上月-客户
    if ($('#manager-client').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetCustomerLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count != null && model.Count.length > 0)
                        cknodate += 1;
                    if (liData.manager_client != undefined
                        && liData.manager_client != null
                        && liData.manager_client.length >= 2
                        && model.AllCount != null) {
                        $(liData.manager_client[0]).find('div:first-child').text(model.AllCount[0]);
                        $(liData.manager_client[1]).find('div:first-child').text(model.AllCount[1]);
                    }
                    GetTimeSlot(model.Date)
                    var manager = {
                        ele: 'manager-client',
                        data: {
                            xName: '日期',
                            yName: '单位/人',
                            legendName: model.LegendName,
                            date: model.Date,
                            count: model.Count,
                            startValue: ss_star,
                            endValue: ss_end
                        }
                    }
                    jmChart.thread(manager);
                }
            }
        });
    }
    // 销售经理-本月/上月-线索
    if ($('#manager-thread').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetClueLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count != null && model.Count.length > 0)
                        cknodate += 1;
                    if (liData.manager_thread != undefined
                        && liData.manager_thread != null
                        && liData.manager_thread.length >= 3
                        && model.AllCount != null) {
                        $(liData.manager_thread[0]).find('div:first-child').text(model.AllCount[0]);
                        $(liData.manager_thread[1]).find('div:first-child').text(model.AllCount[1]);
                        $(liData.manager_thread[2]).find('div:first-child').text(model.AllCount[2]);
                    } 
                    GetTimeSlot(model.Date)
                    var manager = {
                        ele: 'manager-thread',
                        data: {
                            xName: '日期',
                            yName: '单位/条',
                            legendName: model.LegendName,
                            date: model.Date,
                            count: model.Count,
                            startValue: ss_star,
                            endValue: ss_end
                        }
                    }
                    jmChart.thread(manager);
                }
            }
        });
    }
    // 销售经理-本月/上月-销售名片
    if ($('#manager-salesCard').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetSalesCardLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count != null && model.Count.length > 0)
                        cknodate += 1;
                    if (liData.manager_salesCard != undefined
                        && liData.manager_salesCard != null
                        && liData.manager_salesCard.length >= 3
                        && model.AllCount != null) {
                        $(liData.manager_salesCard[0]).find('div:first-child').text(model.AllCount[0]);
                        $(liData.manager_salesCard[1]).find('div:first-child').text(model.AllCount[1]);
                        $(liData.manager_salesCard[2]).find('div:first-child').text(model.AllCount[2]);
                    }
                    GetTimeSlot(model.Date)
                    var manager = {
                        ele: 'manager-salesCard',
                        data: {
                            xName: '日期',
                            yName: '单位/条',
                            legendName: model.LegendName,
                            date: model.Date,
                            count: model.Count,
                            startValue: ss_star,
                            endValue: ss_end
                        }
                    }
                    jmChart.thread(manager);
                }
            }
        });
    }
    // 销售经理-本月/上月-惠车通
    if ($('#manager-car').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetHctLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count != null && model.Count.length > 0)
                        cknodate += 1;
                    if (liData.manager_car != undefined
                        && liData.manager_car != null
                        && liData.manager_car.length >= 3
                        && model.AllCount != null) {
                        $(liData.manager_car[0]).find('div:first-child').text(model.AllCount[0]);
                        $(liData.manager_car[1]).find('div:first-child').text(model.AllCount[1]);
                        $(liData.manager_car[2]).find('div:first-child').text(model.AllCount[2]);
                    }
                    GetTimeSlot(model.Date)
                    var manager = {
                        ele: 'manager-car',
                        data: {
                            xName: '日期',
                            yName: '单位/条',
                            legendName: model.LegendName,
                            date: model.Date,
                            count: model.Count,
                            startValue: ss_star,
                            endValue: ss_end
                        }
                    }
                    jmChart.thread(manager);
                }
            }
        });
    }
    // 销售经理-本月/上月-惠销云
    if ($('#manager-cloud').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetHxyLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count != null && model.Count.length > 0)
                        cknodate += 1;
                    if (liData.manager_cloud != undefined
                        && liData.manager_cloud != null
                        && liData.manager_cloud.length >= 3
                        && model.AllCount != null) {
                        $(liData.manager_cloud[0]).find('div:first-child').text(model.AllCount[0]);
                        $(liData.manager_cloud[1]).find('div:first-child').text(model.AllCount[1]);
                        $(liData.manager_cloud[2]).find('div:first-child').text(model.AllCount[2]);
                    }
                    GetTimeSlot(model.Date)
                    var manager = {
                        ele: 'manager-cloud',
                        data: {
                            xName: '日期',
                            yName: '单位/条',
                            legendName: model.LegendName,
                            date: model.Date,
                            count: model.Count,
                            startValue: ss_star,
                            endValue: ss_end
                        }
                    }
                    jmChart.thread(manager);
                }
            }
        });
    }
}
//获取曲线图默认展示时间段
function GetTimeSlot(date) {
    var length = date.length;
    var now = new Date(date[date.length - 1]);
    var nowdate = new Date();
    var days = now.getDate();
    var months = now.getMonth();
    var nowMonths = nowdate.getMonth();
    if (months < nowMonths) {
        ss_star = 0;
        ss_end = 6;
    }
    else {
        if (length >= 7) {
            ss_star = length - 7;
            ss_end = length - 1;
        }
        else {
            ss_star = 0;
            ss_end = length - 1;
        }
    }
}

// 隐藏汇总数据dom结构,处理css操作
function dataHide() {
    $('#manager-client').addClass('bar4');
    $('#manager-client').removeClass('thread');
    $('#manager-thread').removeClass('thread');
    $('#manager-salesCard').removeClass('thread');
    $('#manager-car').removeClass('thread');
    $('#manager-cloud').removeClass('thread');

    $('#manager-client-data').hide();
    $('#manager-thread-data').hide();
    $('#manager-salesCard-data').hide();
    $('#manager-car-data').hide();
    $('#manager-cloud-data').hide();
}
// 显示汇总数据dom结构,处理css操作
function dataShow() {
    $('#manager-client').removeClass('bar4');
    $('#manager-client').addClass('thread');
    $('#manager-thread').addClass('thread');
    $('#manager-salesCard').addClass('thread');
    $('#manager-car').addClass('thread');
    $('#manager-cloud').addClass('thread');

    $('#manager-client-data').show();
    $('#manager-thread-data').show();
    $('#manager-salesCard-data').show();
    $('#manager-car-data').show();
    $('#manager-cloud-data').show();
}