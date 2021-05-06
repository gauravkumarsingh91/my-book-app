import Book from 'src/book/book.entity';
import { Profile } from 'src/profile/profile.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToOne(type => Profile, { eager: true })
  @JoinColumn()
  profile: Profile;

  @OneToMany( type => Book , book => book.user, { eager: false })
  books: Book[];
}