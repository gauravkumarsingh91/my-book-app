import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post()
    postUser( @Body() user: CreateUserDto) {
        return this.userService.insert(user);
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    //'getBooksOfUser()' return all the books which are associated with the user
    // provided through 'userID' by the request
    @Get('/:id/books')
    getBooks( @Param('id', ParseIntPipe) userID: number ) {
        return this.userService.getBooksOfUser(userID);
    }
}
