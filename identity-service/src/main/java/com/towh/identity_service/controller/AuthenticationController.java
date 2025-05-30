package com.towh.identity_service.controller;

import com.nimbusds.jose.JOSEException;
import com.towh.identity_service.dto.response.ApiResponse;
import com.towh.identity_service.dto.request.auth.AuthenticationRequest;
import com.towh.identity_service.dto.request.auth.IntrospectRequest;
import com.towh.identity_service.dto.response.AuthenticationResponse;
import com.towh.identity_service.dto.response.IntrospectResponse;
import com.towh.identity_service.service.impl.AuthenticationService;
import lombok.*;
import lombok.experimental.*;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/login")
    ApiResponse<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse result = authenticationService.authenticate(request);
        return ApiResponse.<AuthenticationResponse>builder()
                .code(200)
                .result(result)
                .build();
    }

    @PostMapping("/introspect")
    ApiResponse<IntrospectResponse> authenticate(@RequestBody IntrospectRequest request)
            throws JOSEException, ParseException {
        IntrospectResponse result = authenticationService.introspectToken(request);
        return ApiResponse.<IntrospectResponse>builder()
                .code(200)
                .result(result)
                .build();
    }
}
