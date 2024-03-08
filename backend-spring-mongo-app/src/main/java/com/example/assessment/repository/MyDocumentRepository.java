package com.example.assessment.repository;
import com.example.assessment.entity.MyDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;


public interface MyDocumentRepository extends MongoRepository<MyDocument, String> {
//    @Query("{'fieldName': ?0}")
//    List<MyDocument> findByFieldName(String value);
}
