# Gatsby Project

## What is Gatsby?

Static site generator - Originally created mainly to build static sites however now a full blown framework.

- Code splitting, fast page loads, image optimization, data prefetching etc etc...

Uses server side rendering like Next

GraphQL - query language that gives only the data requested, can pull from multiple sources with a single API call

## Ideas

- https://graphql-weather-api.herokuapp.com/

- Static site with multiple pages

Component Tree

- App

const [place, setPlace] = ("")
Handed down to Home Page aswell as Weather Page

- Home Page

  - Header
  - Text Input - To put the name of the place
  - Submit Button - Redirects to weather page using router

- Weather Page
  - Text (Weather data fetched from API)

type Weather (name: "Miami") {
Weather Information

## Differences between Gatsby and react app?

- Router
- Fetch method
