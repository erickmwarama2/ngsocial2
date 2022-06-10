import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn() id: number;
    @Column("text") comment: string;
    @CreateDateColumn() createdAt: Date;

    @ManyToOne(type => User, user => user.comments, {
        onDelete: 'CASCADE'
    })
    author: User;

    @ManyToOne(type => Post, post => post.comments, {
        onDelete: 'CASCADE'
    })
    post: Post;
}