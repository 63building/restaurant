package com.korit.restaurant.service;

import com.korit.restaurant.entity.admin.SearchReservationMst;
import com.korit.restaurant.repository.SearchReservationRepository;
import com.korit.restaurant.web.dto.SearchSReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchReservationService {

    private final SearchReservationRepository searchReservationRepository;

    public int getSearchTotalCount(SearchSReqDto searchSReqDto) {
        return searchReservationRepository.getAdminSearchReservationTotalCount(searchSReqDto);
    }

    public List<SearchReservationMst> getSearchReservations(SearchSReqDto searchSReqDto) {
        searchSReqDto.setIndex();
        return searchReservationRepository.adminSearchReservation(searchSReqDto);
    }


}