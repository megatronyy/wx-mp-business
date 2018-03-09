package com.quwb.web.utils;

import java.math.BigDecimal;

/**
 * Created by chendd on 2017/6/19.
 */
public class LocationUtils {
    private static double EARTH_RADIUS = 6378.137;

    private static double rad(double d) {
        return d * Math.PI / 180.0;
    }

    /**
     * 通过经纬度获取距离(单位：千米)
     * @param lat1
     * @param lng1
     * @param lat2
     * @param lng2
     * @return
     */
    public static double getDistance(double lat1, double lng1, double lat2,
                                     double lng2) {
        try {
            double radLat1 = rad(lat1);
            double radLat2 = rad(lat2);
            double a = radLat1 - radLat2;
            double b = rad(lng1) - rad(lng2);
            double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
                    + Math.cos(radLat1) * Math.cos(radLat2)
                    * Math.pow(Math.sin(b / 2), 2)));
            s = s * EARTH_RADIUS;
            s = Math.round(s * 10000d) / 10000d;
            //s = s*1000;
            BigDecimal c = new BigDecimal(s);
            double f1 = c.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
            return f1;
        }catch (Exception e){
            return 0d;
        }
    }

//    public static void main(String[] args) {
//        System.out.println(LocationUtils.getDistance(23.129168,113.445184,39.91488908,116.40387397));
//    }
}
