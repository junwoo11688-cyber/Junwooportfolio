import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import SelectedWorks from '../components/SelectedWorks';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePortfolioContent } from '../hooks/usePortfolioContent';

export default function HomePage() {
  const { projects, contactLinks } = usePortfolioContent();

  usePageMeta(
    '현준우 영상 포트폴리오 | Video Director & PD',
    '영상 기획, 촬영, 편집, 모션그래픽 작업을 소개하는 영상 PD 현준우의 포트폴리오입니다.',
  );

  return (
    <>
      <Hero />
      <SelectedWorks projects={projects} />
      <About />
      <Contact contactLinks={contactLinks} />
    </>
  );
}
