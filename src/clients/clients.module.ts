import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsController } from './presentation/controllers/clients.controller';
import { ClientModel, ClientSchema } from './infrastructure/database/client.schema';
import { MongoClientRepository } from './infrastructure/database/mongo-client.repository';

import { CreateClientUseCase } from './application/use-cases/create-client.usecase';
import { FindAllClientsUseCase } from './application/use-cases/find-all-clients.usecase';
import { FindClientByNameUseCase } from './application/use-cases/find-client-by-name.usecase';
import { FindClientByEmailUseCase } from './application/use-cases/find-client-by-email.usecase';
import { UpdateClientUseCase } from './application/use-cases/update-client.usecase';
import { DeleteClientUseCase } from './application/use-cases/delete-client.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ClientModel.name,
        schema: ClientSchema,
      },
    ]),
  ],
  controllers: [ClientsController],
  providers: [
    {
      provide: 'ClientRepository',
      useClass: MongoClientRepository,
    },
    CreateClientUseCase,
    FindAllClientsUseCase,
    FindClientByNameUseCase,
    FindClientByEmailUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase,
  ],
})
export class ClientsModule {}