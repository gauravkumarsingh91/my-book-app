import { IsString } from "class-validator";

export default class CreateGenreDto {

    @IsString()
    readonly type: string;
}