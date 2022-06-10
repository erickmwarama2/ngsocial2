import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity('likes')
export class Like {
    @PrimaryGeneratedColumn() id: number;
    @CreateDateColumn() createdAt: Date;

    @ManyToOne(type => User, user => user.likes, {
        onDelete: 'CASCADE'
    })
    user: User;

    @ManyToOne(type => Post, post => post.likes, {
        onDelete: 'CASCADE'
    })
    post: Post;
}