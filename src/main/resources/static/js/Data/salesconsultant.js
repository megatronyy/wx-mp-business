var jmChart = window.jmChart;
var cknodate = 0;
var liData = {
    manager_client: $('#canvas-client-data').find('li'),
    manager_thread: $('#canvas-thread-data').find('li'),
    manager_salesCard: $('#canvas-salesCard-data').find('li')
}
var ss_star = 0;
var ss_end = 6;
// 数据首页
$(function () {
    $.init();

    $(document).on('click', '.card-header', function () {
        $(this).next().toggle()
    });

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
   
    // 首次加载
    loadBeforeDay();
});

// 加载前一天数据
function loadBeforeDay() {
    var dateObj = getTypeDate(1); // 获取上一天时间
    $('.date').text(formatDateShort(dateObj.StartTime) + '统计');
    dataHide();
    cknodate = 0;

    var paramsData = {};
    paramsData.StartDate = dateObj.StartTime;
    paramsData.EndDate = dateObj.EndTime;
    paramsData.DealerId = $('#hidId').val();
    paramsData.AccountId = $('#hidAId').val();

    // 销售顾问-昨日-客户
    if ($('#canvas-client').length) {
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
                    var consultant = {
                        ele: 'canvas-client',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(consultant);
                }
            }
        });
    }
    // 销售顾问-昨日-线索
    if ($('#canvas-thread').length) {
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
                    var consultant = {
                        ele: 'canvas-thread',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(consultant);
                }
            }
        });
    }
    // 销售顾问-昨日-销售名片
    if ($('#canvas-salesCard').length) {
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
                    var consultant = {
                        ele: 'canvas-salesCard',
                        data: {
                            yList: model.YList,
                            yNum: model.YNum,
                            sum: model.Sum,
                            color: ['#f97564', '#8675d2', '#71c5ed', '#62a3f4']
                        }
                    }
                    jmChart.rowBar(consultant);
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

    var paramsData = {};
    paramsData.StartDate = dateObj.StartTime;
    paramsData.EndDate = dateObj.EndTime;
    paramsData.DealerId = $('#hidId').val();
    paramsData.AccountId = $('#hidAId').val();

    // 销售顾问-本月-客户
    if ($('#canvas-client').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetCustomerLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count.length > 0)
                        cknodate += 1;
                    if (liData.manager_client != undefined
                        && liData.manager_client != null
                        && liData.manager_client.length >= 2
                        && model.AllCount != null) {
                        $(liData.manager_client[0]).find('div:first-child').text(model.AllCount[0]);
                        $(liData.manager_client[1]).find('div:first-child').text(model.AllCount[1]);
                    }
                    
                    GetTimeSlot(model.Date)
                    var consultant = {
                        ele: 'canvas-client',
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
                    jmChart.thread(consultant);
                }
            }
        });
    }
    // 销售顾问-本月-线索
    if ($('#canvas-thread').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetClueLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count.length > 0)
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
                    var consultant = {
                        ele: 'canvas-thread',
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
                    jmChart.thread(consultant);
                }
            }
        });
    }
    // 销售顾问-本月-销售名片
    if ($('#canvas-salesCard').length) {
        $.ajax({
            url: this._webRoot + "/Data/GetSalesCardLineData",
            type: "get",
            data: paramsData,
            dataType: "json",
            success: function (dataResult) {
                var model = dataResult;
                if (model != undefined && model != null) {
                    if (model.Count.length > 0)
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
                    var consultant = {
                        ele: 'canvas-salesCard',
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
                    jmChart.thread(consultant);
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
    $('#canvas-client').removeClass('thread');
    $('#canvas-thread').removeClass('thread');
    $('#canvas-salesCard').removeClass('thread');

    $('#canvas-client-data').hide();
    $('#canvas-thread-data').hide();
    $('#canvas-salesCard-data').hide();
}
// 显示汇总数据dom结构,处理css操作
function dataShow() {
    $('#canvas-client').addClass('thread');
    $('#canvas-thread').addClass('thread');
    $('#canvas-salesCard').addClass('thread');

    $('#canvas-client-data').show();
    $('#canvas-thread-data').show();
    $('#canvas-salesCard-data').show();
}