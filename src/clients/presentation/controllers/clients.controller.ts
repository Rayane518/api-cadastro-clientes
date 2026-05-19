import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateClientDto } from '../dtos/create-client.dto';
import { UpdateClientDto } from '../dtos/update-client.dto';

import { CreateClientUseCase } from '../../application/use-cases/create-client.usecase';
import { FindAllClientsUseCase } from '../../application/use-cases/find-all-clients.usecase';
import { FindClientByNameUseCase } from '../../application/use-cases/find-client-by-name.usecase';
import { FindClientByEmailUseCase } from '../../application/use-cases/find-client-by-email.usecase';
import { UpdateClientUseCase } from '../../application/use-cases/update-client.usecase';
import { DeleteClientUseCase } from '../../application/use-cases/delete-client.usecase';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly findAllClientsUseCase: FindAllClientsUseCase,
    private readonly findClientByNameUseCase: FindClientByNameUseCase,
    private readonly findClientByEmailUseCase: FindClientByEmailUseCase,
    private readonly updateClientUseCase: UpdateClientUseCase,
    private readonly deleteClientUseCase: DeleteClientUseCase,
  ) {}

  @Post()
  create(@Body() data: CreateClientDto) {
    return this.createClientUseCase.execute(data);
  }

  @Get()
  findAll() {
    return this.findAllClientsUseCase.execute();
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.findClientByNameUseCase.execute(name);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.findClientByEmailUseCase.execute(email);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateClientDto) {
    return this.updateClientUseCase.execute(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteClientUseCase.execute(id);
  }
}