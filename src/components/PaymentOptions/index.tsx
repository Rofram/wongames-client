import Image from 'next/image'

import { Add } from '@styled-icons/material-outlined/Add'
import { ShoppingCart } from '@styled-icons/material-outlined'

import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'

import * as S from './styles'
import { useState } from 'react'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map(({ number, flag, img }) => (
            <S.CardItem key={number}>
              <S.CardInfo>
                <Image src={img} alt={flag} width={56} height={34} />
                {number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={number}
                value={number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCart role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCart>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          icon={<ShoppingCart />}
          fullWidth
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
