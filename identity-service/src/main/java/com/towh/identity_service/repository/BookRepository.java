package com.towh.identity_service.repository;

import com.towh.identity_service.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
