package com.quwb.web.constant;

public class UserConstant {
    //用户session key
    public static final String USER_SESSION_KEY = "USER_SESSION";
    public static final String USER_SESSION_AES_PASSWORD = "qichedaquan.com";
    //cookie域
    public final static String COOKIE_DOMAIN = "";

    //用户注册来源 1手机号注册，2微信，3qq，4微博
    public final static int MOBILE_USER_SOURCE = 1;
    public final static int WEIXIN_USER_SOURCE = 2;
    public final static int QQ_USER_SOURCE = 3;
    public final static int WEIBO_USER_SOURCE = 4;

    //用户注册平台 1网站，2app IOS，3APP android，4移动站
    public final static int PC_USER_PLATFORM = 1;
    public final static int IOS_USER_PLATFORM = 2;
    public final static int ANDROID_USER_PLATFORM = 3;
    public final static int MOBILE_USER_PLATFORM = 4;
}
