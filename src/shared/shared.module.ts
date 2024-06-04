import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';
import { FirebaseController } from './firebase/firebase.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  providers: [FirebaseService, AuthService],
  controllers: [FirebaseController, AuthController]
})
export class SharedModule {}
