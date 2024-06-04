import { Module } from '@nestjs/common';
import { MatchsService } from './services/matchs.service';
import { MatchsController } from './controllers/matchs.controller';

@Module({
  providers: [MatchsService],
  controllers: [MatchsController]
})
export class MatchsModule {}
