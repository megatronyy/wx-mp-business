package com.quwb.web.weixin;

import com.quwb.web.enums.EnumVisitorOperaSystem;
import com.quwb.web.enums.EnumVisitorTerminal;

/**
 * @author quwb
 * @create 2018-03-07 16:53
 * @desc
 **/
public class VisitorTerminal {
    private EnumVisitorOperaSystem operaSystem;
    private EnumVisitorTerminal terminal;
    private Boolean isMobileTerminal;

    public EnumVisitorOperaSystem getOperaSystem() {
        return operaSystem;
    }

    public void setOperaSystem(EnumVisitorOperaSystem operaSystem) {
        this.operaSystem = operaSystem;
    }

    public EnumVisitorTerminal getTerminal() {
        return terminal;
    }

    public void setTerminal(EnumVisitorTerminal terminal) {
        this.terminal = terminal;
    }

    public Boolean getMobileTerminal() {
        return isMobileTerminal;
    }

    public void setMobileTerminal(Boolean mobileTerminal) {
        isMobileTerminal = mobileTerminal;
    }
}
