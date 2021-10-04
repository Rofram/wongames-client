import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: Breakpoints
  greaterThan?: Breakpoints
}

const mediaMatchModifier = {
  lessThan: (breakpoint: Breakpoints) => css`
    ${media.lessThan(breakpoint)`
      display: block;
    `}
  `,

  greaterThan: (breakpoint: Breakpoints) => css`
    ${media.greaterThan(breakpoint)`
      display: block;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifier.lessThan(lessThan)}

    ${!!greaterThan && mediaMatchModifier.greaterThan(greaterThan)}
  `}
`
