import { Injectable } from '@nestjs/common';
import Genre from 'src/genre/genre.entity';
import { GenreRepository } from 'src/genre/genre.repository';
import { UserRepository } from 'src/user/user.repository';
import { DeleteResult } from 'typeorm';
import Book from './book.entity';
import { BookRepository } from './book.repository';
import CreateBookDto from './dto/create-book.dto';

@Injectable()
export class BookService {

    constructor(
        private readonly bookRepository: BookRepository,
        private readonly userRepository: UserRepository,
        private readonly genreRepository: GenreRepository
    ) {
    }

    async insert(bookDetails: CreateBookDto): Promise<Book> {
        const { name, userID, genreIDs } = bookDetails;
        const book = this.bookRepository.create();
        book.name = name;
        book.user = await this.userRepository.findOne(userID);
        book.genres = [];
        for (let i = 0; i < genreIDs.length; i++) {
            const genre = await this.genreRepository.findOne(genreIDs[i]);
            book.genres.push(genre);
        }
        await this.bookRepository.save(book);
        return book;
    }

    async updateById(bookID: number, bookDetails: CreateBookDto): Promise<Book> {
        return this.bookRepository.save({ ...bookDetails, id: bookID });
    }

    async getAllBooks(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async getBookById(bookID: number): Promise<Book> {
        return this.bookRepository.findOne({ where: { id: bookID }, relations: ['user', 'genres']});
    }

    async getGenresOfBook(bookID: number): Promise<Genre[]> {
        const book = await this.bookRepository.findOne({ where: { id: bookID }, relations: ['genres']});
        return book.genres;
    }

    async deleteById(bookID: number): Promise<DeleteResult> {
        try {
            await this.bookRepository.findOneOrFail(bookID);
            return this.bookRepository.delete(bookID);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}
