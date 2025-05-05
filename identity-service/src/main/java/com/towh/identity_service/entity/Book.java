package com.towh.identity_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
@Builder
@Getter
@Setter
public class Book extends BaseEntity {
    String name;
    String description;
    Float price;
    String note;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
}
