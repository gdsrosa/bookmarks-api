import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signUp() {
    return { message: 'Signed up from the service!' };
  }

  signIn() {
    return { message: 'Signed in from the service!' };
  }
}
