
import { Optional } from "@nestjs/common";
import { IsOptional, IsString } from "class-validator";

export default class CreateProfileDto {

    @IsString()
    readonly gender: string;

    @IsString()
    readonly photo: string;
}