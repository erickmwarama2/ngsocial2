import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-express";
import { readFileSync } from "fs";
import { GraphQLSchema } from "graphql";
import resolvers from "./resolvers";

const typeDefs = gql`${readFileSync(
    __dirname.concat('/schema.graphql'), 'utf-8'
)}`;

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;