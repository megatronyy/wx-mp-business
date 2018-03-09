package com.quwb.web.config.velocity;

import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @author quwb
 * @create 2018-02-27 20:25
 * @desc velocity页面调用方法
 **/
public class SiteUtility {
    static Logger logger = Logger.getLogger(SiteUtility.class);

    public static String getBaseUrl(){
        HttpServletRequest request = getCurrentRequest();
        String baseUrl = "";
        try{
            StringBuffer url = request.getRequestURL();
            baseUrl = url.delete(url.length() - request.getRequestURI().length(), url.length()).append("/").toString();
        }catch (Exception ex){
            logger.error(String.format("获取基地址发生异常，异常信息：%s", ex.toString()));
        }

        return baseUrl;
    }

    private static HttpServletRequest getCurrentRequest() {
        ServletRequestAttributes attrs = (ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
        if (attrs == null) {
            throw new IllegalStateException("当前线程中不存在 Request 上下文");
        }
        return attrs.getRequest();
    }
}
