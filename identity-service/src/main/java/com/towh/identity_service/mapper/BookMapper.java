package com.towh.identity_service.mapper;

import com.towh.identity_service.dto.request.book.BookCreationRequest;
import com.towh.identity_service.dto.response.BookResponse;
import com.towh.identity_service.entity.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BookMapper {

    Book toBook(BookCreationRequest bookCreationRequest);

    @Mapping(target = "id", source = "book.id")
    BookResponse toBookResponse(Book book);
}
