package com.korit.restaurant.web.controller;

import com.korit.restaurant.service.AdminService;
import com.korit.restaurant.web.dto.AdminDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/login")
    public String login() {
        return "/admin/login";
    }

    @PostMapping("/login/error")
    public String loginError() {
        return "/admin/login_error";
    }

}