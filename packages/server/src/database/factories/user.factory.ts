import { define } from 'typeorm-seeding';
import { User } from '../../entity/User';
// import { define } from 'typeorm-factories';


var faker = require('faker');

define(User, (faker1: typeof faker) => {
    const user = new User();
    user.fullName = faker.name.findName();
    user.bio = faker.lorem.sentences();
    user.email = faker.internet.email();
    user.username = faker.internet.userName();
    user.password = faker.internet.password();
    user.image = faker.image.imageUrl();
    user.coverImage = faker.image.imageUrl();
    user.postsCount = 200;
    user.createdAt = faker.date.past();
    return user;
});