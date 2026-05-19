import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class FindClientByNameUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute(name: string) {
    return this.clientRepository.findByName(name);
  }
}