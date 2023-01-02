# PROJETO BXP

Projeto de estudo de React com TS, Clean architecture, TDD, SOLID,e design patterns.

## Arquitetura do projeto

Usando o padrão de arquitetura Clean, temos as seguintes camadas independentes no projeto:

- API: Simula os retornos de uma futura API
- Domain: Entidades e interfaces de regras de negocio que atendem aos casos de uso
- Data: Implementações concretas dos casos de uso mapeados na Domain
- Infra: Implementações concretas de protocolos http, smtp e outros usados por Data
- Main: Orquestrador da arquitetura 
- Presentation: Interface do usuário (frontend)
