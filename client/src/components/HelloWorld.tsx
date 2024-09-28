import React from "react";
import { useQuery, gql } from "@apollo/client";

const HelloWorldQuery = gql`
  query HelloWorldQuery {
    hello
  }
`;

export function HelloWorld() {
  const { loading, error, data } = useQuery(HelloWorldQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <p>{data.hello}</p>;
}
