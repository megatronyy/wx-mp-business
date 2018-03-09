package com.quwb.web.weixin;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author quwb
 * @create 2018-03-01 18:22
 * @desc 微信相关配置
 **/
@Component
@ConfigurationProperties(prefix = "weixin")
public class WxMpPropertyConfig {
    private String appid;

    private String appsecret;

    private String apiOauth2;

    private String apiToken;

    private String apiShare;

    private String token;

    private String appdownload;

    private String iosHSJApp;

    private String androidHSJApp;

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getAppsecret() {
        return appsecret;
    }

    public void setAppsecret(String appsecret) {
        this.appsecret = appsecret;
    }

    public String getApiOauth2() {
        return apiOauth2;
    }

    public void setApiOauth2(String apiOauth2) {
        this.apiOauth2 = apiOauth2;
    }

    public String getApiToken() {
        return apiToken;
    }

    public void setApiToken(String apiToken) {
        this.apiToken = apiToken;
    }

    public String getApiShare() {
        return apiShare;
    }

    public void setApiShare(String apiShare) {
        this.apiShare = apiShare;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAppdownload() {
        return appdownload;
    }

    public void setAppdownload(String appdownload) {
        this.appdownload = appdownload;
    }

    public String getIosHSJApp() {
        return iosHSJApp;
    }

    public void setIosHSJApp(String iosHSJApp) {
        this.iosHSJApp = iosHSJApp;
    }

    public String getAndroidHSJApp() {
        return androidHSJApp;
    }

    public void setAndroidHSJApp(String androidHSJApp) {
        this.androidHSJApp = androidHSJApp;
    }
}
