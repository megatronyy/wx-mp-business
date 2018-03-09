package com.quwb.web.weixin;

import com.quwb.web.common.ApiResult;
import com.quwb.web.common.CommonCode;
import com.quwb.web.enums.EnumVisitorOperaSystem;
import com.quwb.web.enums.EnumVisitorTerminal;
import com.quwb.web.utils.CookieManager;
import com.quwb.web.utils.StringHelperTools;
import com.quwb.web.utils.UUIDUtil;
import me.chanjar.weixin.common.api.WxConsts;
import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.api.WxMpUserService;
import me.chanjar.weixin.mp.bean.result.WxMpOAuth2AccessToken;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

/**
 * @author quwb
 * @create 2018-03-01 11:33
 * @desc
 **/
@Service
public class WeiXinService {
    static Logger logger = Logger.getLogger(WeiXinService.class);

    @Autowired
    WxMpService wxMpService;

    public String getBaseUrl(String returl, HttpServletResponse response) {
        //随机数，用于识别请求可靠性
        String state = UUIDUtil.getUUIDToString();
        CookieManager.getInstance().saveCookie(response, "State", state, 180);
        return wxMpService.oauth2buildAuthorizationUrl(returl, WxConsts.OAuth2Scope.SNSAPI_BASE, state);
    }

    /**
     * @author quwb
     * @create 2018-02-27 17:45
     * @desc 行圆慧-公众号-获取全局ACCESS_TOKEN
     **/
    public String GetGlobalAccessToken(){
        String access_token = "";
        try {
            access_token = wxMpService.getAccessToken();
        }catch (WxErrorException ex){
            logger.error(String.format("获取全局票据ACCESS_TOKEN异常，异常信息：%s", ex.toString()));
        }
        return access_token;
    }

    /**
     * @author quwb
     * @create 2018-02-27 17:45
     * @desc 行圆慧-公众号-获取授权access_token
     **/
    public ApiResult<WxMpOAuth2AccessToken> getUserByBase(String code,
                                                   String state,
                                                   HttpServletRequest request,
                                                   HttpServletResponse response) {
        ApiResult<WxMpOAuth2AccessToken> result = new ApiResult<>(CommonCode.ERROR);
        if(StringUtils.isEmpty(code)){
            result.setCodeMsg(CommonCode.TOKEN_INVALID);
        }else{
            String strCookie = CookieManager.getInstance().getCookie(request, "State");
            if(!state.equals(strCookie)){
                result.setCodeMsg(CommonCode.STATE_INVALID);
            }
        }

        CookieManager.getInstance().removeCookie(response, "State");

        try{
            WxMpOAuth2AccessToken wxMpOAuth2AccessToken = wxMpService.oauth2getAccessToken(code);
            result.setData(wxMpOAuth2AccessToken);
            result.setCodeMsg(CommonCode.SUCCESS);
        }catch (Exception ex){
            logger.error(String.format("用code换取access_token异常，异常信息：%s", ex.toString()));
        }
        return result;
    }

    public WxMpUser getUserInfo(String openid){
        WxMpUser wxMpUser = null;
        WxMpUserService wxMpUserService = wxMpService.getUserService();
        try{
            wxMpUser = wxMpUserService.userInfo(openid);
        }catch (WxErrorException ex){
            logger.error(String.format("获取用户信息异常，异常信息：%s", ex.toString()));
        }
        return wxMpUser;
    }

    /**
     * 排序方法
     * @param token
     * @param timestamp
     * @param nonce
     * @return
     */
    public String sort(String token, String timestamp, String nonce) {
        String[] strArray = { token, timestamp, nonce };
        Arrays.sort(strArray);

        StringBuilder sbuilder = new StringBuilder();
        for (String str : strArray) {
            sbuilder.append(str);
        }

        return sbuilder.toString();
    }

    public VisitorTerminal isWeiXin(HttpServletRequest request){
        VisitorTerminal terminal = new VisitorTerminal();

        String userAgent = request.getHeader("User-Agent");
        if(StringHelperTools.isNvl(userAgent)){
            userAgent = "";
        }

        userAgent = StringUtils.lowerCase(userAgent);
        Boolean flag = userAgent.contains("ipad");
        Boolean flag1 = userAgent.contains("iphone os");
        Boolean flag2 = userAgent.contains("midp");
        Boolean flag3 = userAgent.contains("rv:1.2.3.4");
        flag3 = (flag3 ? flag3 : userAgent.contains("ucweb"));
        Boolean flag4 = userAgent.contains("android");
        Boolean flag5 = userAgent.contains("windows ce");
        Boolean flag6 = userAgent.contains("windows mobile");
        Boolean flag7 = userAgent.contains("micromessenger");
        Boolean flag8 = userAgent.contains("windows phone ");
        Boolean flag9 = userAgent.contains("appwebview(ios)");
        terminal.setTerminal(EnumVisitorTerminal.PC);

        if (flag || flag1 || flag2 || flag3 || flag4 || flag5 || flag6 || flag8)
        {
            terminal.setTerminal(EnumVisitorTerminal.MOBILE);
        }
        if (flag || flag1)
        {
            terminal.setOperaSystem(EnumVisitorOperaSystem.IOS);
            terminal.setTerminal(EnumVisitorTerminal.MOBILE);
            if (flag)
            {
                terminal.setTerminal(EnumVisitorTerminal.PAD);
            }
            if (flag9)
            {
                terminal.setTerminal(EnumVisitorTerminal.IOS);
            }
        }
        if (flag4)
        {
            terminal.setOperaSystem(EnumVisitorOperaSystem.ANDROID);
            terminal.setTerminal(EnumVisitorTerminal.MOBILE);
        }
        if (flag7)
        {
            terminal.setTerminal(EnumVisitorTerminal.WEIXIN);
        }
        if (terminal.getTerminal() == EnumVisitorTerminal.MOBILE ||
                terminal.getTerminal() == EnumVisitorTerminal.PAD ||
                terminal.getTerminal() == EnumVisitorTerminal.WEIXIN ||
                terminal.getTerminal() == EnumVisitorTerminal.IOS)
        {
            terminal.setMobileTerminal(true);
        }

        return terminal;
    }
}
