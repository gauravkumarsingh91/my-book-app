
import { IsOptional, IsString } from "class-validator";
import CreateProfileDto from "src/profile/dto/create-profile.dto";

export default class CreateUserDto {

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly profile: CreateProfileDto
}