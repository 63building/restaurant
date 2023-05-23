package com.koreait.restaurant.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/login")
    public String login() {
        return "/admin/admin_login";
    }

    @PostMapping("/login/error")
    public String loginError() {
        return "/admin/admin_login_error";
    }

    @GetMapping("/register")
    public String register() {
        return "/admin/menu_registration";
    }
}