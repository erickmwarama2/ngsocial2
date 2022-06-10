import { define } from 'typeorm-seeding';
import { Comment } from "../../entity/Comment";

var faker = require('faker');

define(Comment, (faker1: typeof faker) => {
    const comment = new Comment();
    comment.comment = faker.lorem.text();
    comment.createdAt = faker.date.past();
    return comment;
});