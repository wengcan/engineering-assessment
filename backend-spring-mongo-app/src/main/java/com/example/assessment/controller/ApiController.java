package com.example.assessment.controller;
import com.example.assessment.entity.MyDocument;
import com.example.assessment.service.MongoService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    private final MongoService  mongoService;

    @Autowired
    public ApiController(MongoService  mongoService) {
        this.mongoService = mongoService;
    }


    @GetMapping("/documents")
    public Page<MyDocument> getAllDocuments(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam(required = false) Double radius,
            @RequestParam(required = false) String foodItem
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Query query = new Query();
        if (latitude != null && longitude != null && radius != null
        ) {
            double radiusInRadians = radius / 6371.0;
            Point point = new Point(longitude, latitude);
            query.addCriteria(Criteria.where("Location").nearSphere(point).maxDistance(radiusInRadians));
        }

        if (foodItem != null && !foodItem.isEmpty()) {
            Criteria foodItemCriteria = Criteria.where("FoodItems").regex(foodItem, "i");
            query.addCriteria(foodItemCriteria);
        }

        return mongoService.findAllDocuments(query, pageable);
    }
}
