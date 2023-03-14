package com.korit.restaurant.Web.Api;

import com.korit.restaurant.Service.UpdateService;
import com.korit.restaurant.Web.Controller.dto.CMRespDto;
import com.korit.restaurant.Web.Controller.dto.UpdateUseReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UpdateApi {
    @Autowired
    private UpdateService updateService;

    @PutMapping("user/{reserveId}")
    public ResponseEntity<CMRespDto<?>> modifyUser(@PathVariable String reserveId, @RequestBody UpdateUseReqDto updateUseReqDto) {
        updateService.modifyReserve(updateUseReqDto);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "successfully", true));
    }

    @GetMapping("/searchuser")
    public ResponseEntity<CMRespDto<?>> getUser(UpdateUseReqDto updateUseReqDto) {
        System.out.println(updateService.searchReserve(updateUseReqDto));
//        updateService.searchReserve(updateUseReqDto);

        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", updateService.searchReserve(updateUseReqDto)));

    }

}
