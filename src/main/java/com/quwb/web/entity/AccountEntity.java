package com.quwb.web.entity;

/**
 * @author quwb
 * @create 2018-03-01 19:15
 * @desc
 **/
public class AccountEntity {
    private Integer accountId;
    private String accountName;
    private String accountPhone;
    private Integer accountTypeId;
    private String accountTypeName;
    private Integer dealerId;
    private String dealerFullName;
    private Integer businessModelId;
    private String dealerServicePhones;

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getAccountPhone() {
        return accountPhone;
    }

    public void setAccountPhone(String accountPhone) {
        this.accountPhone = accountPhone;
    }

    public Integer getAccountTypeId() {
        return accountTypeId;
    }

    public void setAccountTypeId(Integer accountTypeId) {
        this.accountTypeId = accountTypeId;
    }

    public String getDealerFullName() {
        return dealerFullName;
    }

    public void setDealerFullName(String dealerFullName) {
        this.dealerFullName = dealerFullName;
    }

    public String getDealerServicePhones() {
        return dealerServicePhones;
    }

    public void setDealerServicePhones(String dealerServicePhones) {
        this.dealerServicePhones = dealerServicePhones;
    }

    public String getAccountTypeName() {
        return accountTypeName;
    }

    public void setAccountTypeName(String accountTypeName) {
        this.accountTypeName = accountTypeName;
    }

    public Integer getBusinessModelId() {
        return businessModelId;
    }

    public void setBusinessModelId(Integer businessModelId) {
        this.businessModelId = businessModelId;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public Integer getDealerId() {
        return dealerId;
    }

    public void setDealerId(Integer dealerId) {
        this.dealerId = dealerId;
    }
}
