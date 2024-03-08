package com.example.assessment.entity;

import lombok.Data;

@Data
public class GeoLocation {
    private String type;
    private double[] coordinates;
}