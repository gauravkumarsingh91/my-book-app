import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreController } from './genre.controller';
import { GenreRepository } from './genre.repository';
import { GenreService } from './genres.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GenreRepository])
  ],
  controllers: [GenreController],
  providers: [GenreService],
  exports: [TypeOrmModule]
})
export class GenreModule { }
