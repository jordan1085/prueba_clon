import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity'
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const data =  this.userRepository.create(createUserDto);
    return await this.userRepository.save(data);

  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id,updateUserDto);
   
  }

  remove(id: number) {
     return this.userRepository.softDelete(id);
  }
}
