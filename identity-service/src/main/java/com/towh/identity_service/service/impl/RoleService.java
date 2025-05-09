package com.towh.identity_service.service.impl;

import com.towh.identity_service.dto.request.role.RoleRequest;
import com.towh.identity_service.dto.response.RoleResponse;
import com.towh.identity_service.mapper.RoleMapper;
import com.towh.identity_service.repository.PermissionRepository;
import com.towh.identity_service.repository.RoleRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor // Lombok's annotation to generate a constructor with all final fields
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class RoleService {
    RoleRepository roleRepository;
    PermissionRepository permissionRepository;
    RoleMapper roleMapper;

    @PreAuthorize("hasRole('ADMIN')")
    public RoleResponse create(RoleRequest request) {
        var role = roleMapper.toRole(request);
        var permissions = permissionRepository.findAllById(request.getPermissionSet());

        // Set permission for role
        role.setPermissionSet(new HashSet<>(permissions));
        role = roleRepository.save(role);

        // test log
        return roleMapper.toRoleResponse(role);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public List<RoleResponse> getAll(){
        var roles = roleRepository.findAll();
        return roles.stream().map(roleMapper::toRoleResponse).toList();
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteRole(String role) {
        roleRepository.deleteById(role);
    }
}
