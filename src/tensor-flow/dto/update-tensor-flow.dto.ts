import { PartialType } from '@nestjs/mapped-types';
import { CreateTensorFlowDto } from './create-tensor-flow.dto';

export class UpdateTensorFlowDto extends PartialType(CreateTensorFlowDto) {}
