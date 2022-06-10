import { define } from "typeorm-seeding";
import { Post } from "../../entity/Post";
// import { define } from 'typeorm-factories';


var faker = require('faker');

define(Post, (faker1: typeof faker) => {
    const post = new Post();
    post.text = faker.lorem.text();
    post.image = faker.image.imageUrl();
    post.commentsCount = 100;
    post.likesCount = 200;
    post.latestLike = faker.name.findName();
    post.createdAt = faker.date.past();
    return post;
});