# Realestate API

This is a React web application that lists apartments and their details


## Features
- Apartment Create API:
  - Endpoint Example: POST `http://localhost:5000/api/v1/apartments`
  - User can create a new Apartment with data specified in the Body

- Apartment Listing API:
  - Endpoint Example: GET `http://localhost:5000/api/v1/apartments?page=${pageNumber}&countPerPage=${count}`
  - Users can get a huge list of apartments
  - Apartments paginated
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
  - Loading indicator
  - Page Not Found Handling

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

## Running The API
- running the API using Nodemon to have the live reload behavior

```bash
npm run dev
```

## Future Plan

- adding Filters to filter apartments according to areas, compounds and other criterias
