import styled, { css } from 'styled-components'
import image from 'next/image'

import type { EmptyProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled(image)`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

const descriptionModifier = {
  white: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  black: css`
    color: ${({ theme }) => theme.colors.black};
  `
}

export const Description = styled.p<Pick<EmptyProps, 'color'>>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${descriptionModifier[color!]}
  `}
`
