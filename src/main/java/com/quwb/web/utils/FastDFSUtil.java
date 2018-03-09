package com.quwb.web.utils;

import com.quwb.web.constant.StaticConfig;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by hanjd on 2017/3/6.
 */
public class FastDFSUtil {

    static Logger logger = LoggerFactory.getLogger(FastDFSUtil.class);

    private static final String SEPARATOR = "/";
    private static final String PIC_PATTERN="_\\d{1,5}x\\d{1,5}\\.";
    private FastDFSUtil() {
    }

    public static String getFastDFSUrl(String fileId) {
        return getFastDFSUrl(fileId, null, null);
    }

    public static String getFastDFSUrl(String fileId, String x, String y) {
        if (fileId == null || fileId.length() == 0) {
            logger.error("getFastDFSUrl error,fileId is not right:{}", fileId);
            return fileId;
        }
        try {
            if (x != null && y != null) {
                Pattern pattern = Pattern.compile(PIC_PATTERN);
                Matcher matcher = pattern.matcher(fileId);
                if (!matcher.find()) {
                    fileId = fileId.substring(0, fileId.lastIndexOf(".")) + "_" + x + "x" + y + fileId.substring(fileId.lastIndexOf("."));
                }
            }
            if (!fileId.contains(SEPARATOR)) {
                logger.error("getFastDFSUrl error,fileId does't contains /:{}", fileId);
                return fileId;
            }
            if (fileId.split(SEPARATOR).length > 5) {
                return fileId;
            }
            String group = fileId.substring(0, fileId.indexOf(SEPARATOR));
            String domain = StaticConfig.getConfig(group);
            if (StringUtils.isNotBlank(domain)) {
                return domain + SEPARATOR + fileId;
            }
            return fileId;
        } catch (Exception e) {
            logger.error("getFastDFSUrl cause an exception:{}", e.getMessage());
            return fileId;
        }
    }

    public static String trimFastDFSDomain(String url) {
        if (StringUtils.isBlank(url)) {
            logger.error("trimFastDFSDomain url is empty");
            return url;
        }
        if(!url.contains(SEPARATOR)){
            logger.error("trimFastDFSDomain url is not rigth url:{}",url);
            return url;
        }
        String[] arr = url.split(SEPARATOR);
        int size = arr.length;
        if (size < 5) {
            logger.error("trimFastDFSDomain url is not finish,the number of / is less than 5:{}", url);
            return url;
        }
        return arr[size - 5] + SEPARATOR + arr[size - 4] + SEPARATOR + arr[size - 3] + SEPARATOR + arr[size - 2] + SEPARATOR + arr[size - 1];
    }

//    public static void main(String [] args){
//        System.out.println(StaticConfig.getConfig("group1"));
//    }

}
