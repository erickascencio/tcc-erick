import { Test, TestingModule } from '@nestjs/testing';
import { DivulgadorController } from './divulgador.controller';

describe('DivulgadorController', () => {
  let controller: DivulgadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DivulgadorController],
    }).compile();

    controller = module.get<DivulgadorController>(DivulgadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
