import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export interface User {
  id: number;
  username: string;
  password: string; // Hashed password
}

@Injectable()
export class UserService {
  private users: User[] = []; // This should be replaced with a database

  async createUser(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: this.users.length + 1,
      username,
      password: hashedPassword,
    };
    this.users.push(newUser);
    return newUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
