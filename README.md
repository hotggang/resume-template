# 1. 시작

## 1-1. 설치

터미널에 다음의 코드를 입력하고 필요한 의존성들을 설치하세요.

```bash
$ pnpm install --frozen-lockfile
```

## 1-2. 실행

ts 파일을 js로 컴파일하는 과정을 거친 후, http-server 를 이용하여 웹서버를 실행합니다.

```bash
$ pnpm build
```

<br/>
<br/>

# 2. 핸들바

## 2-1. 소개

json을 파싱하고 컴파일할 때 `compile.js`라는 모듈을 사용합니다.  
자세한 내용은 [공식 문서](https://handlebarsjs.com/)를 참고하세요.

## 2-2. 기본 문법

### 2-2-1. 베이직 문법

```html
<p>{{name}}</p>
```

### 2-2-2. 반복

```html
<ul>
  {{#each certificates}}
  <li>{{this.certificateName}}</li>
  {{/each}}
</ul>
```

### 2-2-3. 조건

작성 중
