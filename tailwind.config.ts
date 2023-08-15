import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './constants/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  safelist: ['bg-staging-pattern', 'bg-develop-pattern', 'bg-local-pattern'],
  theme: {
    screens: {
      xxs: '360px',
      xs: '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    backgroundImage: {
      'staging-pattern':
        'url(data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjYWJiMWJiIj48c3R5bGU+dGV4dHtmb250LWZhbWlseTpBdmVuaXIsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9PC9zdHlsZT48ZGVmcz48cGF0dGVybiBpZD0idHdpdHRlcmhhbmRsZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCI+PHRleHQgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5MzMzZWEiIGlkPSJuYW1lIj5zdGFnaW5nPC90ZXh0PjwvcGF0dGVybj48cGF0dGVybiBpZD0iY29tYm8iIHhsaW5rOmhyZWY9IiN0d2l0dGVyaGFuZGxlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSI+PHVzZSB4bGluazpocmVmPSIjbmFtZSIvPjx1c2UgeGxpbms6aHJlZj0iI29jY3VwYXRpb24iLz48L3BhdHRlcm4+PHRleHQgeT0iNDAiIHg9IjUwIiBmb250LXNpemU9IjEyIiBpZD0ib2NjdXBhdGlvbiI+c3RhZ2luZzwvdGV4dD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjb21ibykiLz48L3N2Zz4=)',
      'develop-pattern':
        'url(data:image/svg+xml;base64,PHN2ZyBpZD0iZGlhZ3RleHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+dGV4dCB7IGZpbGw6ICM3QzNBRUQ7IGZvbnQtZmFtaWx5OiBBdmVuaXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH08L3N0eWxlPjxkZWZzPjxwYXR0ZXJuIGlkPSJlbnYiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiPjx0ZXh0IHk9IjMwIiBmb250LXNpemU9IjE0IiBpZD0ibmFtZSI+ZGV2ZWxvcDwvdGV4dD48L3BhdHRlcm4+PHBhdHRlcm4gaWQ9ImNvbWJvIiB4bGluazpocmVmPSIjZW52IiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48dXNlIHhsaW5rOmhyZWY9IiNuYW1lIiAvPjx1c2UgeGxpbms6aHJlZj0iI3RpdGxlIiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjb21ibykiIC8+PC9zdmc+)',
      'local-pattern':
        'url(data:image/svg+xml;base64,PHN2ZyBpZD0iZGlhZ3RleHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+dGV4dCB7IGZpbGw6ICM5OTk7IGZvbnQtZmFtaWx5OiBBdmVuaXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH08L3N0eWxlPjxkZWZzPjxwYXR0ZXJuIGlkPSJlbnYiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHRleHQgeD0iMTAiIHk9IjMwIiBmb250LXNpemU9IjE0IiBpZD0ibmFtZSI+bG9jYWw8L3RleHQ+PC9wYXR0ZXJuPjxwYXR0ZXJuIGlkPSJjb21ibyIgeGxpbms6aHJlZj0iI2VudiIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDkwKSI+PHVzZSB4bGluazpocmVmPSIjbmFtZSIgLz48dXNlIHhsaW5rOmhyZWY9IiN0aXRsZSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY29tYm8pIiAvPjwvc3ZnPg==)',
    },
    container: {
      screens: {
        sm: '100%',
        md: '716px',
        lg: '716px',
        xl: '716px',
      },
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xxs: ['0.685rem', { lineHeight: '1.3em' }],
      xs: ['0.75rem', { lineHeight: '1.3em' }],
      sm: ['0.875rem', { lineHeight: '1.3em' }],
      base: ['1rem', { lineHeight: '1.2em' }],
      lg: ['1.125rem', { lineHeight: '1.2em' }],
      xl: ['1.25rem', { lineHeight: '1.3em' }],
      '2xl': ['1.5rem', { lineHeight: '1.3em' }],
      '3xl': ['1.875rem', { lineHeight: '1.3em' }],
      '4xl': ['2.25rem', { lineHeight: '1.3em' }],
      '5xl': ['3rem', { lineHeight: '1.3em' }],
      '6xl': ['3.75rem', { lineHeight: '1.3em' }],
      '7xl': ['4.5rem', { lineHeight: '1.3em' }],
      '8xl': ['6rem', { lineHeight: '1.2em' }],
      '9xl': ['8rem', { lineHeight: '1.2em' }],
      bodybase: ['1rem', { lineHeight: '1.7em' }], // PC본문
      bodylg: ['1.125rem', { lineHeight: '1.7em' }], // 모바일본문
      bodyreplybase: ['0.875rem', { lineHeight: '1.4em' }], // PC본문 답댓글
      bodyreplylg: ['1rem', { lineHeight: '1.4em' }], // 모바일본문 답댓글
      bodyquotebase: ['1rem', { lineHeight: '1.7em' }], // PC본문 인용
      bodyquotelg: ['1.125rem', { lineHeight: '1.7em' }], // 모바일본문 인용
    },
    // debugScreens: {
    //   position: ['bottom', 'right'],
    // },
    extend: {
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr':
          'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br':
          'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl':
          'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl':
          'linear-gradient(to top left, var(--tw-gradient-stops))',
      },
      // backgroundColor: ['dark'],
      // textColor: ['dark'],
      spacing: {
        15: '3.75rem',
        27: '6.75rem',
        97.5: '24.375rem',
        336: '84rem',
      },
      width: {
        'slide-content': 'calc(100% - 80px)',
      },
      height: {
        main: 'calc(100vh - 64px)',
      },
      maxWidth: {
        content: '42rem',
        'today-section-article-md': '19.5rem',
        'main-layout-lg:max-xl': '37.875rem',
        'main-layout-lg': '43.875rem',
        'main-layout': '36.875rem',
        'today-slide-md': '38.875rem',
        'side-layout-item-img': '5rem',
      },
      minWidth: {
        'main-layout-lg:max-lg': '37.875rem',
        'main-layout': '43.875rem',
        'side-layout-item-img': '5rem',
        'alook-pick-img-sm': '8.125rem',
        'alook-pick-img': '5.625rem',
        'topic-icon': '3rem',
      },
      minHeight: {
        'side-layout-item-img': '3.75rem',
        'alook-pick-img-sm': '5rem',
        'alook-pick-img': '3.5rem',
        'topic-icon': '3rem',
      },
      gridTemplateColumns: {
        main: 'auto 1fr auto',
      },
      lineHeight: {
        3.5: '0.875rem',
        12: '3rem',
      },
      zIndex: {
        tab: '100',
        mobileStepper: '1000',
        fab: '1050',
        speedDial: '1050',
        appBar: '1100',
        searchBar: '1150',
        drawer: '1200',
        toolbar: '1240',
        backdrop: '1250',
        modal: '1300',
        snackbar: '1400',
        tooltip: '1500',
      },
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#7C3AED',
  //         secondary: '#EC4899',
  //         accent: '#2DD4BF',
  //         neutral: '#ffffff',
  //         'base-100': '#ffffff',
  //         error: '#DC2626',
  //         info: '#2563EB',
  //         warning: '#FB923C',
  //         success: '#14B8A6',
  //       },
  //     },
  //   ],
  // },
  plugins: [
    require('@tailwindcss/typography'),
    // require('daisyui'),
    require('autoprefixer'),
    // require('tailwindcss-debug-screens'),
  ],
};
export default config
