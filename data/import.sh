#! /bin/bash
mongoimport --host mongodb --db Mobile_Food_Facility_Permit --collection documents --type json --file /data/Mobile_Food_Facility_Permit.json --jsonArray