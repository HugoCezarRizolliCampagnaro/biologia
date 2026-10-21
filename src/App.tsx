import { Header } from './components/Header';
import { DepthGauge } from './components/DepthGauge';
import { Hero } from './components/hero/Hero';
import { Intro } from './components/intro/Intro';
import { PoriferaSection } from './components/porifera/PoriferaSection';
import { CnidariaSection } from './components/cnidaria/CnidariaSection';
import { ComparisonSection } from './components/comparison/ComparisonSection';
import { QuizSection } from './components/games/QuizSection';
import { ReviewSection } from './components/review/ReviewSection';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <DepthGauge />
      <main className="dive">
        <Hero />
        <Intro />
        <PoriferaSection />
        <CnidariaSection />
        <ComparisonSection />
        <QuizSection />
        <ReviewSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
