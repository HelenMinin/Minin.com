import Link from 'next/link'
import * as Icon from 'react-icons/fa'

import { social } from '../../utils/social'
import { Container, Item } from './styles'

export const Social = () => (
  <Container>
    {social.map(item => {
      const TagName = Icon[item.icon]

      return (
        <Link key={item.id} href={item.href}>
          <Item>
            <TagName size={28} />
            <span>{item.name}</span>
          </Item>
        </Link>
      )
    })}
  </Container>
)
