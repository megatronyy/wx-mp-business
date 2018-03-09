
var nowDate = new Date();
var nowDay = nowDate.getDate();
var nowMonth = nowDate.getMonth();
var nowYear = nowDate.getFullYear();
var nowDayOfWeek = nowDate.getDay();

var lastMonthDate = new Date();  //上月日期

lastMonthDate.setDate(1);

lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

var lastYear = lastMonthDate.getYear();

var lastMonth = lastMonthDate.getMonth();

//时间格式化
function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
}
function formatDateShort(date) {
    date = new Date(date);
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    return (mymonth + "月" + myweekday + "日");
}
//获得某月的天数
function getMonthDays(myMonth) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}
function getTypeDate(type) {
    switch (type) {
        case 1:
            var getYesterdayDate = new Date(nowYear, nowMonth, nowDay - 1);
            StartTime = formatDate(getYesterdayDate);
            EndTime = StartTime + " 23:59:59";
            break;
        case 2:
            var getUpWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7);
            StartTime = formatDate(getUpWeekStartDate);
            var getUpWeekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek - 7));
            EndTime = formatDate(getUpWeekEndDate);
            break;
        case 3:
            var getMonthStartDate = new Date(nowYear, nowMonth, 1);
            StartTime = formatDate(getMonthStartDate);
            //var getMonthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
            var getMonthEndDate = new Date(nowYear, nowMonth, nowDay - 1);
            EndTime = formatDate(getMonthEndDate);
            break;
        case 4:
            var getLastMonthStartDate = new Date(nowYear, lastMonth, 1);
            StartTime = formatDate(getLastMonthStartDate);
            var getLastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
            EndTime = formatDate(getLastMonthEndDate);
            break;
    }

    return { StartTime: StartTime, EndTime: EndTime }

}


// 判断日期是否合法
function ckdate(startdate, enddate) {
    if (startdate.length == 0)
    {
        prompt.layerWarning("请选择开始日期！", 3000, null, null);
        return false;
    }
    if (enddate.length == 0) {
        prompt.layerWarning("请选择结束日期！", 3000, null, null);
        return false;
    }

    if (startdate.length > 0) {
        if (enddate.length <= 0) {
            prompt.layerWarning("请输入完整的时间段！", 3000, null, null);
            return false;
        }
    }
    if (enddate.length > 0) {
        if (startdate.length <= 0) {
            prompt.layerWarning("请输入完整的时间段！", 3000, null, null);
            return false;
        }
    }
    var start = new Date(startdate.replace("-", "/").replace("-", "/"));
    var end = new Date(enddate.replace("-", "/").replace("-", "/"));
    if (end < start) {
        prompt.layerWarning("结束日期不能小于开始日期！", 3000, null, null);
        return false;
    }

    return true;
}