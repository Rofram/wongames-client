import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

export const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.8rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  small: css`
    font-size: ${({ theme }) => theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: css`
    font-size: ${({ theme }) => theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    `}
  `,
  huge: css`
    font-size: ${({ theme }) => theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size, color, lineLeft, lineBottom, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}

    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}

    ${!!size && wrapperModifiers[size]}
  `}
`
