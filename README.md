# shopbridge-api

REST Api for ShopBridge react client.

## Introduction

Simple API for inventory management.

## ENV Variables

```console
PORT=<PORT NUMBER>
DB_URL=<URL TO MONGODB ATLAS>
```

### Result

> Every endpoint will return a result object in the below mentioned format

#### Success

```js
{
  success: true,
  variable,
  msg: "Endpoint result message"
}
```

- `success` : boolean
- `variable` : often an endpoint specific key which holds either an array or object
- `msg` : String, a message which can be used as response on frontend

If there's no variable in [`Endpoint's result`](#endpoints) read `msg`

#### Error

```js
{
  success: false,
  error: "Error Message";
}
```

- `success` : boolean
- `msg` : String, a message which can be used as response on frontend

## Local Development

### Install

```
  npm i
```

Install all packages

### Start

```
  npm start
```

Starts the express server.

### Start in development mode

```
  npm run dev
```

Similar to [`start`](#start) but, restarts the server on file change
