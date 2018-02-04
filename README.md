## Description

- This module is for providing whole system's **custom error types**.

## Note

1. Since it seems bitbucket branch tag doesn't work for `npm install`, so we use **master** branch.

## Explanation

- Designed three categories of errors:

  1. user

    - This category of error will be showed to end user for letting the end user **generally** know what happened in our system.

  2. client

    - This category of error is designed for informing our clients(desktop app, web app, android app, ios app) what happened in our server side, os they can decide and proceed corresponding actions.

  3. internal

    - This category of error is designed only for internal using, for RPC server side informing RPC client side what happened, and so RPC client side can proceed corresponding strategy to make sure the request be successfully fulfilled or let supervisor decide what to do.

    - The captured error stack trace is only for debugging and analysing use, when transfer error info on wire, the **errCode** is more than sufficient.

## Usages

  const errors = require('microservice-errors');

  // throw errors.user.InvalidUserCredentials;

  // throw errors.client.InvalidTokens

  callback(errors.internal.RequestTimeout.errCode);


