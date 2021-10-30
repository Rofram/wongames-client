import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

const ItemStyles = css`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.black};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles};
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCart = styled.div`
  ${({ theme }) => css`
    ${ItemStyles};
    padding: 0 ${({ theme }) => theme.spacings.xxsmall};

    svg {
      margin-right: ${theme.spacings.xxsmall};
      margin-left: ${theme.spacings.xxsmall};
      width: 2.4rem;
    }
  `}
`
