package com.towh.identity_service.service;

import com.towh.identity_service.dto.request.book.BookCreationRequest;
import com.towh.identity_service.dto.response.ApiResponse;
import com.towh.identity_service.dto.response.BookResponse;

import java.util.List;

public interface IBookService {
    BookResponse createBook(BookCreationRequest request);

    BookResponse getBookById(Long id);

    BookResponse updateBook(Long id, BookCreationRequest request);

    boolean deleteBooks(List<Long> id);

    List<BookResponse> getAllBooks();
}
