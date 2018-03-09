package com.quwb.web.enums;

import java.util.ArrayList;
import java.util.List;

public enum EnumVisitorOperaSystem {
    WINDOWS(0,"Windows"),
    ANDROID(1,"Android"),
    IOS(2,"IOS"),
    LINUX(3,"Linux"),
    UNIX(4,"UNIX"),
    MACOS(5,"MacOS"),
    WINDOWS_PHONE(6,"WindowsPhone"),
    WINDOWS_CE(7,"WindowsCE"),
    WINDOWS_MOBILE(8,"WindowsMobile"),
    OTHER(99,"其它");

    private int key;
    private String value;


    public static EnumVisitorOperaSystem get(int  key) {
        for (EnumVisitorOperaSystem dot : EnumVisitorOperaSystem.values()) {
            if (key == dot.getKey()) {
                return dot;
            }
        }
        return OTHER;
    }

    public static EnumVisitorOperaSystem get(String value) {
        for (EnumVisitorOperaSystem dot : EnumVisitorOperaSystem.values()) {
            if (value.equals(dot.getValue())) {
                return dot;
            }
        }
        return OTHER;
    }

    public static List<Integer> getAllKey() {
        List<Integer> list =new ArrayList<Integer>();
        for (EnumVisitorOperaSystem dot : EnumVisitorOperaSystem.values()) {
            list.add(dot.getKey());
        }
        return list;
    }

    public static List<String> getAllValue() {
        List<String> list =new ArrayList<String>();
        for (EnumVisitorOperaSystem dot : EnumVisitorOperaSystem.values()) {
            list.add(dot.getValue());
        }
        return list;
    }



    private EnumVisitorOperaSystem(int key, String value) {
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
