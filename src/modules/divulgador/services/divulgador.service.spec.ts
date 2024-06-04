import { Test, TestingModule } from '@nestjs/testing';
import { DivulgadorService } from './divulgador.service';

describe('DivulgadorService', () => {
  let service: DivulgadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivulgadorService],
    }).compile();

    service = module.get<DivulgadorService>(DivulgadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
