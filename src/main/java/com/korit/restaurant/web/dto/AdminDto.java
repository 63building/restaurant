package com.korit.restaurant.web.dto;

import com.korit.restaurant.entity.admin.AdminMst;
import lombok.*;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class AdminDto {
    private String adminId;
    private String adminPw;
}
