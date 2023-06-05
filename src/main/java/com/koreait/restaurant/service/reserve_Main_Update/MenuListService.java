package com.koreait.restaurant.service.reserve_Main_Update;

<<<<<<< HEAD
import com.koreait.restaurant.web.dto.reserve_Main_Update.MenuListDto;
import com.koreait.restaurant.repository.admin.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
=======
<<<<<<< HEAD
import com.koreait.restaurant.repository.reserve_Main_Update.MenuRepository;
import com.koreait.restaurant.web.dto.reserve_Main_Update.MenuListDto;
=======
import com.koreait.restaurant.web.dto.reserve_Main_Update.MenuListDto;
import com.koreait.restaurant.repository.admin.MenuRepository;
>>>>>>> origin/BookCheck&Cancle
import lombok.RequiredArgsConstructor;
>>>>>>> origin/Reserve
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuListService {
<<<<<<< HEAD
    @Autowired
=======
//    @Autowired
>>>>>>> origin/Reserve
    private final MenuRepository menuRepository;

    public List<MenuListDto> getMenuService(MenuListDto menuListDto) {

        return menuRepository.getMenuList(menuListDto);
    }
}
