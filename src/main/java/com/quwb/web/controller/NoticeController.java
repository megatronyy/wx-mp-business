package com.quwb.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/notice")
public class NoticeController {
    @RequestMapping(value = "/list")
    public String noticeList(){
        return "/notice/list";
    }

    @RequestMapping(value = "/detail")
    public String noticeDetail(){
        return "/notice/detail";
    }
}
