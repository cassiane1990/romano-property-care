# ROMANO PROPERTY CARE OS

Nova base profissional do sistema operacional ROMANO PROPERTY CARE.

## Arquitetura
- Next.js App Router
- Supabase Auth
- PostgreSQL como fonte de verdade
- RLS por empresa/perfil
- Supabase Storage para documentos e mídia (integração dos módulos em evolução)
- Realtime para operação
- Interface responsiva premium em areia/dourado/creme

## Segurança
Esta versão não contém contas de demonstração nem passwords hardcoded. O acesso depende de Supabase Auth e de um `user_profiles` ativo.

## Ambiente
Configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` no ambiente da Vercel. Nunca coloque service-role keys no frontend.

## Perfis
ADMIN · SUPERVISOR · FUNCIONÁRIO · CLIENTE.

## Próxima etapa
Conectar os módulos operacionais restantes diretamente às tabelas normalizadas já existentes no projeto Supabase, migrando definitivamente qualquer dependência do estado JSON/localStorage.