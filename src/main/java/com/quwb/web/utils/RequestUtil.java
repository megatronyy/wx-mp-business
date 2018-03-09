package com.quwb.web.utils;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Created by wangxy on 2017/3/27.
 */
public class RequestUtil {


    public static String getAllParameterFromRequest(HttpServletRequest request){
        StringBuffer result = new StringBuffer();
        Map map = new HashMap();
        Enumeration paramNames = request.getParameterNames();
        while (paramNames.hasMoreElements()) {
            String paramName = (String) paramNames.nextElement();

            String[] paramValues = request.getParameterValues(paramName);
            if (paramValues.length == 1) {
                String paramValue = paramValues[0];
                if (paramValue.length() != 0) {
                    map.put(paramName, paramValue);
                }
            }
        }
        Set<Map.Entry<String, String>> set = map.entrySet();
        for (Map.Entry entry : set) {
            result.append(entry.getKey() + ":" + entry.getValue()+"\n");
        }

        return result.toString();
    }
}
