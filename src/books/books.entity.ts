
import { Author } from "src/authors/authors.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    isbn: string;
    @Column()
    year: number;
    @Column()
    published: string;
    @OneToMany((_type) => Author, (author) => author, { eager: false })
    authors: Author[];
}