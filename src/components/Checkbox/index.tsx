import { InputHTMLAttributes, useCallback, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelColor?: 'black' | 'white'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  name,
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = useCallback(() => {
    setChecked(!checked)
    onCheck && onCheck(!checked)
  }, [checked, onCheck])

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {label && (
        <S.Label htmlFor={name} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
