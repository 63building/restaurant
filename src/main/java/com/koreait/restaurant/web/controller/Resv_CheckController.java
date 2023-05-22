package com.koreait.restaurant.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/check")
public class Resv_CheckController {

    @GetMapping("")
    public String loadcheck() {
        return "/reserve_Check/check";
    }
    @GetMapping("/input")
    public String loadcheckPage() {
        return "/reserve_Check/check_input";
    }
}


