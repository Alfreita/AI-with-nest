import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatBotModule } from './chat-bot/chat-bot.module';
import { TensorFlowModule } from './tensor-flow/tensor-flow.module';

@Module({
  imports: [TensorFlowModule, ChatBotModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
