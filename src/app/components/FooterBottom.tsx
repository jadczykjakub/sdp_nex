'use client';

import footerLogoImage from '@/../public/images/layout/logo_footer.jpg'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';


const FooterBottom = () => {
    const { t, i18n } = useTranslation();

    return (<div className='flex flex-col items-center text-center  gap-4  md:flex-row md:items-center md:justify-between px-5 md:px-14 layout'>
        <Image src={footerLogoImage} alt='sdp logo image' width={100} height={60} />
        <span>{t('bottom.copyright', {ns: 'footer'})}</span>
        <Link href="/files/privacy-policy.pdf" target='_blank'>{t('bottom.policy', {ns: 'footer'})}</Link>
    </div>);
}

export default FooterBottom;