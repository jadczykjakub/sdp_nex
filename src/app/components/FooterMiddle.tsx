'use client';

import mapImage from '@/../public/images/layout/map_footer.jpg'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import DecorationWrapper from '@/app/components/DecorationWrapper';
import Linkedin from '@/../public/images/svg/linkedin.svg'
import Envelope from '@/../public/images/svg/envelope.svg'

const FooterMiddle = () => {
    const { t } = useTranslation();

    return (
        <div className='relative'>
            <div className='realtive h-[400px]  md:h-[575px] triangle '>
                <Image src={mapImage} alt="warsaw map" className='absolute object-cover object-left min-h-[400px]  md:min-h-[575px] -z-10 ' />
                <div className=' px-5 md:px-14 layout h-full flex justify-center items-center  md:justify-start'>
                    <div className='grid gap-8 '>
                        <div className='flex flex-col gap-4 w-fit'>
                            <a href={`mailto:${t('middle.mail_url', {ns: 'footer'})}`} className='flex gap-2 items-center'> <Envelope />  <span>{t('middle.mail_title', {ns: 'footer'})}</span></a>
                            <a href={t('middle.linkedin_url', {ns: 'footer'})} className='flex gap-2 items-center' target="_blank" rel="noopener noreferrer"> <Linkedin /> <span>{t('middle.linkedin_title', {ns: 'footer'})}</span></a>
                        </div>
                        <div className='font-extralight'>
                            <DecorationWrapper theme='bright' type='double'>
                                <div className='grid gap-4'>
                                    <p>{t('middle.info_1', {ns: 'footer'})}</p>
                                    <p>{t('middle.info_2', {ns: 'footer'})}</p>
                                    <p>{t('middle.info_3', {ns: 'footer'})}</p>
                                    <p>{t('middle.info_4', {ns: 'footer'})}</p>
                                </div>
                            </DecorationWrapper>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FooterMiddle;