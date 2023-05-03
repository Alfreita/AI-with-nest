import { Body, Controller, Post } from '@nestjs/common';
import { ChatBotService } from './chat-bot.service';
import { CreateChatBotDto } from './dto/create-chat-bot.dto';

@Controller('chat-bot')
export class ChatBotController {
  constructor(private readonly chatBotService: ChatBotService) {}

  @Post()
  create(@Body() createChatBotDto: CreateChatBotDto) {
    return this.chatBotService.talkToAI(createChatBotDto);
  }
}
