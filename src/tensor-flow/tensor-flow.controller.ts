import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TensorFlowService } from './tensor-flow.service';

@Controller('tensor-flow')
export class TensorFlowController {
  constructor(private readonly tensorFlowService: TensorFlowService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File) {
    return this.tensorFlowService.create(file);
  }
}
