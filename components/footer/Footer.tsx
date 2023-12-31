import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { ReactNode } from 'react'
import Twitter from '../icons/Twitter'
import Discord from '../icons/Discord'
import { WikiciousLogo } from '../../utils'

const Footer = () => {
  const { t } = useTranslation(['footer', 'navigation'])
  return (
    <div className="relative">
      <div
        className={`lg:px-20 lg:pt-16 pb-6 px-6 pt-8 bg-th-bkg-1 z-20 relative`}
      >
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start lg:pr-6">
            <Link href="/" shallow>
              <div className="flex flex-shrink-0 cursor-pointer items-center">
                <WikiciousLogo />
                <span className="ml-2 font-display text-2xl text-th-fgd-1">
                  Wikicious
                </span>
              </div>
            </Link>
            <p className="mt-3 mb-4 max-w-[420px] text-base text-center lg:text-left">
              {t('footer:footer-mission')}
            </p>
            <div className="flex space-x-3">
              {/*<a
                className="text-th-fgd-4 opacity-60 text-sm whitespace-nowrap"
                href="https://docs.wikicious.com/legal/terms-of-use"
                rel="noopener noreferrer"
              >
                {t('footer:terms-of-service')}
  </a>*/}
              {/* <div className="border-r border-th-bkg-4" />
              <a
                className="text-th-fgd-4 opacity-60 text-sm whitespace-nowrap"
                href="#"
              >
                {t('footer:privacy-policy')}
              </a> */}
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col sm:flex-row items-start justify-end sm:space-x-8 mb-8 lg:mb-0 border-b border-th-bkg-3 lg:border-b-0 pb-6 lg:pb-0">
            {/* <FooterLinkColumn title={t('navigation:about')}>
              <FooterLink path="/mango-dao" title={t('navigation:mango-dao')} />
              <FooterLink path="/mngo" title={t('navigation:mngo-token')} />
              <FooterLink
                path="#"
                isExternal
                title={t('navigation:v4-stats')}
              />
              <FooterLink path="/brand" title={t('navigation:brand')} />
            </FooterLinkColumn> */}
            {/* <FooterLinkColumn title={t('navigation:products')}>
              <FooterLink
                path="https://app.wikicious.com"
                isExternal
                title={t('navigation:mango-v4')}
              />
              <FooterLink
                path="/mobile-app"
                title={t('navigation:mobile-app')}
              />
            </FooterLinkColumn> */}
            <FooterLinkColumn title={t('navigation:developers')}>
              <FooterLink
                path="https://docs.wikicious.com"
                isExternal
                title={t('navigation:docs')}
              />
              <FooterLink
                path="https://github.com/wikicious"
                isExternal
                title={t('navigation:github')}
              />
              <FooterLink
                path="https://github.com/hetwik/wikicious/tree/dev/ts/client/scripts/mm"
                isExternal
                title={t('navigation:market-maker')}
              />
              <FooterLink
                path="https://github.com/wikicious"
                isExternal
                title={t('navigation:liquidator')}
              />
              <FooterLink
                path="https://trello.com/w/wikicious"
                isExternal
                title={t('navigation:contribute')}
              />
            </FooterLinkColumn>
            <FooterLinkColumn title={t('navigation:governance')}>
              <FooterLink
                path="https://dao.wikicious.com"
                isExternal
                title={t('navigation:vote')}
              />
              <FooterLink
                path="https://forum.wikicious.com"
                isExternal
                title={t('navigation:forum')}
              />
            </FooterLinkColumn>
            <FooterLinkColumn title={t('navigation:social')}>
              <FooterLink
                icon={<Twitter className="h-4 w-4 mr-2" />}
                path="https://twitter.com/wikiciousmarket"
                isExternal
                title={t('navigation:twitter')}
              />
              <FooterLink
                icon={<Discord className="h-4 w-4 mr-2" />}
                path="https://discord.gg/qGkaRU4fAA"
                isExternal
                title={t('navigation:discord')}
              />
            </FooterLinkColumn>
            {/* <FooterLinkColumn title={t('navigation:careers')}>
              <FooterLink
                path="/careers"
                title={t('navigation:work-with-us')}
              />
            </FooterLinkColumn> */}
          </div>
        </div>
        <div className="border-t border-th-bkg-3 mt-3 lg:mt-12 pt-6">
          <p className="flex justify-center font-mono text-xs opacity-60">
            {t('footer:copyright')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

const FooterLinkColumn = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  return (
    <div className="w-full lg:w-48 xl:w-56 mb-6 last:mb-0 sm:mb-0">
      <h4 className="text-th-fgd-3 text-lg mb-3">{title}</h4>
      {children}
    </div>
  )
}

const linkClassNames =
  'font-medium text-th-fgd-2 block mb-1.5 last:mb-0 md:hover:text-th-fgd-4 default-transition text-base flex items-center'

const FooterLink = ({
  path,
  title,
  isExternal = false,
  icon,
}: {
  isExternal?: boolean
  path: string
  title: string
  icon?: ReactNode
}) => {
  return isExternal ? (
    <a
      className={linkClassNames}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ? icon : null}
      {title}
    </a>
  ) : (
    <Link className={linkClassNames} href={path} shallow>
      {icon ? icon : null}
      {title}
    </Link>
  )
}
