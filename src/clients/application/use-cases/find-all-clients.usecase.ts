import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class FindAllClientsUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute() {
    return this.clientRepository.findAll();
  }
}