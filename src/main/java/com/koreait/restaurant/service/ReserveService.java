package com.koreait.restaurant.service;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.repository.ReserveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReserveService {

    @Autowired
    private final ReserveRepository reserveRepository;

    public int getSearchReserveCheck(DinningMst dinningMst) {
       return reserveRepository.getUserSearchReserveCheck(dinningMst);

    }
}

