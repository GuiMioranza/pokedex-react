import { ConteinerToCentrelize, Container } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return(
    <ConteinerToCentrelize>
      <Container>{children}</Container>
    </ConteinerToCentrelize>
  ) 
}