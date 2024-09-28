require("dotenv/config");
var express = require("express");
var cors = require("cors");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var envalid = require("envalid");
var { ruruHTML } = require("ruru/server");

const { PORT, API_ENDPOINT, IDE_ENDPOINT } = envalid.cleanEnv(process.env, {
  PORT: envalid.port({ default: 4000 }),
  API_ENDPOINT: envalid.str({ default: "/graphql" }),
  IDE_ENDPOINT: envalid.str({ default: "/" }),
});

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello() {
    return "Hello World, from the GraphQL server!";
  },
};

var app = express();

app.use(cors());

// Create and use the GraphQL handler.
app.all(
  API_ENDPOINT,
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// Serve the GraphiQL IDE.
app.get(IDE_ENDPOINT, (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: API_ENDPOINT }));
});

// Start the server at port
app.listen(PORT);
console.log(`Server running at http://localhost:${PORT}`);
console.log(`GraphQL API available at http://localhost:${PORT}${API_ENDPOINT}`);
console.log(
  `GraphQL IDE 'GraphiQL' available at http://localhost:${PORT}${IDE_ENDPOINT}`
);
