import { Test, TestingModule } from '@nestjs/testing';
import { TensorFlowController } from './tensor-flow.controller';
import { TensorFlowService } from './tensor-flow.service';

describe('TensorFlowController', () => {
  let controller: TensorFlowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TensorFlowController],
      providers: [TensorFlowService],
    }).compile();

    controller = module.get<TensorFlowController>(TensorFlowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
