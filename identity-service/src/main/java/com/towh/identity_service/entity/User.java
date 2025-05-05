package com.towh.identity_service.entity;

import java.time.LocalDate;
import java.util.*;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class User extends BaseEntity {
    String username;
    String password;
    String firstName;
    String lastName;
    String email;
    LocalDate dob;

    @ManyToMany
    Set<Role> roles;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    Set<Book> books = new HashSet<>();
}
