# ChainPulse

ChainPulse is a simple Web3 community analytics dashboard built with React and Vite. It is designed for a portfolio where the developer has community management experience and practical React knowledge.

The project presents a realistic angle: a community manager who understands developer communities can build clean frontend tools to track events, onboarding, engagement, and ecosystem growth.

## Features

- Modern SaaS-style dashboard UI
- Responsive layout for desktop and mobile
- Home page with a clear product title and dashboard button
- Dashboard metrics using reusable stat cards
- Community list rendered from a data file with `map()`
- Events page with a live-only filter using `useState`
- React Router navigation across pages
- Community manager positioning through onboarding, event follow-up, ambassador support, and developer engagement content
- Beginner-friendly implementation that still feels like a professional dashboard
- Simple Solidity smart contract backend for storing community and event records

## Components

- `Navbar.jsx`: Shared navigation using `NavLink` from React Router.
- `StatCard.jsx`: Reusable card for dashboard numbers.
- `CommunityCard.jsx`: Displays one Web3 community using props.
- `EventCard.jsx`: Displays one event, its community goal, follow-up action, and conditional status styling.
- `ContractPanel.jsx`: Explains the Solidity backend inside the dashboard UI.

## Solidity Backend

The project includes `contracts/ChainPulseRegistry.sol`, a beginner-friendly Solidity contract that acts as the Web3 backend.

It includes:

- `Community` struct for community analytics
- `CommunityEvent` struct for event analytics
- `mapping` storage for records by ID
- `onlyOwner` modifier for protected updates
- Solidity events for community and event changes
- Getter functions for reading community and event data

This project does not connect the React app to a wallet yet, because the portfolio goal is to keep the frontend clean and explainable. In a production version, the React app could connect to the contract with ethers or viem.

## Portfolio Angle

This project is built to show a mixed profile:

- Community management experience in Web3
- Understanding of developer onboarding and event operations
- Ability to organize community information into a useful dashboard
- Practical React skills without unnecessary complexity
- Basic Solidity understanding for Web3 data storage
- Clear communication through UI content and component structure

## React Concepts Used

- Functional components for every page and component
- Props to pass data into card components
- `useState` on the Events page and Dashboard page
- `useEffect` on the Dashboard page to simulate preparing dashboard data
- React Router for page navigation
- Conditional rendering for loading text and event status
- Rendering lists with `array.map()`

## How To Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```
