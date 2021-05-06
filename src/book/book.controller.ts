import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export class BookController {

    constructor(
        private readonly bookService: BookService
    ) { }

    @Post()
    async create(@Body() bookDto: CreateBookDto) {
        return this.bookService.insert(bookDto);
    }

    @Get()
    async getAll() {
        return this.bookService.getAllBooks();
    }

    @Get('/:id')
    async getbyId(@Param('id', ParseIntPipe) bookID: number) {
        return this.bookService.getBookById(bookID);
    }

    @Get('/:id/genres')
    getBooks( @Param('id', ParseIntPipe) bookID: number ) {
        return this.bookService.getGenresOfBook(bookID);
    }

    @Put('/:id')
    async updateById(@Param('id', ParseIntPipe) bookID: number, @Body() bookDto: CreateBookDto) {
        return this.bookService.updateById(bookID, bookDto);
    }

    @Delete('/:id')
    async deleteById(@Param('id', ParseIntPipe) bookID: number) {
        return this.bookService.deleteById(bookID);
    }
}
