import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/entities/client.entity';
import { ClientDocument, ClientModel } from './client.schema';

@Injectable()
export class MongoClientRepository implements ClientRepository {
  constructor(
    @InjectModel(ClientModel.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  async create(client: Client): Promise<Client> {
    const created = await this.clientModel.create(client);

    return new Client(
      created.id,
      created.name,
      created.email,
      created.phone,
      created.address,
    );
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.clientModel.find();

    return clients.map(
      client =>
        new Client(
          client.id,
          client.name,
          client.email,
          client.phone,
          client.address,
        ),
    );
  }

  async findByName(name: string): Promise<Client[]> {
    const clients = await this.clientModel.find({
      name: { $regex: name, $options: 'i' },
    });

    return clients.map(
      client =>
        new Client(
          client.id,
          client.name,
          client.email,
          client.phone,
          client.address,
        ),
    );
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await this.clientModel.findOne({ email });

    if (!client) return null;

    return new Client(
      client.id,
      client.name,
      client.email,
      client.phone,
      client.address,
    );
  }

  async update(id: string, client: Partial<Client>): Promise<Client | null> {
    const updated = await this.clientModel.findByIdAndUpdate(id, client, {
      new: true,
    });

    if (!updated) return null;

    return new Client(
      updated.id,
      updated.name,
      updated.email,
      updated.phone,
      updated.address,
    );
  }

  async delete(id: string): Promise<void> {
    await this.clientModel.findByIdAndDelete(id);
  }
}