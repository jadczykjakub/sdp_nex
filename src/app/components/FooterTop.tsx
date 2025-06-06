'use client';
import { useTranslation } from 'react-i18next';
import Button from "@/app/components/Button";
import DecorationWrapper from '@/app/components/DecorationWrapper';

const FooterTop = ({lang}: {lang: string}) => {
    const { t, i18n } = useTranslation();

    console.log(lang, "lang here")
    return (<div className="flex flex-col gap-4 items-center py-12">
        <DecorationWrapper type='single' theme='dark'>
            <h4 className='text-3xl font-bold text-center'>{t('top.default_page.title', {ns: 'footer'})}</h4>
        </DecorationWrapper>
        <Button linkTo={lang === "en" ? '/contact' : `/${lang}/contact`} text={t('top.default_page.button',  {ns: 'footer'})} />
    </div>);
}

export default FooterTop;