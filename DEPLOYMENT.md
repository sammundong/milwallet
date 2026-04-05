# 밀월렛 배포 가이드

## 프로젝트 개요

밀월렛 자기계발 플랫폼이 성공적으로 구축되었습니다!

### 완료된 작업

✅ **1. 데이터 구조 구축** (`src/data/selfDevBusinessData.js`)
- 6개 카테고리(헬스, 건강, 도서, 군수, 자격증, 피부) 상품 데이터 완료
- 총 100+ 개 상품 정보 (가격, 제휴 링크, 수수료율, 태그 등)
- 카테고리별 루틴 데이터 (운동 루틴, 독서 루틴, 스킨케어 루틴 등)
- 커뮤니티 후기 샘플 데이터 (카테고리별 3개씩)
- 수익 모델 계산 함수 (MAU 1만명 기준 월 633만원 예상)

✅ **2. UI 컴포넌트 구현** (`src/pages/SelfDev.jsx`)
- 2,000+ 라인의 React 컴포넌트
- 6개 카테고리 전용 화면
- 루틴 실행 기능 (단계별 가이드 + 상품 추천)
- 제휴 구매 추적 (localStorage 기반)
- 절약 금액 대시보드
- 체력검정 트래커
- 독서 챌린지 시스템
- 자격증 학습 플래너
- 스킨케어 루틴 가이드

✅ **3. 빌드 성공**
- npm run build 정상 완료
- 번들 사이즈: 212.36 kB (gzip: 67.38 kB)
- 오류 0개

## 수익 모델

### CPA 기반 제휴 구조

| 카테고리 | 수수료율 | 월 전환율 | 평균 객단가 | 예상 월 수익 (MAU 1만) |
|---------|---------|----------|-----------|---------------------|
| 영양제 | 3% | 12% | 22,000원 | 792,000원 |
| 도서 | 3% | 8% | 25,000원 | 600,000원 |
| 화장품 | 4% | 15% | 18,000원 | 1,080,000원 |
| 온라인강의 | 5% | 6% | 89,000원 | 2,670,000원 |
| 운동용품 | 4% | 10% | 15,000원 | 600,000원 |
| **총계** | - | - | - | **6,330,000원** |

## Vercel 배포 방법

### 옵션 1: Vercel CLI (추천)

```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. Vercel 로그인
vercel login

# 3. 프로젝트 디렉토리로 이동
cd C:\Users\home

# 4. 배포
vercel --prod
```

### 옵션 2: GitHub + Vercel (자동 배포)

#### 1단계: GitHub 리포지토리 생성

```bash
# Git 초기화 (필요시)
git init

# 파일 추가
git add src package.json vite.config.js index.html vercel.json README.md .gitignore

# 커밋
git commit -m "Initial commit: MilWallet self-development platform"

# GitHub에 푸시
git remote add origin https://github.com/[YOUR_USERNAME]/milwallet.git
git branch -M main
git push -u origin main
```

#### 2단계: Vercel 연결

1. https://vercel.com 접속 후 로그인
2. "New Project" 클릭
3. GitHub 리포지토리 연결
4. 프로젝트 설정:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. "Deploy" 클릭

#### 3단계: 자동 배포 완료

- main 브랜치에 푸시할 때마다 자동 배포됩니다
- 배포 URL: https://milwallet-[random].vercel.app

### 옵션 3: 수동 배포

```bash
# 1. 빌드
npm run build

# 2. dist 폴더를 Vercel에 드래그 앤 드롭
# https://vercel.com/new 에서 "Upload" 탭 선택
```

## 로컬 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev

# http://localhost:3000 접속
```

## 프로젝트 구조

```
C:\Users\home\
├── src/
│   ├── data/
│   │   └── selfDevBusinessData.js    # 비즈니스 데이터
│   ├── pages/
│   │   └── SelfDev.jsx                # 메인 컴포넌트
│   ├── App.jsx                        # 앱 루트
│   ├── main.jsx                       # 엔트리 포인트
│   └── index.css                      # 글로벌 스타일
├── dist/                              # 빌드 결과
├── package.json
├── vite.config.js
├── index.html
├── vercel.json                        # Vercel 설정
└── README.md
```

## 주요 기능

### 1. 네이티브 광고 통합
- 루틴 완료 시 자연스러운 상품 추천
- 광고 배너 없이 콘텐츠 내 통합
- 우측 하단에 작은 "제휴" 텍스트만 표시

### 2. 제휴 수수료 추적
- localStorage 기반 구매 이력 저장
- 누적 절약 금액 실시간 표시
- 밀월렛 수익 투명하게 공개

### 3. 군생활 최적화
- PX 구매 가능 여부 표시
- 군 도서관 재고 확인 안내
- 복무 기간 맞춤 학습 플랜

### 4. 커뮤니티 연동
- 실제 장병 후기와 상품 연결
- 좋아요 및 도움됨 버튼
- 구매 버튼 즉시 연결

## 다음 단계

1. **실제 제휴 링크 연결**
   - 쿠팡 파트너스 가입
   - 올리브영 제휴 신청
   - 알라딘/YES24 제휴 신청
   - 온라인 강의 플랫폼 제휴

2. **사용자 인증 추가**
   - 군번 인증 시스템
   - 소셜 로그인 (카카오, 구글)
   - 마이페이지 기능

3. **백엔드 API 구축**
   - 상품 데이터 DB 저장
   - 구매 이력 서버 저장
   - 추천 알고리즘 개발
   - 커뮤니티 후기 CRUD

4. **분석 및 최적화**
   - Google Analytics 통합
   - 전환율 추적
   - A/B 테스트 실행
   - SEO 최적화

## 문의

프로젝트 관련 문의: [이메일 주소]
