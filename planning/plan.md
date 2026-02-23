# Planning

This folder contains the planning documents created before building the frontend

## Contents

- **component-tree.png** — Component tree diagram showing the main components, their relationships, which components fetch data, where state is held, and how data flows via props.
- **wireframes.png** — Mobile-first wireframes for each route: Home, Article, Post Article, and Error/404.

## Routes

| Path                    | Page                                                       |
| ----------------------- | ---------------------------------------------------------- |
| `/`                     | Home — article list with sort/filter and pagination        |
| `/articles/:article_id` | Article — full article, voting, comments, add comment form |
| `/articles/new`         | Post Article — form to submit a new article                |
| `/*`                    | Error — 404 / something went wrong                         |

## Key Decisions

- **Header** is a single reusable component - this will be rendered outside routes so that it appears on every page
- **VoteButtons** is a reusable component used on both articles and comments

- **Mobile-first** — designed for phone screens, with a bottom nav bar and large tap targets.

- **Hardcoded user** — no authentication currently - user is hardcoded - plan to implement this later on

- **Add comment form** lives on the Article page — no separate route needed.
