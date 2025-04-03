# Flor de Nata Rosquinhas

<p align="center">
  <img src="https://yfch1n44obf.ufs.sh/f/jgvud015prqwzvjcqcb8ybn4JN6H9is5Tur3E1JSMPZQOVIQ" alt="Flor de Nata Logo" width="200" />
</p>

Uma plataforma de gerenciamento de pedidos profissional para "Flor de Nata Rosquinhas", uma empresa brasileira de rosquinhas artesanais. Esta aplicação web permite que os clientes façam pedidos diretamente através de uma interface intuitiva e integra-se com o WhatsApp para confirmação de pedidos.

## 🌟 Características

- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Formulário de Pedido**: Interface fácil de usar para os clientes selecionarem produtos
- **Carrinho de Compras**: Os clientes podem adicionar vários itens ao pedido
- **Integração com WhatsApp**: Envia detalhes do pedido diretamente para a empresa via WhatsApp
- **Opções de Pagamento**: Suporte para PIX (sistema de pagamento instantâneo brasileiro)
- **Design Visual Único**: Formas onduladas no cabeçalho e rodapé que imitam chocolate derretido e ondas suaves

## 🚀 Tecnologias Utilizadas

- **Frontend**: React + TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Notificações**: React Hot Toast
- **Ferramenta de Build**: Vite

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:
- Node.js (v16.0.0 ou superior)
- npm (v7.0.0 ou superior)

## 🔧 Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/flor-de-natas.git
   cd flor-de-natas
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   ```

4. Abra seu navegador e acesse http://localhost:5173

## 🏗️ Build para Produção

1. Gere um build de produção
   ```bash
   npm run build
   ```

2. Visualize o build de produção localmente
   ```bash
   npm run preview
   ```

## 🚢 Opções de Deployment

### Vercel (Recomendado)

1. Crie uma conta no [Vercel](https://vercel.com/signup)
2. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Faça o deploy do seu projeto:
   ```bash
   vercel
   ```

A Vercel é ideal para aplicações React, oferecendo:
- HTTPS automático
- CDN global
- Integrações com GitHub
- Previews de deploy para pull requests
- Amplo plano gratuito para projetos pequenos e médios

### Netlify

1. Crie uma conta no [Netlify](https://app.netlify.com/signup)
2. Instale o Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Faça o deploy do seu projeto:
   ```bash
   netlify deploy
   ```

O Netlify também é excelente para aplicações React com:
- Funcionalidades similares à Vercel
- Tratamento de formulários se precisar adicionar funcionalidades no lado do servidor
- Plano gratuito inclui 300 minutos de build por mês

### GitHub Pages

1. Adicione homepage ao package.json:
   ```json
   "homepage": "https://seu-usuario.github.io/flor-de-natas"
   ```
2. Instale o pacote GitHub Pages:
   ```bash
   npm install -g gh-pages
   ```
3. Adicione scripts de deploy ao package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Faça o deploy para o GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🎨 Personalização

As formas onduladas do cabeçalho e rodapé são SVGs personalizados que podem ser facilmente modificados. As cores principais são definidas no arquivo `tailwind.config.js`:

- **Marrom escuro**: `#3E2723` (marrom-900)
- **Marrom médio**: `#5D4037` (marrom-800)
- **Marrom claro**: `#795548` (marrom-700)
- **Rosa escuro**: `#ec407a` (rosa-500)
- **Rosa médio**: `#f48fb1` (rosa-400)
- **Rosa claro**: `#f8bbd0` (rosa-300)
- **Rosa muito claro/fundo**: `#FFF9FB` (rosa-50)

## 💡 Dicas para Desenvolvimento

- Para modificar os produtos e preços, edite o arquivo `src/types.ts`
- Para alterar o número de WhatsApp, edite o arquivo `src/components/OrderForm.tsx`
- Para ajustar as formas onduladas, modifique os caminhos SVG no arquivo `src/App.tsx`

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

Para perguntas ou suporte, entre em contato:
- WhatsApp: [+55 31 99199-4791](https://wa.me/5531991994791)