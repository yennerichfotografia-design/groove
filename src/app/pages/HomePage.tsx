import { Intro } from '../components/Intro';
import { Services } from '../components/Services';
import { HeroBanner } from '../components/HeroBanner';
import { Portfolio } from '../components/Portfolio';
import { WhyChoose } from '../components/WhyChoose';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Performance } from '../components/Performance';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { TrustedBy } from '../components/TrustedBy';
import { Marquee } from '../components/Marquee';
import { WebShowcase } from '../components/WebShowcase';
import { SEO } from '../hooks/useSEO';

export function HomePage() {
  return (
    <>
      <SEO />
      <Intro />
      <Marquee />
      <Services />
      <HeroBanner />
      <WhyChoose />
      <Portfolio />
      <WebShowcase />
      <Stats />
      <About />
      <Performance />
      <Pricing />
      <FAQ />
      <TrustedBy />
      <Contact />
    </>
  );
}