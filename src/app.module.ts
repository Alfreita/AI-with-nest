import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TensorFlowModule } from './tensor-flow/tensor-flow.module';

@Module({
  imports: [TensorFlowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
