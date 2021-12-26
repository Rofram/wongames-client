import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Link href={buttonLink} passHref>
          <Button as="a">{buttonLabel}</Button>
        </Link>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
