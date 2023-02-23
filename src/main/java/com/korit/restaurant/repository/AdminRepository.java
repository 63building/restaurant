package com.korit.restaurant.repository;

import com.korit.restaurant.entity.admin.AdminMst;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;

@Mapper
public interface AdminRepository {

    public AdminMst findByAdminLogin(String adminId);

}