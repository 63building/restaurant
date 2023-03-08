package com.korit.restaurant.repository;

import com.korit.restaurant.Web.Controller.dto.MenuListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuRepository {

    public List<MenuListDto> getMenuList(MenuListDto menuListDto);
}
