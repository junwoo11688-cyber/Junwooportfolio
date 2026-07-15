# 현준우 영상 포트폴리오

영상 기획, 촬영, 편집, 모션그래픽 작업물을 프로젝트별 역할과 기여도 중심으로 보여주는 개인 포트폴리오 사이트입니다. React, Vite, TypeScript로 제작된 정적 사이트라 별도 서버나 데이터베이스 없이 GitHub Pages에 배포할 수 있습니다.

## 1. 프로젝트 소개

- 이름: HYEON JUNWOO VIDEO DIRECTOR & PD
- 용도: 영상 PD 개인 포트폴리오
- 구성: 메인, 프로젝트 필터, 프로젝트 상세 페이지, About, What I Do, Tools & Skills, Process, Contact
- 배포 방식: 정적 빌드 후 GitHub Pages 배포

## 2. 설치 방법

Node.js 20 이상을 설치한 뒤 프로젝트 폴더에서 아래 명령어를 실행합니다.

```bash
npm install
```

## 3. 실행 방법

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:5188/
```

배포용 빌드:

```bash
npm run build
```

빌드 결과 미리보기:

```bash
npm run preview
```

미리보기 주소:

```text
http://127.0.0.1:4188/
```

TypeScript 확인:

```bash
npm run lint
```

## 4. 프로젝트 정보 수정 방법

프로젝트 목록은 `src/data/projects.ts` 파일에서 관리합니다. 새 프로젝트를 추가하려면 `projects` 배열에 객체를 하나 더 추가하면 됩니다.

주요 항목:

- `slug`: 상세 페이지 주소에 쓰이는 영문 값입니다. 예: `ai-company-explorers`
- `title`: 프로젝트명
- `client`: 클라이언트 또는 기관명
- `year`: 제작 연도
- `category`: 화면에 표시되는 프로젝트 종류
- `categories`: 필터에 사용할 분류입니다. `INTERVIEW`, `PUBLIC`, `BRAND`, `MOTION`, `YOUTUBE`, `AI CONTENT` 중에서 선택합니다.
- `role`: 담당 역할
- `summary`: 카드와 상세 페이지 상단에 표시되는 짧은 설명
- `format`: 영상 포맷 또는 납품 형태
- `deliverable`: 실제 산출물
- `contribution`: 이 프로젝트에서 담당자가 기여한 핵심 판단과 작업
- `outcome`: 결과 또는 포트폴리오에서 강조할 성과
- `visualTone`: 이미지가 없을 때 표시되는 프로젝트별 플레이스홀더 톤입니다. `interview`, `medical`, `brand`, `city`, `youtube`, `motion` 중에서 선택합니다.
- `technologies`: 사용 기술 또는 작업 항목
- `overview`, `purpose`, `direction`, `tasks`: 상세 페이지 본문 내용

## 5. 썸네일 교체 방법

이미지는 `public/images/projects` 폴더에 넣습니다.

예를 들어 `public/images/projects/ai-company.jpg` 파일을 추가했다면 `src/data/projects.ts`에서 해당 프로젝트의 `thumbnail` 값을 아래처럼 수정합니다.

```ts
thumbnail: '/images/projects/ai-company.jpg',
```

이미지를 넣지 않거나 `thumbnail` 값을 빈 문자열로 두면 프로젝트명과 카테고리가 들어간 다크톤 플레이스홀더가 자동으로 표시됩니다.
플레이스홀더의 분위기는 `visualTone` 값으로 프로젝트별로 다르게 표시됩니다.

## 6. 유튜브 또는 Vimeo 영상 추가 방법

`src/data/projects.ts`에서 원하는 프로젝트에 `videoUrl` 값을 추가합니다.

```ts
videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
```

또는 Vimeo:

```ts
videoUrl: 'https://vimeo.com/VIDEO_ID',
```

YouTube 일반 주소, `youtu.be` 주소, Shorts 주소, Vimeo 주소를 자동으로 iframe 임베드 주소로 변환합니다. 영상 주소가 없으면 16:9 플레이스홀더가 표시됩니다.

## 7. 프로필 이미지 추가 방법

프로필 이미지는 `src/assets/profile.jpg`로 넣으면 자동 적용됩니다. `profile.jpeg`, `profile.png`, `profile.webp`도 사용할 수 있습니다.

이미지가 없으면 다크톤 프로필 플레이스홀더가 표시됩니다.

## 8. 이메일과 SNS 링크 수정 위치

연락처는 `src/data/contact.ts`에서 수정합니다.

```ts
export const contactLinks = {
  email: 'your-email@example.com',
  instagram: 'https://instagram.com/your-id',
  youtube: 'https://youtube.com/@your-channel',
  vimeo: 'https://vimeo.com/your-id',
};
```

이메일은 `mailto:` 링크로 연결됩니다.

## 9. 관리자 페이지 사용 방법

푸터 오른쪽의 아주 작은 점 버튼을 누르거나 `/admin` 주소로 이동하면 관리자 페이지가 열립니다.

- 비밀번호: `961208`
- 수정 가능 항목: 연락처, 프로젝트 텍스트, 카테고리, 썸네일 경로, 영상 URL, 이미지 경로
- 저장 방식: 별도 서버가 없으므로 현재 브라우저의 `localStorage`에 저장됩니다.
- 배포 파일에 영구 반영하려면 관리자 페이지에서 JSON을 내보낸 뒤 `src/data/projects.ts`, `src/data/contact.ts`에 옮겨야 합니다.

## 10. GitHub Pages 배포 방법

1. GitHub에서 새 저장소를 만듭니다.
2. 이 프로젝트 파일을 저장소에 업로드하거나 push합니다.
3. GitHub 저장소의 `Settings > Pages`로 이동합니다.
4. Source를 `GitHub Actions`로 설정합니다.
5. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 실행됩니다.
6. 빌드가 끝나면 GitHub Pages 주소가 생성됩니다.

배포 워크플로우는 Node.js 20을 사용하고, `npm install`, `npm run build`를 실행한 뒤 `dist` 폴더를 GitHub Pages에 업로드합니다.

## 11. Vite base 경로 설정 방법

GitHub Pages의 프로젝트 사이트 주소는 보통 아래 형태입니다.

```text
https://사용자명.github.io/저장소이름/
```

이 경우 Vite의 `base` 값이 `/저장소이름/`이어야 합니다. 현재 설정은 `vite.config.ts`에서 환경 변수 `VITE_BASE_PATH`를 읽습니다.

```ts
base: process.env.VITE_BASE_PATH ?? '/',
```

GitHub Actions에서는 저장소 이름을 자동으로 사용합니다.

```yaml
VITE_BASE_PATH: /${{ github.event.repository.name }}/
```

로컬에서는 기본값 `/`로 실행됩니다. 사용자/조직 대표 페이지처럼 주소가 `https://사용자명.github.io/` 형태라면 GitHub Actions의 `VITE_BASE_PATH`를 `/`로 바꾸세요.

프로젝트 상세 페이지를 새로고침해도 열리도록 `public/404.html`에 GitHub Pages용 리다이렉트가 들어 있습니다. 사용자/조직 대표 페이지나 커스텀 도메인을 쓴다면 `public/404.html`의 `pathSegmentsToKeep` 값을 `0`으로 바꾸세요. 일반 프로젝트 저장소는 기본값 `1`을 유지하면 됩니다.

## 파일 구조

```text
src/
  assets/
  components/
  data/
  hooks/
  pages/
  styles/
  utils/
  App.tsx
  main.tsx
```

## 수정할 때 가장 많이 쓰는 파일

- 프로젝트 추가 및 수정: `src/data/projects.ts`
- 연락처 수정: `src/data/contact.ts`
- 프로필 이미지 추가: `src/assets/profile.jpg`
- 프로젝트 썸네일 추가: `public/images/projects`
- 전체 스타일 수정: `src/styles/global.css`
- GitHub Pages base 설정: `vite.config.ts`, `.github/workflows/deploy.yml`
