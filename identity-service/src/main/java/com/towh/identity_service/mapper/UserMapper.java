package com.towh.identity_service.mapper;

import com.towh.identity_service.dto.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.towh.identity_service.dto.request.user.UserCreationRequest;
import com.towh.identity_service.dto.request.user.UserUpdateRequest;
import com.towh.identity_service.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest userCreationRequest);

    UserResponse toUserResponse(User user);

    void updateUser(@MappingTarget User user, UserUpdateRequest userUpdateRequest);
}
