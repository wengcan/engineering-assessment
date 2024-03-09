# engineering-assessment
An engineering assessment based on the [peck/engineering-assessment](https://github.com/peck/engineering-assessment) repository
## overview

### screenshot:
![screenshot of the app](./assets/FireShot%20Capture%20007%20-%20Vite%20+%20React%20-%20localhost.png "screenshot of the app")


### Database:

`Mongo DB`

### Backend:

`Spring Boot` , `Spring Data` 

### Frontend:

`TypeScript`,`React` , `tailwind`, `zustand` , `Leaflet`, `Vite` 

### Testing:

`jest`,`@testing-library`

### Deployment:

`docker-compose`, `github actions`


## How to Run

1. **Setup Database:**
   - Create a MongoDB database either by using `docker-compose run` or utilizing [MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/).
  
2. **Import Data and Create Index:**
   - Import JSON data into the database and ensure to create necessary indexes for efficient querying.

3. **Build or Download Artifacts:**
   - Compile the backend and frontend projects, or opt to download ready-made artifacts from GitHub. If choosing the latter, note that pre-built artifacts from GitHub specify the API host as `http://127.0.0.1:8080`. To adapt to different hosts, create an `.env` file with the following content:
     ```
     VITE_API_HOST=YOUR API HOST
     ```
     Afterward, execute the command:
     ```
     npm run build
     ```


4. **Configure Application Properties:**
   - Create a file named `application.properties` and include the following content:
     ```
     spring.data.mongodb.uri=YOUR MONGODB URI
     ```

5. **Run Backend:**
   - Execute `java -jar xxx.jar --spring.config.location=YOUR application.properties PATH` to launch the backend artifact.

6. **Serve Frontend:**
   - Place the frontend artifact into an Nginx or any other server's static files directory to serve it.

## Q&A

### Why Choose MongoDB as the Database?
- MongoDB offers geospatial indexing and querying capabilities, making it ideal for storing and retrieving location-based data efficiently.

### Why Write a Python Script to Generate the JSON Data Instead of Importing CSV to MongoDB Directly?

- The primary reason is to convert the locations in the CSV file into [GeoJSON](https://www.mongodb.com/docs/manual/reference/geojson/)  objects. This allows for the utilization of max distance queries to find the nearest location efficiently.

### Why Use MongoTemplate Instead of MongoRepository?

- `mongoTemplate` provides greater flexibility compared to MongoRepository. In this project, dynamic queries were required, making MongoTemplate a better choice.

### What Fields Are Handled in the RESTful API?

- For assessment purposes, only food items and location-related fields are handled in the RESTful API.

### What React Related APIS were used?

- Functional Components, Controllable Components,Hooks (Including Custom Hooks), Refs & ForwardRefs , Dynamic Imports.