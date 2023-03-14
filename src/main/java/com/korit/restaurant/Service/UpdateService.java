package com.korit.restaurant.Service;

import com.korit.restaurant.Entity.UpdateUserEntity;
import com.korit.restaurant.Web.Controller.dto.UpdateUseReqDto;
import com.korit.restaurant.repository.UpdateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UpdateService {


    @Autowired
    private UpdateRepository updateRepository;

    public void modifyReserve(UpdateUseReqDto updateUseReqDto) {
        updateRepository.updateUser(updateUseReqDto);
    }

    public List<UpdateUserEntity> searchReserve(UpdateUseReqDto updateUseReqDto) {

        return updateRepository.selectUser(updateUseReqDto);
    }

}
