package com.quwb.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author quwb
 * @create 2018-03-13 19:31
 * @desc
 **/
@Controller
@RequestMapping(value = "/my")
public class MyController {
    @RequestMapping(value = "/mine")
    public String mine(HttpServletRequest request,
                         HttpServletResponse response){
        return "/my/mine";
    }
}
