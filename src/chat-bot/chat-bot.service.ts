import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateChatBotDto } from './dto/create-chat-bot.dto';

@Injectable()
export class ChatBotService {
  openAI: any;
  apiKey: string;
  messages: Array<{ role: string; content: string }> = [];
  constructor(private readonly httpService: HttpService) {
    this.apiKey = process.env.OPENAI_API_KEY;
  }

  async talkToAI(createChatBotDto: CreateChatBotDto) {
    try {
      this.messages.push({
        role: 'user',
        content: `${createChatBotDto.prompt}`,
      });
      const { data } = await firstValueFrom(
        this.httpService
          .post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: 'gpt-3.5-turbo',
              messages: this.messages,
            },
            { headers: { Authorization: `Bearer ${this.apiKey}` } },
          )
          .pipe(
            catchError((error: AxiosError) => {
              console.log(error);
              throw 'An error happened!';
            }),
          ),
      );
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
