export class Client {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public phone: string,
    public address?: string,
  ) {}
}