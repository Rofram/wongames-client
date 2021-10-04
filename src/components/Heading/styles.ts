import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: css`
    padding-left: ${({ theme }) => theme.spacings.xxsmall};
    border-left: 0.7rem solid ${({ theme }) => theme.colors.secondary};
  `,

  lineBottom: css`
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.8rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${({ theme }) => theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft}

    ${lineBottom && wrapperModifiers.lineBottom}
  `}
`
