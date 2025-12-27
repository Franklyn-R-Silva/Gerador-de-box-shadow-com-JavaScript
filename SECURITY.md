# Security Policy

[🇧🇷 Português](docs/pt-BR/SECURITY.md)

## Supported Versions

| Version | Supported        |
| ------- | ---------------- |
| 1.1.x   | ✅ Yes           |
| 1.0.x   | ⚠️ Critical only |
| < 1.0   | ❌ No            |

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **DO NOT** open a public issue
2. Send an email to: `franklyn.mobile.dev@gmail.com`
3. Include:
   - Detailed description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fixes (if any)

### Response Time

- **Acknowledgment**: within 48 hours
- **Initial assessment**: within 1 week
- **Resolution**: depends on severity

### What to Expect

- We will confirm receipt of the report
- We will investigate and keep you updated
- We will credit you in the fix (if desired)

## Scope

This project is a static frontend tool with no backend. Relevant vulnerabilities include:

- XSS (Cross-Site Scripting)
- Malicious code injection
- Dependency issues (npm)

## Best Practices

This project follows security best practices:

- ✅ No user data is collected or stored
- ✅ No backend or database
- ✅ Dependencies audited regularly
- ✅ Content Security Policy implemented
