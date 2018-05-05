package com.quwb.web.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.quwb.web.config.velocity.SiteUtility;
import com.quwb.web.constant.CookieKeys;
import com.quwb.web.weixin.WeiXinService;
import com.quwb.web.common.ApiResult;
import com.quwb.web.common.CommonCode;
import com.quwb.web.utils.CookieManager;
import me.chanjar.weixin.mp.bean.result.WxMpOAuth2AccessToken;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Calendar;
import java.util.Date;

/**
 * @author quwb
 * @create 2018-02-27 17:45
 * @desc
 **/
@Controller
@RequestMapping(value = "/login")
public class LoginController {
    private Logger logger = LogManager.getLogger(LoginController.class);

    @Autowired
    WeiXinService weiXinService;


    @RequestMapping(value = "/login")
    public String login(@RequestParam(value = "username", required = false) String username,
                        @RequestParam(value = "password", required = false) String password,
                        @RequestParam(value = "code", required = false) String code,
                        @RequestParam(value = "state", required = false) String state,
                        @RequestParam(value = "returnurl", required = false) String returnurl,
                        ModelMap modelMap,
                        HttpServletRequest request,
                        HttpServletResponse response) {
        String login = CookieManager.getInstance().getCookie(request, CookieKeys.LOGIN);
        if (StringUtils.isNotEmpty(login)) {
            if (StringUtils.isEmpty(returnurl)) {
                return "redirect:/home/index";
            } else {
                return "redirect:" + returnurl;
            }
        } else if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
            String ret = String.format("%slogin/login?username=_username&password=_password", SiteUtility.getBaseUrl());
            modelMap.put("url", weiXinService.getBaseUrl(ret, response));
            return "/login/login";
        }

        try {
            //用户登录
            String userInfo = "";

            //获取微信用户信息
            String openId = "";
            String nickName = "";
            ApiResult<WxMpOAuth2AccessToken> wxUser = weiXinService.getUserByBase(code, state, request, response);
            if (wxUser.getCode() == CommonCode.SUCCESS.getKey()) {
                openId = wxUser.getData().getOpenId();
                if(StringUtils.isNotEmpty(openId)){
                    WxMpUser mpUser = weiXinService.getUserInfo(openId);
                    nickName = mpUser.getNickname();
                }
            }else{
                //获取微信用户信息失败

            }
            //设置登录信息
            /*if(this.login(userInfo, openId, response)){
                this.setMicroShopUser(userInfo, openId, nickName);
                return "redirect:/home/index";
            }*/
        } catch (Exception ex) {
            logger.error(String.format("用code换取access_token异常，异常信息：%s", ex.toString()));
        }

        return "/login/login";
    }

    @RequestMapping(value = "/logout")
    @ResponseBody
    public String loginOut(HttpServletRequest request,
                          HttpServletResponse response){
        ApiResult<Boolean>  apiResult = new ApiResult<>(CommonCode.ERROR);

        return apiResult.toString();
    }

    @RequestMapping(value = "/regist")
    public String regist(HttpServletRequest request,
                         HttpServletResponse response){
        return "/login/regist";
    }

    @RequestMapping(value = "/change")
    public String change(HttpServletRequest request,
                         HttpServletResponse response){
        return "/login/psd_chage";
    }

    private Boolean login(String userInfo, String openId, HttpServletResponse response) {
        JSONObject jsonObject = JSON.parseObject(userInfo);
        Integer retCode = jsonObject.getInteger("code");

        return false;
    }

    private void setMicroShopUser(String userInfo, String openId, String nickName){
        JSONObject jsonObject = JSON.parseObject(userInfo);
        Integer retCode = jsonObject.getInteger("code");

    }

    private void setLoginCookie(Integer accountId, Integer dealerId, String accountEntity,
                                String openId, HttpServletResponse response){
        Integer sec = this.getYearSecond();
        CookieManager.getInstance().saveCookie(response, CookieKeys.DEALER_ID, dealerId.toString(), sec);
        CookieManager.getInstance().saveCookie(response, CookieKeys.DAS_ACCOUNT_ID, accountId.toString(), sec);
        CookieManager.getInstance().saveCookie(response, CookieKeys.LOGIN, accountEntity, sec);
        CookieManager.getInstance().saveCookie(response, CookieKeys.OPEN_ID, openId, sec);
    }

    private Integer getYearSecond(){
        //获取时间加一年
        Date date = new Date();
        Calendar cal = Calendar.getInstance();
        //设置起时间
        cal.setTime(date);
        //增加一年
        cal.add(Calendar.YEAR, 1);
        Long secCount = cal.getTime().getTime();
        return secCount.intValue();
    }
}

