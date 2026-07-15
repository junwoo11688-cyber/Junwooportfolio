import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta(
    '페이지를 찾을 수 없습니다 | 현준우 영상 포트폴리오',
    '요청하신 페이지를 찾을 수 없습니다.',
  );

  return (
    <section className="section-pad detail-not-found">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소를 다시 확인하거나 메인 화면으로 이동해주세요.</p>
      <Link className="button button-primary" to="/">
        메인으로 돌아가기
      </Link>
    </section>
  );
}
