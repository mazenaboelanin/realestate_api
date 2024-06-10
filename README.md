# Realestate API

This is a React web application that lists apartments and their details


## Features
- Apartment Create API:
  - Endpoint Example: POST `http://localhost:5000/api/v1/apartments`
  - User can create a new Apartment with data specified in the Body

- Apartment Listing API:
  - Endpoint Example 1: GET `http://localhost:5000/api/v1/apartments?page=${pageNumber}&countPerPage=${count}`
  - Endpoint Example 2: GET `http://localhost:5000/api/v1/apartments?page=${pageNumber}&countPerPage=${count}&filterBy={"area":{"min":150,"max":170},"price":{"min":1.6,"max":2}}&orderBy={"orderBy":"price","orderType":"DESC"}`
  - Users can get a huge list of apartments
  - Apartments paginated
  - Filter by:
      - Area, Price
  - Order by:
      - Date, Area, Price 
  - Get total pages count depending on the apartments count

- Apartment Details API: 
  - Endpoint Example: GET `http://localhost:5000/api/v1/apartments/${id}`
  - User can have details about each department
    - Details: Reception, Rooms, bathrooms, kitchens
    - Money: Payment Types, Apartment Price
    - State: Finished, Finished Date if not finished
- Cases Handled:
  - Empty State when no data found
  - Error handling when error occurs

## Installation

Before you can run this project, you must have Node.js, npm installed on your machine.

1. Clone this repository:

```bash
git clone <repository-url>
```

2. Navigate into the project directory:

```bash

cd <project-directory>
```

3. Install the dependecies:

```bash
npm install
```

4. Running DB before runnning the API
- PLEASE create a new postgres DB named: realestate ' you will find the info in database.ts'

## Running The API
- running the API using Nodemon to have the live reload behavior

```bash
npm run dev
```

## Future Plan

- adding Filters to filter apartments according to Finished, and Compound
