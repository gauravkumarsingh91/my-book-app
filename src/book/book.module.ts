import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreModule } from 'src/genre/genre.module';
import { UserModule } from 'src/user/user.module';
import { BookController } from './book.controller';
import Book from './book.entity';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([BookRepository]),
      UserModule,
      GenreModule
  ],
  controllers: [BookController],
  providers: [BookService],
  exports: [TypeOrmModule]
})
export class BookModule {}
