import React from 'react'
import ReactDOM from 'react-dom/client' // React 앱을 실제 브라우저 DOM에 렌더링하기 위한 라이브러리
import { BrowserRouter } from 'react-router' // 브라우저 주소(URL)를 기반으로 라우팅할 수 있게 해주는 라우터
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* StrictMode는 개발 중 잠재적인 문제를 더 잘 찾을 수 있게 도와주는 모드 */}
    <BrowserRouter> {/* BrowserRouter로 App을 감싸야 페이지 이동 기능을 사용할 수 있음 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)