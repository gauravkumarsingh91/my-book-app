import { Injectable } from '@nestjs/common';
import CreateGenreDto from './dto/create-genre.dto';
import Genre from './genre.entity';
import { GenreRepository } from './genre.repository';

@Injectable()
export class GenreService {

    constructor(
        private readonly genreRepository: GenreRepository
    ) {
    }

    async insert(genreDetails: CreateGenreDto): Promise<Genre> {
        const genre: Genre = this.genreRepository.create();
        const { type } = genreDetails;
        genre.type = type;
        await this.genreRepository.save(genre);
        return genre;
    }

    async getAllGenre(): Promise<Genre[]> {
        return await this.genreRepository.find();
    }

    // async getBooksOfGenre(genreID: number): Promise<Genre> {
    //     const genre = await this.genreRepository.findOne({ where: { id: genreID }, relations: ['books'] });
    //     return genre;
    // }
}
