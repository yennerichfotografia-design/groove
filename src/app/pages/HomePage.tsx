import { Intro } from '../components/Intro';
import { Services } from '../components/Services';
import { HeroBanner } from '../components/HeroBanner';
import { Portfolio } from '../components/Portfolio';
import { WhyChoose } from '../components/WhyChoose';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Performance } from '../components/Performance';
import { MidBanner } from '../components/MidBanner';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { TrustedBy } from '../components/TrustedBy';
import { Marquee } from '../components/Marquee';
import { WebShowcase } from '../components/WebShowcase';

export function HomePage() {
  return (
    <>
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
      <MidBanner />
      <Pricing />
      <FAQ />
      <TrustedBy />
      <Contact />
    </>
  );
}