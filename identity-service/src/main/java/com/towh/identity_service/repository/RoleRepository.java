package com.towh.identity_service.repository;

import com.towh.identity_service.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {

    @Query("SELECT r FROM Role r WHERE r.name = :name")
    Role findByName(String name);

    List<Role> findAllByNameIn(List<String> names);
}
