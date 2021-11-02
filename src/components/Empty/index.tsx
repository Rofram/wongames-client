import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
  color?: 'white' | 'black'
}

const Empty = ({
  title,
  description,
  hasLink,
  color = 'white'
}: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      width={379}
      height={284}
    />

    <S.Title>{title}</S.Title>

    <S.Description color={color}>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
