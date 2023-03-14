package com.korit.restaurant.repository;

import com.korit.restaurant.Entity.UpdateUserEntity;
import com.korit.restaurant.Web.Controller.dto.UpdateUseReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UpdateRepository {
    public int updateUser(UpdateUseReqDto updateUseReqDto);

    public List<UpdateUserEntity> selectUser(UpdateUseReqDto updateUseReqDto);

}
