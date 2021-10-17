import { InputHTMLAttributes, useCallback } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (valor?: RadioValue) => void
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelFor,
  labelColor = 'white',
  value,
  ...props
}: RadioProps) => {
  const onChange = useCallback(() => {
    onCheck && onCheck(value)
  }, [onCheck, value])

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={labelFor}
        onChange={onChange}
        value={value}
        {...props}
      />
      {label && labelFor && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
