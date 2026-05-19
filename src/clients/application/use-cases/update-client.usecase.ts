import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/entities/client.entity';

@Injectable()
export class UpdateClientUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute(id: string, data: Partial<Client>) {
    const updated = await this.clientRepository.update(id, data);

    if (!updated) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return updated;
  }
}