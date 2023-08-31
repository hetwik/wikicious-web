import { Popover, Transition } from '@headlessui/react'
import {
  Fragment,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useTranslation } from 'next-i18next'
import NavigationItemLink from './NavigationItemLink'
import ButtonLink from '../shared/ButtonLink'
import Twitter from '../icons/Twitter'
import Discord from '../icons/Discord'
// import ThemeToggle from './ThemeToggle'

const DesktopNavigation = () => {
  const { t } = useTranslation(['common', 'navigation'])

  return (
    <div className="hidden lg:flex lg:items-center space-x-8">
      {/* <NavigationItem title={t('navigation:about')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="/mango-dao"
            title={t('navigation:mango-dao')}
          />
          <NavigationItemLink path="/mngo" title={t('navigation:mngo-token')} />
          <NavigationItemLink
            path="#"
            isExternal
            title={t('navigation:v4-stats')}
          />
          <NavigationItemLink path="/brand" title={t('navigation:brand')} />
        </NavigationItemPanel>
      </NavigationItem> */}
      {/* <NavigationItem title={t('navigation:products')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="https://app.wikicious.com"
            isExternal
            title={t('navigation:mango-v4')}
          />
          <NavigationItemLink
            path="/mobile-app"
            title={t('navigation:mobile-app')}
          />
        </NavigationItemPanel>
      </NavigationItem> */}
      <NavigationItem title={t('navigation:developers')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="https://docs.wikicious.com"
            isExternal
            title={t('navigation:docs')}
          />
          <NavigationItemLink
            path="https://github.com/wikicious"
            isExternal
            title={t('navigation:github')}
          />
          <NavigationItemLink
            path="https://github.com/hetwik/wikicious/tree/dev/ts/client/scripts/mm"
            isExternal
            title={t('navigation:market-maker')}
          />
          <NavigationItemLink
            path="https://github.com/wikicious"
            isExternal
            title={t('navigation:liquidator')}
          />
          <NavigationItemLink
            path="https://trello.com/w/wikicious"
            isExternal
            title={t('navigation:contribute')}
          />
        </NavigationItemPanel>
      </NavigationItem>
      <NavigationItem title={t('navigation:governance')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="https://dao.wikicious.com"
            isExternal
            title={t('navigation:vote')}
          />
          <NavigationItemLink
            path="https://forum.wikicious.com"
            isExternal
            title={t('navigation:forum')}
          />
        </NavigationItemPanel>
      </NavigationItem>
      {/* <NavigationItem title={t('navigation:careers')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="/careers"
            title={t('navigation:work-with-us')}
          />
        </NavigationItemPanel>
      </NavigationItem> */}
      {/* <ThemeToggle /> */}
      <div className="flex items-center space-x-6">
        <a
          className="text-th-fgd-4 hover:text-th-fgd-1"
          href="https://twitter.com/wikiciousmarket"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          className="text-th-fgd-4 hover:text-th-fgd-1"
          href="https://discord.gg/qGkaRU4fAA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Discord className="h-5 w-5" />
        </a>
      </div>
      <ButtonLink linkText="Launch App" path="https://app.wikicious.com" />
    </div>
  )
}

export default DesktopNavigation

const NavigationItem = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  const [isOverButton, setIsOverButton] = useState(false)
  const [isOverList, setIsOverList] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isTouchInput, setIsTouchInput] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
  const button = useRef(null)

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click()
      setIsOpen(false)
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click()
      setIsOpen(true)
    }
  }, [isOverButton, isOverList])

  useEffect(() => {
    setIsTouchInput(false)
    setHasClicked(false)
  }, [hasClicked])

  return (
    <Popover className="relative">
      <Popover.Button
        className="h-10"
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true)
        }}
        onMouseEnter={() => {
          setIsOverButton(true)
        }}
        onMouseLeave={() => {
          setIsOverButton(false)
        }}
        onClick={() => {
          setHasClicked(true)
          setIsOpen(!isOpen)
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen)
        }}
      >
        <span className="font-display text-th-fgd-2 md:hover:text-th-fgd-1 default-transition text-base">
          {title}
        </span>
      </Popover.Button>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className="absolute z-20 w-56 right-0"
          onMouseEnter={() => {
            setIsOverList(true)
          }}
          onMouseLeave={() => {
            setIsOverList(false)
          }}
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const NavigationItemPanel = ({ children }: { children: ReactNode }) => {
  return <div className="bg-th-bkg-2 py-4 rounded-lg">{children}</div>
}
