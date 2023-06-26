import { Header } from '../../Components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet /> {/* Conteudo da página */}
    </LayoutContainer>
  )
}
