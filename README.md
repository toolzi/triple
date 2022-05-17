# triple-next

## 개요

트리플 홈페이지의 한 섹션을 구현합니다.

![example](./public/assets/example.png)

## 실행 방법

1. `yarn install`
2. `yarn build`
3. `yarn start`
4. `localhost:3000` 을 확인합니다

## 사용 기술

`NextJS`

- 프로젝트 세팅부터 기본 라우팅 등 편하고 빠르게 프로젝트를 시작할 수 있어 사용했습니다.

`typescript`

- 타입 체크를 통해 코드를 작성하면서부터 오류를 발견하기 쉬워 사용했습니다.
- 인터페이스를 쉽게 알 수 있어 개발 시 속도가 더 빠른 것 같아 사용했습니다.

`styled-component`

- 커스텀한 CSS 컴포넌트를 만드는 것이 자유로워 사용했습니다.
- 다른 CSS 유틸리티 라이브러리보다 가독성 측면에서는 더 좋은 것 같습니다.

`framer-motion`

- 애니매이션을 구현할 때 빠르고 쉽게 구현할 수 있어 사용했습니다.

## hooks

0 부터 인자로 받은 숫자까지 증가하는 count 를 반환하는 함수입니다.  
지정한 breakpoint 에서부터 느리게 숫자가 증가합니다.

`useIncrementingCount(totalCount: number): { count: number }`

- 주요 변수
  - `msTarget`: 증가를 완료할 총 시간 (단위: millisecond)
  - `breakpoints.ms`: 느리게 증가하는 시간 (단위: millisecond)
  - `breakpoints.count`: 느리게 증가할 숫자 (예: 5일 경우 마지막 5는 천천히 증가합니다)

## 폴더 구조

```
.
├── README.md
├── animations
    └── fadeIn.ts
├── babel.config.json
├── components
    ├── AwardLayout.tsx
    └── home
        ├── AwardImg.tsx
        ├── Indicator.tsx
        ├── Indicators.tsx
        ├── StoreAward.tsx
        ├── StoreAwards.tsx
        └── index.ts
├── hooks
    └── useIncrementingCount.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
    ├── _app.tsx
    └── index.tsx
├── public
    ├── assets
    ├── badge-apple.png
    ├── example.png
    ├── guide.gif
    ├── play-store.png
    └── triple.png
    ├── favicon.ico
    └── vercel.svg
├── styles
    └── GlobalStyle.tsx
└── tsconfig.json
```
