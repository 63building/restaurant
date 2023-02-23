package com.korit.restaurant.service;

import com.korit.restaurant.entity.admin.AdminMst;
import com.korit.restaurant.repository.AdminRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public AdminMst getAdmin(String adminId) {
        return adminRepository.findByAdminLogin(adminId);
    }
}