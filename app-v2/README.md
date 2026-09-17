# ROMANO PROPERTY CARE — v2

Nova base do sistema, construída separadamente do aplicativo antigo para não carregar a lógica de `localStorage`/demo para a produção.

## Backend
- Supabase Auth real
- PostgreSQL real
- RLS/server-side authorization
- Isolamento por cliente e por funcionário
- Financeiro restrito ao administrador
- Cliente limitado aos próprios dados
- Supervisor sem acesso financeiro

## Perfis
- ADMIN — acesso global e gestão do sistema; sem limite rígido de administradores.
- SUPERVISOR — operação, equipa, agenda, serviços, materiais, manutenção, incidências e chat; sem financeiro.
- FUNCIONÁRIO — apenas a jornada e serviços/propriedades atribuídos.
- CLIENTE — apenas perfil, propriedades, serviços, documentos, faturas/pagamentos, incidências e comunicação próprios.

## Contas de teste solicitadas
- Romano — ADMIN
- Gabriel — SUPERVISOR
- Clovys — CLIENTE
- Rita — CLIENTE

A criação/alteração de credenciais deve acontecer no Supabase Auth/backend, nunca em texto fixo no frontend.

## Design
A identidade visual aprovada é premium, bege/champagne/preto/dourado, com os personagens 3D aprovados como referência oficial para estados operacionais e mapa. O logo oficial não deve ser redesenhado.
