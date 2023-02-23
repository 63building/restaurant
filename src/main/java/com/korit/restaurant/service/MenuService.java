package com.korit.restaurant.service;


import com.korit.restaurant.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
public class MenuService {

    @Value("${file.path}")
    private String filePath;

//    @Autowired
//    private MenuRepository menuRepository;
//
//    public Map<String, Object> getAllMenu(String menuCode) {
//        Map<String, Object> result = new HashMap<>();
//        result.put("adminMenu", menuRepository.getAllMenu(menuCode));
//
//        return result;
//    }

}
