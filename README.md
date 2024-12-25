# :checkered_flag: CONECTA VIDAS

Plataforma que oferece suporte emocional coletivo e individual para a comunidade por meio de voluntários capacitados, conectando as pessoas a iniciativas de saúde mental.

## :technologist: Membros da equipe

554679 - José Witalo - Ciência da Computação.

## :bulb: Objetivo Geral
Promover o bem-estar emocional e a conscientização sobre saúde mental por meio de uma rede de apoio digital acessível.

## :eyes: Público-Alvo
Pessoas que estão em busca de suporte emocional e profissionais ou voluntários dedicados à saúde mental.

## :star2: Impacto Esperado
Aumentar o acesso ao apoio emocional e reduzir o estigma em torno da saúde mental, criando um ambiente seguro para desabafos e orientações.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

Usuário não logado.
Usuário registrado como "paciente".
Usuário registrado como "voluntário".
Usuário administrador.

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

Área com informações e artigos a respeito de temas da saúde mental(Todos podem acessar).


Agendamento de consultas online(Apenas usuários registrados e administrador):
  Paciente: Verificar a disponibilidade e realizar agendamento de consultas com voluntários registrados no sistema.
  Voluntário: Visualiza e confirma agendamentos requisitados pelos pacientes.
  Administrador: Supervisiona todos os agendamentos realizados no sistema, podendo gerar relatórios.

  
Histórico de consultas(Apenas usuários registrados e administrador):
  Paciente e Voluntário: Podem visualizar seus históricos de consultas realizadas, com informações dos participantes, data etc.
  Administrador: Consulta todas as consultas realizadas no sistema.

  
Feedback das consultas realizadas(Apenas usuários registrados e administrador):
  Paciente: Poderá avaliar as consultas que ele participou.
  Voluntário: Pode visualizar as avaliações de consultas que ele realizou.
  Administrador: Pode visualizar todas as avaliações que foram feitas.
## :spiral_calendar: Entidades ou tabelas do sistema

Usuário(ID(PK), nome, email, senha, tipo).
Agendamento(ID_agendamento(PK), ID_paciente(FK), ID_voluntario(FK), data, status).
Histórico(ID_historico(PK), ID_agendamento(FK), data).
Feedback(ID_avalia(PK), ID_paciente(FK), ID_voluntario(FK), ID_agendamento(FK), nota, comentário).

----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Entidade 1 | X |  X  |  | X |
| Entidade 2 | X |    |  X | X |
| Entidade 3 | X |    |  |  |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/entidade1/|
| POST | api/entidade2 |
