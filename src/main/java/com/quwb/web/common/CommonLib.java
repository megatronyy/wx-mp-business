package com.quwb.web.common;

import java.util.Date;

/**
 * Created by quwb on 2017/12/22.
 */
public class CommonLib {
    public static long diffDate(Date preDate, Date newDate){
        long nd = 1000 * 24 * 60 * 60;
        long nh = 1000 * 60 * 60;
        long nm = 1000 * 60;

        long diff = newDate.getTime() - preDate.getTime();
        long min = diff % nd % nh / nm;
        return min;
    }
}
