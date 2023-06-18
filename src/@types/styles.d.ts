// extensão "d.ts": Arquivo de definição de tipos que contém apenas tipagem typescript
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Criando tipagem para o módulo styled-components
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
