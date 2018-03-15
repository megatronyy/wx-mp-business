package com.quwb.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "/order")
public class OrderController {

    @RequestMapping(value = "/subscribe")
    public String subscribe(HttpServletRequest request,
                            HttpServletResponse response) {
        return "/order/subscribe";
    }

    @RequestMapping(value = "/list")
    public String subscribeList(@RequestParam(required = false) Integer id,
                                HttpServletRequest request,
                                HttpServletResponse response) {
        return "/order/subscribe_list";
    }
}
