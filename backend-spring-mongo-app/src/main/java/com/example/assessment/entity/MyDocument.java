package com.example.assessment.entity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import lombok.Data;

@Data
@Document(collection = "documents")
public class MyDocument {
    @Id
    private String id;
    private int locationid;
    private String Applicant;
    private String FacilityType;
    private int cnn;
    private String LocationDescription;
    private String Address;
    private String blocklot;
    private String block;
    private String lot;
    private String permit;
    private String Status;
    private String FoodItems;
    private String Schedule;
    private String dayshours;
    private int Received;
    private int PriorPermit;
    private String ExpirationDate;
    private GeoLocation Location;
    private int FirePreventionDistricts;
    private int PoliceDistricts;
    private int SupervisorDistricts;
    private int ZipCodes;
}
