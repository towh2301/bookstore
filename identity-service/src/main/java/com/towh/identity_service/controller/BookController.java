package com.towh.identity_service.controller;

import com.towh.identity_service.dto.request.book.BookCreationRequest;
import com.towh.identity_service.dto.response.ApiResponse;
import com.towh.identity_service.dto.response.BookResponse;
import com.towh.identity_service.service.IBookService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.security.authorization.AuthorityReactiveAuthorizationManager.hasRole;

@Slf4j
@RestController
@RequestMapping("/book") // It helps us to create a base URL for all the endpoints in the controller
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class BookController {
    IBookService bookService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<BookResponse> createBook(@RequestBody BookCreationRequest request) {
        return ApiResponse.success(bookService.createBook(request));
    }

    @GetMapping("/get-all")
    public ApiResponse<List<BookResponse>> getAllBooks() {
        return ApiResponse.success(bookService.getAllBooks());
    }

    @PutMapping("/{id}/update")
    public ApiResponse<BookResponse> updateBookById(@PathVariable Long id, BookCreationRequest request) {
        return ApiResponse.success(bookService.updateBook(id, request));
    }

    @DeleteMapping("/{id}/delete")
    public ApiResponse<BookResponse> deleteBookById(@PathVariable Long id) {
        bookService.deleteBooks(List.of(id));
        return ApiResponse.empty();
    }
}
