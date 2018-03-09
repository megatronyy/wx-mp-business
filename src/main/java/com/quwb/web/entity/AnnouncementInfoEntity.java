package com.quwb.web.entity;

/**
 * @author quwb
 * @create 2018-03-01 19:17
 * @desc
 **/
public class AnnouncementInfoEntity {
    private int id;
    private String title;
    private String content;
    private String publishTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(String publishTime) {
        this.publishTime = publishTime;
    }
}
