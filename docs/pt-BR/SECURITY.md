# Política de Segurança

[🇺🇸 English](../../SECURITY.md)

## Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.1.x  | ✅ Sim             |
| 1.0.x  | ⚠️ Apenas críticos |
| < 1.0  | ❌ Não             |

## Reportando uma Vulnerabilidade

Se você descobrir uma vulnerabilidade de segurança, por favor:

1. **NÃO** abra uma issue pública
2. Envie um email para: `franklyn.mobile.dev@gmail.com`
3. Inclua:
   - Descrição detalhada da vulnerabilidade
   - Passos para reproduzir
   - Possível impacto
   - Sugestões de correção (se houver)

### Tempo de Resposta

- **Confirmação**: dentro de 48 horas
- **Avaliação inicial**: dentro de 1 semana
- **Resolução**: depende da severidade

### O que esperar

- Confirmaremos o recebimento do relatório
- Investigaremos e manteremos você atualizado
- Creditaremos você na correção (se desejar)

## Escopo

Este projeto é uma ferramenta frontend estática sem backend. Vulnerabilidades relevantes incluem:

- XSS (Cross-Site Scripting)
- Injeção de código malicioso
- Problemas com dependências (npm)

## Boas Práticas

Este projeto segue boas práticas de segurança:

- ✅ Nenhum dado do usuário é coletado ou armazenado
- ✅ Sem backend ou banco de dados
- ✅ Dependências auditadas regularmente
- ✅ Content Security Policy implementada
