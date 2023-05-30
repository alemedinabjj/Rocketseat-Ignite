import { ImageContainer, SuccessContainer } from '@/styles/pages/success'
import Link from 'next/link'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Olá <strong>Alexandre Medina</strong>, Obrigado por comprar conosco! sua
        <strong>camiseta beyond</strong> será enviada em breve.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
