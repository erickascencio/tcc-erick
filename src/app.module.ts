import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { FirebaseService } from './shared/firebase/firebase.service';
import { FirebaseController } from './shared/firebase/firebase.controller';
import { DivulgadorModule } from './modules/divulgador/divulgador.module';
import { ChatModule } from './modules/chat/chat.module';
import { MatchsModule } from './modules/matchs/matchs.module';
import { EventModule } from './modules/event/event.module';
import { SharedModule } from './shared/shared.module';
import { SharedModule } from './shared/shared.module';




@Module({
  imports: [UserModule, EventModule, MatchsModule, ChatModule, DivulgadorModule, SharedModule],
  controllers: [AppController, FirebaseController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
