import React from 'react'
import { SvgProps } from '../../../components/Svg'
import Flex from '../../../components/Box/Flex'
import Dropdown from '../../../components/Dropdown/Dropdown'
import * as IconModule from '../icons'
import { socials } from '../config'

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const SocialLinks: React.FC = () => (
  <Flex>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon]
      const iconProps = { width: '24px', color: 'textSubtle', style: { cursor: 'pointer' } }
      const mr = index < socials.length - 1 ? '24px' : 0
      if (social.items) {
        return (
          <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
            {social.items.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                {item.label}
              </a>
            ))}
          </Dropdown>
        )
      }
      return (
        <a key={social.label} href={social.href} aria-label={social.label}>
          <Icon {...iconProps} />
        </a>
      )
    })}
  </Flex>
)

export default React.memo(SocialLinks, () => true)
