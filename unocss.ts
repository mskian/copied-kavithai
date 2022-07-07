// deno-lint-ignore-file

import presetUno from "https://deno.land/x/aleph@1.0.0-alpha.41/lib/@unocss/preset-uno.ts";

export const UNOCSS_OPTS = {
  presets: [
    presetUno(),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
      @font-face {
        font-family: 'Anek Tamil';
        font-style: normal;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNHCd6qw.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Anek Tamil';
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNQid6qw.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Anek Tamil';
        font-style: normal;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNcCd6qw.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Anek Tamil';
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNnCB6qw.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Anek Tamil';
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNpSB6qw.ttf) format('truetype');
      }
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
      `,
    },
  ],
};
