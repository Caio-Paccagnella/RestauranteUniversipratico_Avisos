/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', "./app/**/*.{js,jsx,ts,tsx}",],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // Você escolhe o nome da esquerda (como vai digitar no className)
        // O nome da direita DEVE ser exatamente o que o Expo exige
        kumbh: ['KumbhSans_400Regular'],
        kumbhBold: ['KumbhSans_700Bold']
    }
  }
  },
  plugins: [],
};
