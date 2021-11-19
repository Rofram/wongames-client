import Image from 'next/image'

import { Download } from '@styled-icons/boxicons-solid/Download'

import * as S from './styles'
import getImageUrl from 'utils/getImageUrl'

export type PaymentInfoProps = {
  number: string
  flag: string
  purchaseDate: string
  img: string
}

export type GameItemProps = {
  title: string
  img: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  title,
  img,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <Image src={getImageUrl(img)} alt={title} width={150} height={70} />
      </S.ImageBox>
      <S.Content>
        <S.Title>
          {title}
          {downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
    {paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <Image
            src={paymentInfo.img}
            alt={paymentInfo.flag}
            width={56}
            height={34}
          />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
