package com.towh.identity_service.mapper;

import com.towh.identity_service.dto.request.permission.PermissionRequest;
import com.towh.identity_service.dto.response.PermissionResponse;
import com.towh.identity_service.entity.Permission;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest permissionRequest);
    PermissionResponse toPermissionResponse(Permission permission);
}
