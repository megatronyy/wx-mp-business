package com.quwb.web.entity;

import java.util.Date;

/**
 * @author quwb
 * @create 2018-03-05 17:30
 * @desc
 **/
public class MicroShopUserEntity {
    /**
     *主键id
     */
    private Integer id;

    /**
     *经纪人id
     */
    private Integer dasAccountId;

    /**
     *经销商id
     */
    private Integer dealerId;

    /**
     *0:未绑定1:已绑定
     */
    private Short status;

    /**
     *微信openId用户唯一标识
     */
    private String openId;

    /**
     *昵称
     */
    private String nickname;

    /**
     *推送时间
     */
    private Date pushTime;

    /**
     *创建时间
     */
    private Date createTime;

    /**
     *更新时间
     */
    private Date updateTime;

    /**
     *删除标识
     */
    private Short isDelete;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDasAccountId() {
        return dasAccountId;
    }

    public void setDasAccountId(Integer dasAccountId) {
        this.dasAccountId = dasAccountId;
    }

    public Integer getDealerId() {
        return dealerId;
    }

    public void setDealerId(Integer dealerId) {
        this.dealerId = dealerId;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname == null ? null : nickname.trim();
    }

    public Date getPushTime() {
        return pushTime;
    }

    public void setPushTime(Date pushTime) {
        this.pushTime = pushTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Short getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Short isDelete) {
        this.isDelete = isDelete;
    }
}
