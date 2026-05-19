import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class DeleteClientUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute(id: string) {
    return this.clientRepository.delete(id);
  }
}