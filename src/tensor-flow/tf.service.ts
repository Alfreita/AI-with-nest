import { Injectable } from '@nestjs/common';
import { load } from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs-node';

@Injectable()
export class TFmodel {
  model: any;

  private loadModel = async () => {
    this.model = await load();
  };

  predictObject = async (tfImage: tf.Tensor3D | tf.Tensor4D) => {
    await this.loadModel();
    const predictions = await this.model.detect(tfImage, 3, 0.25);
    return predictions;
  };
}
