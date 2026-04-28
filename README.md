# pokemon-automation
This repository contains an end-to-end automation testing project using Playwright. The main objective of this project is to simulate user interaction flow on a web application, including navigation, search, selection, and scrolling behavior.


## Tech Stack
- Playwright
- Node.js
- JavaScript

## Test Scenario
Automated test covers the following steps:
1. Open Pokemon website
2. Click on "Pokedex" CTA
3. Search for "Pikachu"
4. Select "Pikachu" from search results
5. Scroll down to show Pikachu details
6. Click "Explore More Pokemon"
7. Scroll down the Pokemon list

## Important Note
During execution, the target website ('pokemon.com') may return **Access Denied (Error 15)** due to anti-bot protection mechanisms.
Because of this limitation:
- Full UI interaction may not always be available
- Test focuses on automation structure

## Test Artifacts
This project includes:
- Video recording (on failure)
- Screenshots (on failure)
- Trace viewer (on first retry)
