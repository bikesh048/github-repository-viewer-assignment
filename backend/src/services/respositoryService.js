const axios = require('axios');
const config = require('../../config');
// src/services/userService.js
const respositoryService = async (username) => {
  // Your user service logic goes here
  try {
    // Fetch repositories from GitHub API
    const url = `${config.githubEnpoint}/${username}/repos`;

    const response = await axios.get(url);

    // Process the API response and return relevant information
    const repositories = response.data.map((repo) => ({
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      stargazers_url: repo.stargazers_url,
      language: repo.language,
      description: repo.description,
      updated_at: repo.updated_at,
      html_url: repo.html_url,
    }));

    return repositories;
  } catch (error) {
    // Handle errors, e.g., when GitHub username is not found
    throw error;
  }
};

module.exports = { respositoryService };
