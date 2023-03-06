package com.koreait.restaurant.controller;

import com.koreait.restaurant.Dto.CMRespDto;
import com.koreait.restaurant.Dto.SelectMenuDto;
import com.koreait.restaurant.service.SelectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/search")
public class IndexController {

    @GetMapping("")
    public String loadSearch() {
        return "resv";
    }


}
