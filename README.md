# FLUAP PASS - Identidade Digital

Módulo de identidade digital da Fluap, seguindo o style guide institucional da empresa.

## 🎨 Style Guide

- **Layout**: Clean, profissional e institucional
- **Cards**: Bordas suaves com 12px de radius
- **Tipografia**: Clean, usando fonte Inter
- **Ícones**: Minimalistas
- **Espaçamento**: 24px padrão

## 📱 Telas Implementadas

### 1. Login Unificado
- Campo de e-mail/telefone
- Campo de senha
- Botões de login social (Google e Apple)
- Link "Esqueci minha senha"
- Mensagem legal LGPD

### 2. Verificação OTP
- Campo de 6 dígitos com navegação automática
- Timer de 5 minutos
- Botão para reenviar código

### 3. Permissões
- Lista de aplicativos Fluap
- Switch ON/OFF para cada permissão
- Cards detalhando o escopo de cada permissão

### 4. Consentimentos LGPD
- Texto completo do consentimento
- Versão atual destacada
- Histórico de versões
- Botão para revogar consentimento

### 5. Dispositivos Autorizados
- Cards para cada dispositivo com informações detalhadas
- Identificação do dispositivo atual
- Botão para deslogar dispositivos

### 6. Perfil Fluap Pass
- Foto de perfil com opção de edição
- Informações pessoais (nome, e-mail, telefone)
- Botão para editar perfil
- Menu de navegação para outras seções

## 🧩 Componentes Reutilizáveis

### FluapInput
Componente de input customizado com estilo Fluap.

```html
<fluap-input 
    type="text"
    placeholder="Digite aqui"
    required>
</fluap-input>
```

### PermissionCard
Card para exibir e gerenciar permissões de aplicativos.

```html
<permission-card 
    app-name="Fluap Care"
    app-icon="🏥"
    permission="Acesso ao perfil médico"
    description="Descrição da permissão"
    enabled="true">
</permission-card>
```

### ConsentVersionCard
Card para exibir versões de consentimento.

```html
<consent-version-card 
    version="2.1"
    date="15/01/2025"
    changes="Descrição das mudanças">
</consent-version-card>
```

### DeviceCard
Card para exibir informações de dispositivos autorizados.

```html
<device-card 
    device-name="iPhone 14 Pro"
    device-type="mobile"
    location="São Paulo, SP"
    last-activity="Há 2 horas"
    is-current="true">
</device-card>
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Navegue entre as telas usando os botões e links
3. Os componentes são customizados e funcionam automaticamente

## 📋 Funcionalidades

- ✅ Navegação entre telas
- ✅ Validação de formulários
- ✅ Timer OTP funcional
- ✅ Navegação automática entre campos OTP
- ✅ Suporte a paste no campo OTP
- ✅ Toggle de permissões
- ✅ Gerenciamento de dispositivos
- ✅ Design responsivo

## 🎯 Próximos Passos

Para integração completa, você precisará:

1. Conectar com APIs de autenticação (Google, Apple)
2. Implementar backend para OTP
3. Integrar com sistema de permissões
4. Conectar com banco de dados para persistência
5. Implementar upload de imagens para avatar

## 📄 Licença

© 2025 Fluap, Inc. All rights reserved.

