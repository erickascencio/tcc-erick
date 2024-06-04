import { Module } from '@nestjs/common';
import { DivulgadorController } from './controllers/divulgador.controller';
import { DivulgadorService } from './services/divulgador.service';

@Module({
  controllers: [DivulgadorController],
  providers: [DivulgadorService]
})
export class DivulgadorModule {}
