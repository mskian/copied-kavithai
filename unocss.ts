import presetWebFonts from 'https://deno.land/x/aleph@1.0.0-alpha.41/lib/@unocss/preset-web-fonts.ts'
import presetUno from 'https://deno.land/x/aleph@1.0.0-alpha.41/lib/@unocss/preset-uno.ts'

export const UNOCSS_OPTS = {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Anek Tamil',
          weights: ['300', '400', '500', '600', '700'],
        },
        mono: ['Anek Tamil', 'Anek Tamil:400,700'],
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        html {
            font-family: 'Anek Tamil', sans-serif;
        }
        body {
            font-family: 'Anek Tamil', sans-serif;
        }
        p {
            font-family: 'Anek Tamil', sans-serif;
        }
        h1, h2, h3, h4, h5 {
            font-family: 'Anek Tamil', sans-serif;
        }
        .dark p {
            color: #fefae0;
        }
        .dark h1, h2, h3, h4, h5 {
            color: rgba(255, 184, 108, 1) !important;
        }
        .dark body {
            background-image: none !important;
	        background-color: rgba(40, 42, 54, 1) !important;
        }
        .dark {
            a,
            a * {
	            color: rgba(80, 250, 123, 1) !important;
	            background-color: transparent !important;
               } 
        }
        
      `
    }
  ]
}