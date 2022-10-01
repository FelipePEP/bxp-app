export class InvalidParamsError extends Error {
  constructor () {
    super('Requisição inválida')
    this.name = 'InvalidParamsError'
  }
}
