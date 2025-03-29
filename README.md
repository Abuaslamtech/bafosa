# BAFOSA Annual Sallah Convention Website

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **BAFOSA Annual Sallah Convention Website** is a web application designed to promote and provide essential information about the **Baba Ahmad Foundation Old Students' Association's (BAFOSA)** annual Sallah convention. The platform includes sections detailing the convention, event schedule, contribution methods, and a feature that enables users to create and share personalized flyers on social media.

## Features

- **Responsive Design** - Fully optimized for seamless experience across devices.
- **Navigation Tabs** - Easy navigation between different sections of the website.
- **Event Schedule** - Detailed itinerary of the convention’s events.
- **Contribution Information** - Guidelines for financial and other forms of contributions.
- **Personalized Flyer Generation** - Users can create and download flyers featuring their name and photo.
- **Social Media Sharing** - Encourages users to share personalized flyers on social platforms.

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation.
- **Tailwind CSS** - Utility-first CSS framework for efficient styling.
- **Lucide React** - Lightweight SVG icons.
- **html-to-image** - Library for converting HTML elements to images.
- **file-saver** - Client-side library for file downloads.
- **Swiper** - Modern mobile-first JavaScript slider.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** and **npm** (or **yarn**)
- Basic knowledge of **React** and **Next.js**

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/bafosa-website.git
   ```

2. Navigate to the project directory:
   ```sh
   cd bafosa-website
   ```

3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the website in action.

## Project Structure

```sh
bafosa-website/
├── app/
│   ├── components/
│   │   ├── Flyer.tsx
│   │   ├── Hero.jsx
│   │   ├── Memories.tsx
│   │   ├── Navbar.tsx
│   ├── eid/
│   │   ├── page.tsx
│   ├── Sallah-convention/
│   │   ├── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── package.json
├── README.md
```

### Folder Breakdown

- **app/** - Contains core Next.js application files.
  - **components/** - Reusable React components.
  - **eid/** - Page related to Eid celebrations.
  - **Sallah-convention/** - Dedicated page for the convention.
  - **globals.css** - Global styling file.
  - **layout.tsx** - Layout component for consistent UI.
  - **page.tsx** - Home page file.
- **package.json** - Defines project dependencies and scripts.
- **README.md** - Documentation for the project.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Added new feature"
   ```
4. Push your changes:
   ```sh
   git push origin feature-name
   ```
5. Create a pull request to merge into the main branch.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

