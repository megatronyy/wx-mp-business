package com.quwb.web.common;

import com.alibaba.fastjson.JSON;

public class ResponseEntity<T> {
    private boolean isSuccess;
    private String message;
    private int code;
    private String sign;
    private String appId;
    private T data;

    public ResponseEntity(boolean isSuccess, String message, int code, String sign, String appId, T data){
        this.isSuccess = isSuccess;
        this.message = message;
        this.code = code;
        this.sign = sign;
        this.appId = appId;
        this.data = data;
    }

    public boolean getIsSuccess(){ return this.isSuccess; }
    public void setIsSuccess(boolean isSuccess){ this.isSuccess = isSuccess; }

    public String getMessage(){ return this.message; }
    public void setMessage(String message){ this.message = message; }

    public int getCode(){ return this.code; }
    public void setCode(int code){ this.code = code; }

    public String getSign(){ return this.sign; }
    public void setSign(String sign){ this.sign = sign; }

    public String getAppId(){ return this.appId; }
    public void setAppId(String appId){ this.appId = appId; }

    public T getData(){ return this.data; }
    public void setData(T data){ this.data = data; }

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }
}
