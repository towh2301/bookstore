package com.towh.identity_service.configuration;

import com.towh.identity_service.entity.User;
import com.towh.identity_service.enums.Role;
import com.towh.identity_service.repository.RoleRepository;
import com.towh.identity_service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
@Configuration
public class ApplicationInitConfig {

    PasswordEncoder passwordEncoder;

    @Bean
    ApplicationRunner applicationRunner(UserRepository userRepository, RoleRepository roleRepository) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                var roles = new HashSet<Role>();
                roles.add(Role.ADMIN);
                roles.add(Role.USER);

                // Create the roles in the database
                for (Role role : roles) {
                    if (roleRepository.findByName(role.name()) == null) {
                        var roleEntity = new com.towh.identity_service.entity.Role();
                        roleEntity.setName(role.name());
                        roleRepository.save(roleEntity);
                    }
                }


                // Create an admin user
                var user = User.builder()
                        .username("admin")
                        .password(passwordEncoder.encode("admin"))
                        .roles(roleRepository.findAll().stream().collect(Collectors.toSet()))
                        .build();

                // Save the user to the database
                userRepository.save(user);
                log.warn("Admin user created with username: admin and password: admin");
            }
        };
    }
}
