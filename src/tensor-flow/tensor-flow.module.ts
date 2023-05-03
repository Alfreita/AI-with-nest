import { Module } from '@nestjs/common';
import { TensorFlowController } from './tensor-flow.controller';
import { TensorFlowService } from './tensor-flow.service';
import { TFmodel } from './tf.service';

@Module({
  controllers: [TensorFlowController],
  providers: [TensorFlowService, TFmodel],
})
export class TensorFlowModule {}
