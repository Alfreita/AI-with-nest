import { Test, TestingModule } from '@nestjs/testing';
import { TensorFlowService } from './tensor-flow.service';

describe('TensorFlowService', () => {
  let service: TensorFlowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TensorFlowService],
    }).compile();

    service = module.get<TensorFlowService>(TensorFlowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
