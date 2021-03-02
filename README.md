# OpenPix Frontend Integration

This is a simple React app that consumes the Node Backend Integration using OpenPix

It will generate a donation based on Pix and render it in a QRCode

## Setup
Generate a [App ID](https://developers.openpix.com.br/docs/plugin/app-id) in your OpenPix Account

Run the [Node Backend Integration](https://github.com/Open-Pix/node-backend-integration) code

Create a .env file with the following data

```jsx
PORT=5667
API_URL=http://localhost:5666
```

## Running

```jsx
yarn start
```
