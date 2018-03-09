package com.quwb.web.controller;

import com.alibaba.fastjson.JSON;
import com.quwb.web.constant.CookieKeys;
import com.quwb.web.entity.AccountEntity;
import com.quwb.web.weixin.WeiXinService;
import com.quwb.web.utils.CookieManager;
import com.quwb.web.utils.SHAUtil;
import com.quwb.web.weixin.WxMpPropertyConfig;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLDecoder;
import java.util.ArrayList;

/**
 * @author quwb
 * @create 2018-02-27 17:45
 * @desc 行圆慧-公众号
 **/
@Controller
@RequestMapping(value = "/home")
public class HomeController {
    private Logger logger = LogManager.getLogger(HomeController.class);

    @Autowired
    WeiXinService weiXinService;

    @Autowired
    WxMpPropertyConfig wxMpPropertyConfig;

    /**
     * @author quwb
     * @create 2018-02-27 17:45
     * @desc 行圆慧-公众号-首页
     **/
    @RequestMapping(value = "/index")
    public String index(ModelMap modelMap,
                        HttpServletRequest request) {
        try{
            String strUser = CookieManager.getInstance().getCookie(request, CookieKeys.LOGIN);
            /*AccountEntity accountEntity = JSON.parseObject(URLDecoder.decode(strUser, "utf-8"), AccountEntity.class);
            modelMap.put("account_name", accountEntity.getAccountName());
            modelMap.put("account_type", accountEntity.getAccountTypeName());
            modelMap.put("account_phone", accountEntity.getAccountPhone());
            modelMap.put("dealer_name", accountEntity.getDealerFullName());*/
        }catch (Exception ex){
            logger.error(String.format("字符集转换异常，异常信息：%s", ex.toString()));
            return "redirect:/login/login";
        }


        return "/home/index";
    }

    /**
     * @author quwb
     * @create 2018-02-27 17:45
     * @desc 行圆慧-公众号-微信验证接口
     **/
    @RequestMapping(value = "/verify")
    @ResponseBody
    public String verify(HttpServletRequest request, HttpServletResponse response){

        String signature = request.getParameter("signature");
        String timestamp = request.getParameter("timestamp");
        String nonce = request.getParameter("nonce");
        String echostr = request.getParameter("echostr");

        ArrayList<String> array = new ArrayList<String>();
        array.add(signature);
        array.add(timestamp);
        array.add(nonce);

        String sortString = weiXinService.sort(wxMpPropertyConfig.getToken(), timestamp,nonce);

        String mytoken = SHAUtil.sha1(sortString);

        //校验签名
        if (mytoken != null && mytoken != "" && mytoken.equals(signature)) {
            return echostr;
        } else {
            return "";
        }
    }
}
