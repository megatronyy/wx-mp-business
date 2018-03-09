package com.quwb.web.common.rediskey;

/**
 * Created by yang on 2017/1/24.
 */
public class UserKey {
    //用户新消息缓存key {0}-userid
    public static final String USER_NEW_MSG = "user:new:msg:{0}";
    //用户新评论缓存key {0}-userid
    public static final String USER_NEW_COMMENT = "user:new:comment:{0}";

    public static final String USER_NEW_QA="user:qa:msg:{0}";
}
