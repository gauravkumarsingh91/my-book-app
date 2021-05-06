import Book from 'src/book/book.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export default class Genre {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // n:n relation with genre bi-directional
  // @ManyToMany(type => Book, book => book.genres)
  // books: Book[];

}