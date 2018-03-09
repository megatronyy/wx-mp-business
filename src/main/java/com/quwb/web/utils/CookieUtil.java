package com.quwb.web.utils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangwd on 2017/5/27.
 */
public class CookieUtil {

    public static final  String COOKIE_NAME = "A8C716C051544CC9833BF454DAC807FE"; //cookie名称

    public static Cookie getCookie(HttpServletRequest request, String cookieName) {
        Cookie[] cookies = request.getCookies();
        Cookie cookie = null;
        if (cookies != null) {
            for (int i = 0; i < cookies.length; i++) {
                if (cookies[i].getName().equals(cookieName)) {
                    cookie = cookies[i];
                    break;
                }
            }
        }
        return cookie;
    }

    public static boolean setCookie(HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = getCookie(request, COOKIE_NAME);
        if (cookie == null) { // 如果有值则不设置 如果没有值  则设置一个cookie
            String cookie_value = UUIDUtil.getUUIDToStringNoDash();
            cookie = new Cookie(COOKIE_NAME, cookie_value);
            cookie.setPath("/");
            cookie.setMaxAge(30 * 24 * 3600); // 一个月
            response.addCookie(cookie);
            return true;
        } else {
            return true;
        }
    }

    public static String getCookieValue(HttpServletRequest request) {
        Cookie cookie = getCookie(request, COOKIE_NAME);
        return cookie != null ? cookie.getValue() : "";
    }

    public static boolean removeCookie(HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = getCookie(request, COOKIE_NAME);
        if (cookie != null) {
            cookie = new Cookie(COOKIE_NAME, null);
            cookie.setPath("/");
            cookie.setMaxAge(0);
            response.addCookie(cookie);
            return true;
        }
        return false;
    }
}
