package com.korit.restaurant.Web.Api;

import com.korit.restaurant.Service.MenuListService;
import com.korit.restaurant.Web.Controller.dto.CMRespDto;
import com.korit.restaurant.Web.Controller.dto.MenuListDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MenuListApi {

    @Autowired
    private MenuListService menuListService;


    @GetMapping("/admin/menus")
    public ResponseEntity<CMRespDto<?>> getMenuList(MenuListDto menuListDto) {
        System.out.println(menuListService.getMenuService(menuListDto));
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "sucessfully", menuListService.getMenuService(menuListDto)));
    }
}
