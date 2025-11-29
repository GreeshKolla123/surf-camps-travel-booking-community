# surf-camps-travel-booking-community

A responsive web application for a travel booking and community platform focused on surf camps.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/iDPu9k4ToTRIUNbmTPW4VF/Free-Website-Template-%7C-Surf-Camps---Travel-Booking-Agency--Community-?node-id=388-8389&t=yZyHMzNDjHCHPP2m-1))

## Project Structure

```
surf-camps-travel-booking-community/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- Search and filter surf camps
- View surf camp details and photos
- Book a surf camp
- Leave a review for a surf camp
- Connect with other surfers and join groups
- Create and manage surf camp listings

## API Endpoints

- `GET /api/surf-camps` - Retrieve a list of surf camps
- `GET /api/surf-camps/:id` - Retrieve a surf camp by ID
- `POST /api/surf-camps` - Create a new surf camp
- `PUT /api/surf-camps/:id` - Update a surf camp
- `DELETE /api/surf-camps/:id` - Delete a surf camp
- `POST /api/bookings` - Create a new booking
- `GET /api/reviews` - Retrieve a list of reviews for a surf camp

## License

MIT
