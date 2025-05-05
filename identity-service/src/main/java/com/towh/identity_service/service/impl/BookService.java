package com.towh.identity_service.service.impl;

import com.towh.identity_service.dto.request.book.BookCreationRequest;
import com.towh.identity_service.dto.response.ApiResponse;
import com.towh.identity_service.dto.response.BookResponse;
import com.towh.identity_service.entity.Book;
import com.towh.identity_service.mapper.BookMapper;
import com.towh.identity_service.repository.BookRepository;
import com.towh.identity_service.service.IBookService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor // Lombok's annotation to generate a constructor with all final fields
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class BookService implements IBookService {
    BookRepository bookRepository;
    BookMapper bookMapper;

    @Override
    public BookResponse createBook(BookCreationRequest request) {
        Book newBook = Book.builder()
                .name(request.getName())
                .description(request.getDescription())
                .note(request.getNote())
                .price(request.getPrice())
                .build();

        bookRepository.save(newBook);
        return bookMapper.toBookResponse(newBook);
    }

    @Override
    public BookResponse getBookById(Long id) {
        return bookRepository.findById(id)
                .map(bookMapper::toBookResponse)
                .orElseThrow(() -> new RuntimeException("Book not found"));
    }

    @Override
    public BookResponse updateBook(Long id, BookCreationRequest request) {
        Book book = bookRepository.getById(id);
        if (book == null) {
            return null;
        }
        book.setName(request.getName());
        book.setDescription(request.getDescription());
        book.setNote(request.getNote());
        book.setPrice(request.getPrice());

        return bookMapper.toBookResponse(bookRepository.save(book));
    }

    @Override
    public boolean deleteBooks(List<Long> id) {
        bookRepository.deleteAllById(id);
        return true;
    }

    @Override
    public List<BookResponse> getAllBooks() {
        return bookRepository.findAll().stream().map(book -> bookMapper.toBookResponse(book)).toList();
    }
}
