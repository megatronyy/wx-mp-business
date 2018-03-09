package com.quwb.web.enums;

import java.util.ArrayList;
import java.util.List;

public enum EnumVisitorTerminal {
    PC(0,"PC"),
    MOBILE(1,"MOBILE"),
    PAD(2,"PAD"),
    WEIXIN(3,"微信"),
    IOS(4,"IOS"),
    ANDROID(5,"安卓"),
    OTHER(99,"其它");

    private int key;
    private String value;


    public static EnumVisitorTerminal get(int  key) {
        for (EnumVisitorTerminal dot : EnumVisitorTerminal.values()) {
            if (key == dot.getKey()) {
                return dot;
            }
        }
        return OTHER;
    }

    public static EnumVisitorTerminal get(String value) {
        for (EnumVisitorTerminal dot : EnumVisitorTerminal.values()) {
            if (value.equals(dot.getValue())) {
                return dot;
            }
        }
        return OTHER;
    }

    public static List<Integer> getAllKey() {
        List<Integer> list =new ArrayList<Integer>();
        for (EnumVisitorTerminal dot : EnumVisitorTerminal.values()) {
            list.add(dot.getKey());
        }
        return list;
    }

    public static List<String> getAllValue() {
        List<String> list =new ArrayList<String>();
        for (EnumVisitorTerminal dot : EnumVisitorTerminal.values()) {
            list.add(dot.getValue());
        }
        return list;
    }



    private EnumVisitorTerminal(int key, String value) {
        this.key = key;
        this.value = value;
    }
    public int getKey() {
        return key;
    }
    public void setKey(int key) {
        this.key = key;
    }
    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }
}
