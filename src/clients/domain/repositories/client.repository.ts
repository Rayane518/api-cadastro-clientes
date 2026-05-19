import { Client } from '../entities/client.entity';

export interface ClientRepository {
  create(client: Client): Promise<Client>;
  findAll(): Promise<Client[]>;
  findByName(name: string): Promise<Client[]>;
  findByEmail(email: string): Promise<Client | null>;
  update(id: string, client: Partial<Client>): Promise<Client | null>;
  delete(id: string): Promise<void>;
}