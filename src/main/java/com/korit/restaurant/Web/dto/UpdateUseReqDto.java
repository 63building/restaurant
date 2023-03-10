package com.korit.restaurant.Web.Controller.dto;

import lombok.Data;

import java.util.Date;


@Data
public class UpdateUseReqDto {

    private String reserveTime;
    private int adult;
    private int child;
    private Date reserveDate;
    private String menu;
}
