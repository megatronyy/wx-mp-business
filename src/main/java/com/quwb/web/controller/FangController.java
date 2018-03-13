package com.quwb.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "/fang")
public class FangController {
    @RequestMapping(value = "/list")
    public String list(HttpServletRequest request,
                       HttpServletResponse response){
        return "/fang/list";
    }
}
