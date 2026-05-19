import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = ClientModel & Document;

@Schema()
export class ClientModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  address?: string;
}

export const ClientSchema = SchemaFactory.createForClass(ClientModel);