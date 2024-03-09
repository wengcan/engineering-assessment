#! /bin/bash
mongoimport --host mongodb --db Mobile_Food_Facility_Permit --collection documents --type json --file /data/Mobile_Food_Facility_Permit.json --jsonArray

mongo mongodb <<EOF
use Mobile_Food_Facility_Permit
db.documents.createIndex({"Location": "2dsphere"})
EOF