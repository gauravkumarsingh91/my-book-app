import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import User from 'src/user/user.entity';
import Genre from 'src/genre/genre.entity';

@Entity()
export default class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  // n:1 relation with books
  @ManyToOne(type => User, user => user.books)
  user: User;

  // n:n relation with genre
  @ManyToMany(type => Genre)
  @JoinTable()
  genres: Genre[];

  // n:n relation with genre bi-directional
  // @ManyToMany(type => Genre, genre => genre.books)
  // @JoinTable()
  // genres: Genre[];
}