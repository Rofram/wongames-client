import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink = '/profile/me' }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.NavLink isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.NavLink>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.NavLink isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.NavLink>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.NavLink isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.NavLink>
    </Link>

    <Link href="/logout" passHref>
      <S.NavLink title="Sign out">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.NavLink>
    </Link>
  </S.Nav>
)

export default ProfileMenu
