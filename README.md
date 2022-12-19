# Node API Proxy Server

A server used for hiding API keys, rate limiting and caching. This uses the [OpenWeather API](https://openweathermap.org/api). Follow-up code from Brad Traversy's [YouTube tutorial](https://www.youtube.com/watch?v=ZGymN8aFsv4).

## Running locally
---
### Install Dependencies
```bash
$ npm install
```
### Run on http://localhost:5000
```bash
$ npm run dev
```
Add a .env file in project root with the following content
```
API_BASE_URL="https://openweathermap.org/data/2.5/weather"
API_KEY_NAME="appid"
API_KEY_VALUE="<YOUR OpenWeather API Key>"
```
The project is hosted on Heroku and can be accessed here: https://wild-plum-reindeer-coat.cyclic.app/

