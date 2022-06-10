import express, { Application } from 'express';

import { ApolloServer, Config, gql } from 'apollo-server-express';
import { IResolvers } from '@graphql-tools/utils';
import schema from './graphql/schema';
// import casual from 'casual';

import cors from 'cors';
import 'reflect-metadata';
import { Connection, createConnection, DataSource } from 'typeorm';
import { default as connection } from './datasource';

const PORT = 8088;
const app: Application = express();

let postsIds: string[] = [];
let usersIds: string[] = [];

// const mocks = {
//     User: () => ({
//         id: () => {let uuid = casual.uuid; usersIds.push(uuid); return uuid;},
//         fullName: casual.full_name,
//         bio: casual.text,
//         email: casual.email,
//         username: casual.username,
//         password: casual.password,
//         image: 'https://picsum.photos/seed/picsum/200/300',
//         coverImage: 'https://picsum.photos/seed/picsum/200/300',
//         postsCount: () => casual.integer(0)
//     }),
//     Post: () => ({
//         id: () => {let uuid = casual.uuid; postsIds.push(uuid); return uuid;},
//         author: casual.random_element(usersIds),
//         text: casual.text,
//         image: 'https://picsum.photos/seed/picsum/200/300',
//         commentsCount: () => casual.integer(0),
//         likesCount: () => casual.integer(0),
//         latestLike: casual.first_name,
//         createdAt: () => casual.date()
//     }),
//     Comment: () => ({
//         id: casual.uuid,
//         author: casual.random_element(usersIds),
//         comment: casual.text,
//         post: casual.random_element(postsIds),
//         createdAt: () => casual.date()
//     }),
//     Like: () => ({
//         id: casual.uuid,
//         post: casual.random_element(postsIds),
//         user: casual.random_element(usersIds)
//     }),
//     Query: () => ({
//         getPostsByUserId: () => [...new Array(casual.integer(10, 100))],
//         getFeed: () => [...new Array(casual.integer(10, 100))],
//         getNotificationsByUserId: () => [...new Array(casual.integer(10, 100))],
//         getCommentsByPostId: () => [...new Array(casual.integer(10, 100))],
//         getLikesByPostId: () => [...new Array(casual.integer(10, 100))],
//         searchUsers: () => [...new Array(casual.integer(10, 100))]
//     })
// };

// const connection: Promise<Connection> = createConnection();

connection.initialize().then(() => {
    startApolloServer();
}).catch((error: any) => console.log("Database connection error: ", error));

async function startApolloServer() {

    const PORT = 8080;
    const app: Application = express();

    app.use(cors());

    const server: ApolloServer = new ApolloServer({schema});

    await server.start();

    server.applyMiddleware({
        app,
        path: '/graphql'
    });

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}

// startApolloServer();

// app.get('/', (req, res) => {
//     res.send('Express is successfully running');
// });

// app.listen(PORT, ()=> {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });