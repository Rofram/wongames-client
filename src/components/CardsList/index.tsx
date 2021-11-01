import Image from 'next/image'

import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards = [] }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards.length > 0 ? (
      cards.map(({ img, number, flag }) => (
        <S.Card key={number}>
          <Image src={img} alt={flag} width={38} height={24} />
          <span>{number}</span>
        </S.Card>
      ))
    ) : (
      <div />
    )}
  </>
)

export default CardsList
