import { IsOptional, IsString } from "class-validator";

export default class CreateBookDto {

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly userID: number;

    @IsOptional()
    readonly genreIDs: number[];
}