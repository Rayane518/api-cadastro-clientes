import { Inject, Injectable } from '@nestjs/common';
import { Client } from '../../domain/entities/client.entity';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute(data: Omit<Client, 'id'>): Promise<Client> {
    const existingClient = await this.clientRepository.findByEmail(data.email);

    if (existingClient) {
      throw new Error('Cliente com este email já existe');
    }

    const client = new Client(
      '',
      data.name,
      data.email,
      data.phone,
      data.address,
    );

    return this.clientRepository.create(client);
  }
}