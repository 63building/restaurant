package com.korit.restaurant.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Data
public class MenuReqDto {
    @ApiModelProperty(value = "도서코드", example = "소록-999", required = true)
    @NotBlank
    private String menuCode;

    @ApiModelProperty(value = "도서명", example = "테스트 도서명", required = true)
    @NotBlank
    private String menuName;

    @ApiModelProperty(value = "저자", example = "테스터")
    @NotBlank
    private String day;

    @ApiModelProperty(value = "출판사", example = "테스트 출판사")
    @NotBlank
    private String meals;

    @ApiModelProperty(value = "출판일", example = "2023-01-01")
    @NotBlank
    private int menuAge1;

    @ApiModelProperty(value = "출판일", example = "2023-01-01")
    @NotBlank
    private int menuAge2;

    @ApiModelProperty(value = "카테고리", example = "가정/생활", required = true)
    @NotBlank
    private String salesPride;

    @ApiModelProperty(value = "설명", example = "", required = true)
    private String explanation;

}


