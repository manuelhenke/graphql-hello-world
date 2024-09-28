# GraphQL Hello World Application

This is a basic hello world application to test out the interplay between a React app and a GraphQL-based backend. Also, with added authentication and authorization to certain resources.

## Preliminaries

- node v16.20.2 (preferably use `nvm`)

## Installation

The repository is set up as a monorepo. Having the frontend as React app in the `client` directory and the backend as Express and GraphQL-based server in the `server` directory. Both have their individual npm dependencies in their corresponding `package.json` files. The node_modules will be hoisted for all packages at root level.

```sh
# selects the right node version, used in this project
nvm use # this step is optional

# installs all dependencies including the packages
npm i
```

## Start the Application

You can start the application by navigating to the corresponding package at execute the `build` and `start` npm script for production or the `dev` npm script for development with HMR. Or you can start the npm scripts at root level concurrently.

### Production Mode

```sh
# builds the individual packages concurrently
npm run build

# starts the individual packages in production mode concurrently
npm run start
```

### Development Mode

Although starting the client and server concurrently at root level comes in handy, it is recommended to start two individual terminals and start the applications independently to have a more insightful and not mixed-up console output for both the applications.

#### Package Level

```sh
# Terminal 1

cd client/

# starts the client in development mode
npm run dev
```

```sh
# Terminal 2

cd server/

# starts the server in development mode
npm run dev
```

#### Root Level

```sh
# starts the individual packages in development mode concurrently
npm run dev
```

## Further Resources

- [GraphQL Tutorial](https://graphql.org/graphql-js/)
- [Relay - React client for GraphQL](https://relay.dev/docs/tutorial/intro/)
- [GraphQL Client Library Comparison](https://hasura.io/blog/exploring-graphql-clients-apollo-client-vs-relay-vs-urql)
