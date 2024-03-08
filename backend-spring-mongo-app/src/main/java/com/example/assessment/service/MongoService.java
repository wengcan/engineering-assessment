package com.example.assessment.service;
import com.example.assessment.entity.MyDocument;
import com.example.assessment.repository.MyDocumentRepository;
import com.mongodb.BasicDBObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort.Direction;

import java.util.ArrayList;
import java.util.List;

@Service
public class MongoService {

//    @Autowired
//    private MyDocumentRepository documentRepository;


    private MongoTemplate mongoTemplate;

    @Autowired
    public MongoService(MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }


    public Page<MyDocument> findAllDocuments(Query query, Pageable pageable ) {
        System.out.print(query);
        long total = mongoTemplate.count(query, MyDocument.class);
        query.with(pageable);
        List<MyDocument> documents = mongoTemplate.find(query, MyDocument.class);
        return new PageImpl<>(documents, pageable, total);
    }



}
