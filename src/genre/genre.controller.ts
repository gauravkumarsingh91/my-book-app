import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import CreateGenreDto from './dto/create-genre.dto';
import { GenreService } from './genres.service';

@Controller('genres')
export class GenreController {
    constructor(private readonly genreService: GenreService) { }

    @Post()
    postGenre(@Body() genre: CreateGenreDto) {
        return this.genreService.insert(genre);
    }

    @Get()
    getAll() {
        return this.genreService.getAllGenre();
    }

    // @Get('/:id/books')
    // getBooks( @Param('id', ParseIntPipe) genreID: number ) {
    //     return this.genreService.getBooksOfGenre(genreID);
    // }
}
