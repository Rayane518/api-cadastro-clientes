import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class FindClientByEmailUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute(email: string) {
    const client = await this.clientRepository.findByEmail(email);

    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return client;
  }
}