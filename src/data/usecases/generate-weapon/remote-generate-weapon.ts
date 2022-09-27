import { HttpPostClient } from '../../protocols/http/http-post-client'

export class RemoteGenerateWeapon {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async generateWeapon (): Promise<void> {
    await this.httpPostClient.post(this.url)
  }
}
