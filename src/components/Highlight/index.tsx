import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'
import getImageUrl from 'utils/getImageUrl'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  background: {
    url: string
  }
  floatImage?: {
    url: string
  }
  alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  background,
  floatImage,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper
      backgroundImage={getImageUrl(background.url)}
      alignment={alignment}
    >
      {floatImage && (
        <S.FloatImage src={getImageUrl(floatImage.url)} alt={title} />
      )}
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
