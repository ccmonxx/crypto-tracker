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
