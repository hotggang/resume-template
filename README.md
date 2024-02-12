# 1. 시작

## 1-1. 설치

터미널에 다음의 코드를 입력하고 필요한 의존성들을 설치하세요.

```bash
$ pnpm install --frozen-lockfile
```

## 1-2. 실행

vite를 이용해 실행합니다.

```bash
$ pnpm dev
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

```html
<div>
  {{#if certificates}}
    <ul>  
      {{#each certificates}}
      <li>{{this.certificateName}}</li>
      {{/each}}
    </ul>
  {{/if}}
</div>
```


# 3. 에셋 관리 방법
**파일명은 반드시 `{테마이름}-{파일명}.png` 로 지어주세요.**   
이미지 형식의 확장자(jpg, png 등)을 사용하세요.
예시) `universe/img/universe-background.png` 


