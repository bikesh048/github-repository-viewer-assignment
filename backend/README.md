# GitHub Repositories API

This Fastify-based backend API fetches a GitHub user's repositories using the GitHub API and provides relevant information to the frontend.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone repository
cd backend
npm install
npm run dev
```

The server will be running at http://localhost:4000.

### Endpoints

# Fetch GitHub Repositories

Endpoint: /repositories/:username
Method: GET
Description: Fetches the list of repositories for the given GitHub username.

Example: http://localhost:4000/repositories/bikesh048

Response Format
The API returns a JSON object with information about the user's repositories, including the repository name and URL.

```bash
[
    {
        "name": "string",
        "stargazers_count": "number",
        "forks": "number",
        "language": "string",
        "description": "string",
        "update_at": "string",
        "html_url": "string"
    },
    // ...
]

```

### Built With

Fastify - The web framework used
Node.js - The JavaScript runtime
GitHub API - Used for fetching GitHub repositories
