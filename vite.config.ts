import { defineConfig } from 'vite' // Vite 설정 파일을 만들기 위한 함수
import react from '@vitejs/plugin-react' // Vite가 React 프로젝트를 이해할 수 있도록 도와주는 플러그인

export default defineConfig({
  plugins: [
    react(), // React 문법(JSX/TSX)을 사용할 수 있게 해주는 플러그인
  ],
})