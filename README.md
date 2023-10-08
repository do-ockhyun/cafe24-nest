# 500원짜리 Backend 서버 구축 

### 프로젝트 생성 및 폴더구조

- `npx @nestjs/cli@9.5.0 new {프로젝트}`
- cafe24 nodejs 호스팅은 node14
    - nestjs는 `V9.5.0`으로 생성해야 함 (현재 V10부터는 node16)
- `개발` 폴더와 `배포` 폴더 를 분리하여 형상관리
    - `개발` 폴더는 GITHUB와 같은 곳에 형상관리
    - `배포` 폴더는 cafe24 저장소에 (push 전용) 형상관리
        - ssh 으로 인증
        - master 브랜치
        - `web.js`  엔트리 파일
            - `require('./dist/main');`
        - 편집된  `package.json`
            - 용량 관리를 위해 `dependencies` 위주로 기재 (dev* 삭제)
---
