/** @type {import('tailwindcss').Config} */
module.exports = {
  // Hugo-Blox vai automaticamente encontrar os ficheiros de conteúdo para processar.
  // Mas se precisares de adicionar pastas, podes fazê-lo aqui.
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  // Ativa o modo escuro baseado na classe que o Hugo-Blox adiciona ao <html>
  darkMode: 'class',
  theme: {
    extend: {
      // É aqui que estendes o tema, incluindo a tipografia.
      // ADICIONA ESTE BLOCO DE CORES
      colors: {
        'impossibilis-blue': '#005f73', // O teu azul petróleo
      },
      // Já adicionei as regras para diminuir os teus cabeçalhos.
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h1: {
              fontSize: '2.5rem', // Tamanho reduzido para H1
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            h2: {
              fontSize: '2rem', // Tamanho reduzido para H2
              marginTop: '1.4em',
              marginBottom: '0.6em',
            },
            h3: {
              fontSize: '1.5rem', // Tamanho reduzido para H3
              marginTop: '1.3em',
              marginBottom: '0.5em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Outros plugins do Tailwind que possas querer usar no futuro
  ],
}