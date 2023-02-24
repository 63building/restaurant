package com.koreait.restaurant.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/reserve")
public class ReserveController {

    @GetMapping("/check")
    public String loadcheck() {
        System.out.println("check");
        return "check";
    }
}

//    @PostMapping("/check/error")
//    public String checkError() {
//        return "reserve/check_error";
//    }
//
//    @GetMapping("/reserve/check")
//    public String reserveCheck() {
//        return "reserve/check";
//    }

