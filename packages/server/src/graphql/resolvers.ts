import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
    Query: {
        message: () => 'It works very well!'
    }
};

export default resolvers;