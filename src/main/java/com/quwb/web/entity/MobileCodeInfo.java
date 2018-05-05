package com.quwb.web.entity;

import com.quwb.web.common.CustomJsonDateDeserializer;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.util.Date;

public class MobileCodeInfo {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column MobileCodeInfo.Id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column MobileCodeInfo.Mobile
     *
     * @mbg.generated
     */
    private String mobile;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column MobileCodeInfo.Code
     *
     * @mbg.generated
     */
    private Integer code;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column MobileCodeInfo.MobileIp
     *
     * @mbg.generated
     */
    private String mobileip;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column MobileCodeInfo.CreateTime
     *
     * @mbg.generated
     */
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createtime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column MobileCodeInfo.Id
     *
     * @return the value of MobileCodeInfo.Id
     *
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column MobileCodeInfo.Id
     *
     * @param id the value for MobileCodeInfo.Id
     *
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column MobileCodeInfo.Mobile
     *
     * @return the value of MobileCodeInfo.Mobile
     *
     * @mbg.generated
     */
    public String getMobile() {
        return mobile;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column MobileCodeInfo.Mobile
     *
     * @param mobile the value for MobileCodeInfo.Mobile
     *
     * @mbg.generated
     */
    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column MobileCodeInfo.Code
     *
     * @return the value of MobileCodeInfo.Code
     *
     * @mbg.generated
     */
    public Integer getCode() {
        return code;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column MobileCodeInfo.Code
     *
     * @param code the value for MobileCodeInfo.Code
     *
     * @mbg.generated
     */
    public void setCode(Integer code) {
        this.code = code;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column MobileCodeInfo.MobileIp
     *
     * @return the value of MobileCodeInfo.MobileIp
     *
     * @mbg.generated
     */
    public String getMobileip() {
        return mobileip;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column MobileCodeInfo.MobileIp
     *
     * @param mobileip the value for MobileCodeInfo.MobileIp
     *
     * @mbg.generated
     */
    public void setMobileip(String mobileip) {
        this.mobileip = mobileip == null ? null : mobileip.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column MobileCodeInfo.CreateTime
     *
     * @return the value of MobileCodeInfo.CreateTime
     *
     * @mbg.generated
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column MobileCodeInfo.CreateTime
     *
     * @param createtime the value for MobileCodeInfo.CreateTime
     *
     * @mbg.generated
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

}