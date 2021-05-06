import { Injectable } from '@nestjs/common';
import Book from 'src/book/book.entity';
import { Profile } from 'src/profile/profile.entity';
import { ProfileRepository } from 'src/profile/profile.repository';
import CreateUserDto from './dto/create-user.dto';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly profileRepository: ProfileRepository,
    ) {
    }

    async insert(userDetails: CreateUserDto): Promise<User> {
        const usersEntity: User = this.userRepository.create();
        const { name, profile } = userDetails;
        usersEntity.name = name;
        if (profile) {
            const { gender, photo } = profile;
            const profileEntity: Profile = this.profileRepository.create();
            profileEntity.gender = gender;
            profileEntity.photo = photo;
            await this.profileRepository.save(profileEntity);
            usersEntity.profile = profileEntity;
        }
        await this.userRepository.save(usersEntity);
        return usersEntity;
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getBooksOfUser(userID: number): Promise<Book[]> {
        const user: User = await this.userRepository.findOne({ where: { id: userID }, relations: ['books'] });
        return user.books;
    }
}
