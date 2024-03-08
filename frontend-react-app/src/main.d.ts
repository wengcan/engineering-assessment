interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
}

interface Location {
    type: string;
    coordinates: number[];
}

interface FoodTruckItem {
    id: string;
    locationid: number;
    cnn: number;
    blocklot: string;
    block: string;
    lot: string;
    permit: string;
    dayshours: string;
    location: Location;
    address: string;
    received: number;
    priorPermit: number;
    zipCodes: number;
    applicant: string;
    foodItems: string;
    schedule: string;
    status: string;
    policeDistricts: number;
    supervisorDistricts: number;
    facilityType: string;
    locationDescription: string;
    expirationDate: string;
    firePreventionDistricts: number;
}

interface FoodTruckData extends Page<FoodTruckItem> {}