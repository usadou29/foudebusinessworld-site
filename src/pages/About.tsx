import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SEOHead from '../components/SEOHead';

export default function About() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead
                title={t('about_page.title')}
                description={t('about_page.story.content')}
            />

            <div className="bg-brand-dark pt-32 pb-16 border-b border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {t('about_page.title')}
                        </h1>
                    </div>
                </Container>
            </div>

            <Section className="bg-black">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-16">
                        <div>
                            <h2 className="text-2xl font-serif text-brand-gold mb-4">{t('about_page.story.title')}</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t('about_page.story.content')}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-brand-gold mb-4">{t('about_page.mission.title')}</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t('about_page.mission.content')}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
