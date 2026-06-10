# QuickSlot Backend

Backend service for the QuickSlot sports slot booking application.

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* ES6 Modules

## Features

* List venues
* View available slots by date
* Book slots
* Prevent double booking
* View user bookings
* Cancel bookings
* Lightweight authentication using `X-User-Id` header

## Project Structure

```text
src/
├── config/
│   └── db.js
├── constants/
│   ├── users.js
│   └── slots.js
├── controllers/
│   ├── bookingController.js
│   ├── userController.js
│   └── venueController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Booking.js
│   └── Venue.js
├── routes/
│   ├── bookingRoute.js
│   ├── userRoute.js
│   └── venueRoute.js
└── seed/
    └── seedData.js
```

## Setup

### Install dependencies

```bash
npm install
```

### Create .env

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string
```

### Run server

```bash
npm run dev
```

Server starts at:

```text
https://quickslot-5.onrender.com
or
http://localhost:5000
```

## API Endpoints

### Get Venues

```http
GET /venues
```

### Get Slots

```http
GET /venues/:id/slots?date=YYYY-MM-DD
```

### Create Booking

```http
POST /bookings
```

Headers:

```http
X-User-Id: user1
```

Body:

```json
{
  "venueId": "VENUE_ID",
  "bookingDate": "2026-06-10",
  "slotTime": "10:00"
}
```

### User Bookings

```http
GET /users/user1/bookings
```

### Cancel Booking

```http
DELETE /bookings/:id
```

Headers:

```http
X-User-Id: user1
```

## Authentication

Authentication is intentionally lightweight.

The application uses hardcoded users and expects an `X-User-Id` header on protected endpoints.

Example:

```http
X-User-Id: user1
```

## Concurrency Handling

The most important requirement of the project is preventing double booking.

MongoDB enforces this using a unique compound index:

```javascript
{
  venueId: 1,
  bookingDate: 1,
  slotTime: 1
}
```

This guarantees that only one booking can exist for a venue, date, and time combination.

If two users attempt to book the same slot simultaneously:

* First request succeeds
* Second request fails
* API returns HTTP 409 Conflict

## Future Improvements

* JWT Authentication
* WebSocket based live slot updates
* Unit tests
* Docker support
* Admin dashboard
