# Nabo Frontend

A Reddit-style news aggregator frontend built with React and Vite. Currently provides the ability to browse articles, filter articles by topic, sort by various criteria, vote on articles, and post/delete comments

## Links

- **Live App:** [https://nabo-news.netlify.app](https://nabo-news.netlify.app)
- **Backend Repo:** [https://github.com/Nasif-Islam/nabo-BE](https://github.com/Nasif-Islam/nabo-BE)

## Project Summary

Nabo is a news aggregation platform where users can:

- Browse a list of articles on the home page
- Filter articles by topic
- Sort articles by date, votes, or comment count
- Read individual articles
- Vote on articles
- Post and delete comments

## Tech Stack

- <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" height="20" style="vertical-align: middle;"> **React** — Component-based UI library for building interactive interfaces

- <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" height="20" style="vertical-align: middle;"> **Vite** — Modern build tool and dev server

- <img src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white" height="20" style="vertical-align: middle;"> **React Router** — Client-side routing library for navigating between pages without full page reloads

- <img src="https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" height="20" style="vertical-align: middle;"> **Axios** — HTTP client for making API requests to the backend

- <img src="https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" height="20" style="vertical-align: middle;"> **Netlify** — Hosting and deployment platform

## Prerequisites

- **Node.js** - minimum version: `v18.0.0`

Check your version of node by running:

```bash
node --version
```

## How to run the project on a local Server

### 1. Clone the Repository

```bash
git clone https://github.com/Nasif-Islam/nabo-FE.git
cd nabo-FE
```

### 2. Install All Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be running at `http://localhost:5173` by default.

## Navigating the App

- **Home page** — displays all articles with sorting controls
- **Topic pages** — click a topic to see related articles
- **Article page** — click an article to read it in full, vote, and view comments
- **Bottom navigation bar** — use to move between Home and Topics pages

## Build for Production

```bash
npm run build
```

This generates a `dist` folder containing the production-ready app.

## Future Enhancements

- User authentication and a dedicated login page
- Pagination or infinite scroll for large lists of articles
- Full dark mode support across all components
- User profile pages displaying activity and posted comments
- Improved responsive design for a wider range of screen sizes
- Migrate to Material UI for consistent styling and improved accessibility across all components

## Credits

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)

## Author

**Nasif Islam**

<p align="left">
  <a href="https://github.com/Nasif-Islam">
    <img src="https://img.shields.io/badge/--Nasif--Islam-181717?style=for-the-badge&logo=github&logoColor=white" height="28" style="vertical-align: middle;">
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/nasiful-islam">
    <img src="https://github.com/Nasif-Islam/my-assets/raw/refs/heads/main/linkedin.svg?v=8" height="28" style="vertical-align: middle;">
  </a>
</p>
