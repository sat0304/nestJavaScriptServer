import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create_user_dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor (private usersService: UsersService) {}
    
    async login(userDto: CreateUserDto) {
        
    }

    
    async registration(userDto: CreateUserDto) {
        
    }
}
