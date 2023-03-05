package com.koreait.restaurant.service;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.repository.ReserveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ReserveService {

    @Autowired
    private ReserveRepository reserveRepository;

    public int userSearchReserve(DinningMst dinningMst) {
        return reserveRepository.findUserByReserveId(dinningMst);

    }

}

