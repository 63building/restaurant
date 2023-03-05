
package com.korit.restaurant.repository;

import com.korit.restaurant.entity.admin.SearchReservationMst;
import com.korit.restaurant.web.dto.SearchSReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SearchReservationRepository {
    public int getAdminSearchReservationTotalCount(SearchSReqDto searchSReqDto);
    public List<SearchReservationMst> adminSearchReservation(SearchSReqDto searchSReqDto);
}