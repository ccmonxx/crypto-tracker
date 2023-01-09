# CRYPTO TRACKER

API 데이터를 가져오는 방법(`fetching`)과 React-Query 방식으로 변경하여 데이터를 관리하기

## Library

-   react-router-dom@5.3.4
-   @types/react-router-dom
-   styled-reset
-   styled-components
-   @types/styled-components
-   react-helmet
-   react-helmet-async

---

<!-- Setup -->

## `Create Router`

### Router Root

✓ BrowserRouter → Switch → Route(path) → Component

### Path

✓ `URL`을 설정할 수 있는 Route의 속성

### UseParams

✓ 현재 경로(path)를 확인할 수 있는 기능
</br>
✓ Route 컴포넌트의 path에 지정한 이름과 동일한 이름으로 호출

<!-- Style -->

## `Styles`

### Theme

✓ styled.d.ts : 테마 스타일 `타입` 정의
</br>
✓ theme : 테마 스타일 `값` 설정
</br>
✓ ThemeProvider : 테마를 적용할 컴포넌트의 상위 루트에 위치시키고, theme 컴포넌트를 연결

### GlobalStyle

✓ createGlobalStyle : 글로벌 스타일 생성 속성
</br>
✓ styled-reset : 모든 CSS스타일 초기화

### React-helmet-async

✓ google fonts의 정상적인 작동과 사용을 위해 HTML head 태그를 명시하여 사용
</br>
✓ Root : HelmetProvider → Helmet
</br>
✓ async 모듈로부터 import 할 것(생명주기 오류방지 - componentWillMount)

<!-- Data -->

## `Internal Data`

### Link

✓ react-router-dom의 이동 컴포넌트, to속성으로 이동할 경로(path)를 설정
</br>
✓ `리렌더링(새로고침)없이` 이동하는 특징(↔ a태그)
✓ to → state : 해당 경로의 데이터를 전달하는 옵션

## `API Data`

### useEffect Hook에서 async await을 사용하여 API호출

-   useEffect : 컴포넌트 렌더링될 때 가장 먼저 실행되는 React hook
-   async & await : 비동기 처리 함수(async로 요청하고, await으로 결과(fetch)를 받는다)

### useLocation

✓ Link(to→state)를 통해 전달된 데이터 확인할 수 있는 hook

## `Coin Data & Type`

### Async - Await 한줄 표기

```
▼ Before
const response = await fetch(`URL..`);
const json = await response.json();

🔻 After
const infoData = await (await fetch(`URL...`)).json();
```

### interface : 객체형태의 coin 데이터 타입하기

1. 데이터 확인(콘솔)
2. JSON 객체 정보 복사(전역변수 저장 후 추출)
    - 키 추출 : Object.keys(temp1).join()
    - 값 추출 : Object.values(temp1).map(v => typeof v)
3. 데이터 타입하기

| 단축키          | 기능                               |
| --------------- | ---------------------------------- |
| cmd + D         | 동일한 문자열을 선택               |
| cmd + shift + → | 선택한 문자열의 우측 끝까지 선택   |
| opt + shitf + I | 선택한 문자열의 우측 끝으로 포커싱 |

✓ JSON 데이터를 타입스크립트 타입으로 변환시켜주는 사이트
(https://app.quicktype.io/?l=ts)
