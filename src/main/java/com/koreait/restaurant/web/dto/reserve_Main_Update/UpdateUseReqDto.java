package com.koreait.restaurant.web.dto.reserve_Main_Update;

<<<<<<< HEAD
import lombok.Data;
=======
<<<<<<< HEAD
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
=======
import lombok.Data;
>>>>>>> origin/BookCheck&Cancle
>>>>>>> origin/Reserve

import java.util.Date;


<<<<<<< HEAD
=======
<<<<<<< HEAD
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateUseReqDto {

    private String reserveId;

    private String reserveDate;
    private String reserveTime;
    private int adult;
    private int child;


=======
>>>>>>> origin/Reserve
@Data
public class UpdateUseReqDto {

    private String reserveTime;
    private int adult;
    private int child;
    private Date reserveDate;
    private String menu;
<<<<<<< HEAD
=======
>>>>>>> origin/BookCheck&Cancle
>>>>>>> origin/Reserve
}
