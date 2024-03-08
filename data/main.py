import csv
import json

def transform_location(lat: str, lon: str):
    return {"type": "Point", "coordinates": [float(lon),float(lat)]}

def csv_to_json(csv_file_path):
    json_data = []
    with open(csv_file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            row['Location'] = transform_location(row['Latitude'], row['Longitude'])
            for key in ["cnn","locationid"]:
                row[key] = int(row[key]) if row[key] != '' else None
            del row['Latitude']
            del row['Longitude']
            json_data.append(row)
    return json_data

def save_json(data, json_file_path):
    with open(json_file_path, 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

if __name__ == "__main__":
    csv_file_path = 'Mobile_Food_Facility_Permit.csv' 
    json_file_path = 'Mobile_Food_Facility_Permit.json' 
    
    json_data = csv_to_json(csv_file_path)
    save_json(json_data, json_file_path)