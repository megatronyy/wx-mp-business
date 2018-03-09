package com.quwb.web.entity;

import java.io.Serializable;

/**
 * Created by chenyy on 2017/4/21.
 */
public class SearchHistory implements Serializable {
    private static final long serialVersionUID = 1L;
  private   String showName;
  private String urlSpell;

    public String getShowName() {
        return showName;
    }

    public void setShowName(String showName) {
        this.showName = showName;
    }

    public String getUrlSpell() {
        return urlSpell;
    }

    public void setUrlSpell(String urlSpell) {
        this.urlSpell = urlSpell;
    }
}
