# Airbnb Clone com Angular 18

Este projeto é um clone do Airbnb desenvolvido utilizando Angular 18, PrimeNG e PrimeFlex. O objetivo é demonstrar a aplicação de conceitos de Behavior Subject para gerenciamento de estado.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto é uma aplicação web que imita as principais funcionalidades do Airbnb, incluindo listagem de propriedades, busca e filtragem, detalhamento de propriedades e reservas. 

## Tecnologias Utilizadas

- **Angular 18**: Framework de aplicação web.
- **PrimeNG**: Biblioteca de componentes UI para Angular.
- **PrimeFlex**: Biblioteca CSS para layouts flexíveis e responsivos.
- **Behavior Subject**: Um tipo de Subject do RxJS usado para gerenciar o estado da aplicação.

## Instalação

Siga os passos abaixo para clonar e executar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/airbnb-clone-angular.git
    cd airbnb-clone-angular
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor de desenvolvimento:
    ```bash
    ng serve
    ```

4. Abra o navegador e acesse `http://localhost:4200`.

## Configuração

Para configurar a aplicação, você pode editar o arquivo `src/environments/environment.ts` para adicionar as configurações específicas do seu ambiente, como URLs de API e chaves de API.

## Uso

### Comandos Disponíveis

- `ng serve`: Inicia o servidor de desenvolvimento.
- `ng build`: Compila a aplicação para produção.
- `ng test`: Executa testes unitários.
- `ng lint`: Verifica a qualidade do código.

### Gerenciamento de Estado com Behavior Subject

O projeto utiliza `BehaviorSubject` do RxJS para gerenciar o estado da aplicação. Os estados compartilhados são armazenados em serviços e podem ser assinados por múltiplos componentes para atualizações reativas.

Exemplo de uso:

```typescript
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private propertyListSource = new BehaviorSubject<Property[]>([]);
  propertyList$ = this.propertyListSource.asObservable();

  updatePropertyList(properties: Property[]) {
    this.propertyListSource.next(properties);
  }
}
