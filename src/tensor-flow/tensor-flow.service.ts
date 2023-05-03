import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';
import { TFmodel } from 'src/tensor-flow/tf.service';

@Injectable()
export class TensorFlowService {
  constructor(private readonly tfModule: TFmodel) {}
  async create(file: Express.Multer.File) {
    const image = tf.node.decodeImage(file.buffer);

    return await this.tfModule.predictObject(image);
  }
}
