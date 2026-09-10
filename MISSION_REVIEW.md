# 코디세이 B1-1 미션 정리 · 예제 비교 · 제출 점검표

작성일: 2026-09-10 | 대상: 이동현(cauchy-P)

## 1. 이 과제에서 해야 하는 일

**HTML·CSS·JavaScript만으로 본인을 소개하는 반응형 웹사이트를 만들고 GitHub Pages에 공개합니다.** 예쁜 화면 자체보다, 사용자 이벤트가 상태를 바꾸고 그 상태가 화면에 반영되는 과정을 이해하는 것이 핵심입니다. PDF의 학습시간은 80시간입니다.

최종 페이지에는 Hero(인사·버튼), About(소개·이미지), Skills(기술), Projects(GitHub 저장소 카드), Contact(문의 폼), Footer(저작권·소셜 링크)가 있어야 합니다. 모바일 메뉴, 부드러운 스크롤, 맨 위 이동, 스크롤 시 내비게이션 변경, 다크 모드, 등장 애니메이션을 구현합니다. GitHub API를 불러올 때는 로딩·성공·오류·빈 상태를 구분합니다.

문의 폼의 필수 범위는 이름·이메일·메시지 검증 및 성공 메시지입니다. 실제 이메일 전송, 언어별 프로젝트 필터, 타이핑, 시스템 테마 감지는 선택입니다. React/Vue/jQuery/Bootstrap/Tailwind 등은 금지하고, 아이콘과 웹 폰트는 허용합니다.

제출물은 **저장소 URL + GitHub Pages URL + 데스크톱·모바일·다크 모드 스크린샷**입니다. README에는 프로젝트 설명·기술·배포 URL·스크린샷을 넣습니다.

원문: 첨부 「미션 - AI 도구 학습.pdf」 1~9쪽. 별도의 점수·배점표는 없으므로 아래 표는 기능 요구사항과 제약을 재구성한 점검표입니다. 동일 배점이나 공식 합격 판정을 뜻하지 않습니다.

## 2. 평가 체크리스트

체크박스는 제출자가 확인하며 채우는 용도입니다. '이번 구현'의 **구현**은 소스에서 확인, **모사검증**은 DOM을 모사한 실행으로 확인, **대기**는 아직 미완료 또는 실제 브라우저 확인이 필요하다는 뜻입니다. 모사검증이 실제 Chrome 검증을 대신하지 않습니다.

| 번호 | 체크 항목 | 확인 방법 | 이번 구현 |
| --- | --- | --- | --- |
| 01 | ☐ index.html / css / js / images 역할 분리 | 폴더와 파일 확인 | 제출 ZIP에 구성 |
| 02 | ☐ 외부 CSS·JS 연결 | link, script의 경로 확인 | 정적 검사 통과 |
| 03 | ☐ VS Code + Live Server 구성 | 직접 열어 저장 시 갱신 확인 | 확장 추천·실행 안내 제공, 사용자 환경 대기 |
| 04 | ☐ header/nav/main/section/article/footer | 의미에 맞게 영역 분리 | 정적 검사 통과 |
| 05 | ☐ Hero의 인사·CTA 버튼 | 소개와 프로젝트·연락 이동 | 구현 |
| 06 | ☐ About의 소개·프로필 이미지 | 소개와 의미 있는 alt | 구현, 원격 이미지 로딩 확인 대기 |
| 07 | ☐ Skills 목록 | 실제 학습 기술·관심 분야 구분 | 구현 |
| 08 | ☐ Projects의 API 카드 | API 응답으로 카드 생성 | 모사검증 |
| 09 | ☐ Contact와 Footer | 폼·저작권·GitHub 링크 | 구현 |
| 10 | ☐ 섹션 앵커 링크 | 모든 링크의 목적지 ID 확인 | 정적 검사 통과 |
| 11 | ☐ 모든 이미지에 의미 있는 alt | img 속성 확인 | 정적 검사 통과 |
| 12 | ☐ 모든 입력란 label의 for-id 연결 | label과 입력 ID 대조 | 정적 검사 통과 |
| 13 | ☐ css/style.css 사용 | 외부 파일 확인 | 구현 |
| 14 | ☐ :root에 색상·폰트·간격 변수 | CSS 변수 확인 | 구현 |
| 15 | ☐ data-theme="dark" 변수 | 테마별 색상 정의 | 구현 |
| 16 | ☐ 내비게이션 Flexbox | 로고 왼쪽·메뉴 오른쪽 | 구현, 실제 배치 대기 |
| 17 | ☐ Projects Grid + auto-fit/minmax | 카드 열 수 자동 조절 | 구현, 실제 배치 대기 |
| 18 | ☐ 모바일 퍼스트 | 기본 CSS가 작은 화면 기준 | 구현 |
| 19 | ☐ 768px·1024px 브레이크포인트 | min-width 미디어 쿼리 | 구현 |
| 20 | ☐ 모바일 메뉴 숨김·햄버거 노출 | 모바일에서 열기/닫기 | 토글 모사검증, 실제 배치 대기 |
| 21 | ☐ 버튼·카드 hover/transition, 카드 shadow | 마우스·CSS 확인 | 구현 |
| 22 | ☐ script defer | 파싱 후 JS 실행 | 정적 검사 통과 |
| 23 | ☐ var 없이 const/let | JS 선언 확인 | 구현 |
| 24 | ☐ onclick 없이 addEventListener | HTML 이벤트 속성 검사 | 정적 검사 통과 |
| 25 | ☐ querySelector/querySelectorAll | DOM 선택 코드 | 구현 |
| 26 | ☐ textContent/innerHTML | 안내문·카드 갱신 | 모사검증 |
| 27 | ☐ classList.add/remove/toggle | 헤더·등장·메뉴 코드 | 구현, 메뉴·헤더 모사검증 |
| 28 | ☐ click/submit/scroll/input | 각 이벤트 연결 | 모사검증 |
| 29 | ☐ event.preventDefault | 폼 제출 시 새로고침 방지 | 모사검증 |
| 30 | ☐ 햄버거 active 토글 | 클릭 두 번 후 닫힘 | 모사검증 |
| 31 | ☐ 메뉴 이동 시 부드러운 스크롤 | 앵커 + CSS | 구현, 브라우저 확인 대기 |
| 32 | ☐ 300px 이상 맨 위 버튼 | 299/300 경계, 클릭 후 top:0 | 300·0 및 이동 모사검증 |
| 33 | ☐ 60px 이상 내비게이션 변경 | 59/60 경계 | 60·0 모사검증 |
| 34 | ☐ 다크 모드 전환·저장·복구 | 버튼 후 다시 초기화 | 모사검증 |
| 35 | ☐ Intersection Observer 등장 효과 | threshold 0.2, 관찰 해제 | 구현, 실제 관찰 대기 |
| 36 | ☐ 기준값 변경 시 README 명시 | 스크롤·Observer 표 | 원문 기준값 그대로 명시 |
| 37 | ☐ 이름·이메일·메시지 필수 | 빈 값·공백 제출 | 모사검증 |
| 38 | ☐ 이메일 형식 검증 | 틀린 이메일 제출 | 모사검증 |
| 39 | ☐ 입력란 근처 오류 메시지 | 필드별 오류·aria-invalid | 모사검증 |
| 40 | ☐ 정상 제출 성공 메시지 | 실제 전송과 검증 성공 구분 | 모사검증, 실제 전송 없음 |
| 41 | ☐ 화살표 함수 | 이벤트·변환 함수 | 구현 |
| 42 | ☐ 템플릿 리터럴 HTML | 프로젝트 카드 문자열 | 구현 |
| 43 | ☐ 구조분해 할당 | API 필드 추출 | 구현 |
| 44 | ☐ map/forEach | 카드 변환·입력란 순회 | 구현 |
| 45 | ☐ fetch + async/await, 본인 repos API | cauchy-P 엔드포인트 | 구현, 실제 브라우저 통신 대기 |
| 46 | ☐ 로딩 UI | 응답 완료 전에 표시 | 모사검증 |
| 47 | ☐ 성공 카드 UI | 정상 배열 응답 | 모사검증 |
| 48 | ☐ 오류 UI + 재시도 | 403 후 성공 응답 | 모사검증 |
| 49 | ☐ 빈 상태 UI | 빈 배열 응답 | 모사검증 |
| 50 | ☐ try/catch, 403 처리 | HTTP·통신 오류 | 모사검증 |
| 51 | ☐ 3개 이상 상태 → 렌더링 | 테마·API·폼 등 흐름 설명 | 5가지 구현 |
| 52 | ☐ 외부 라이브러리 금지 | HTML·CSS·JS 참조 확인 | 준수 |
| 53 | ☐ 인라인 style 금지 | HTML과 JS 템플릿 모두 확인 | 준수 |
| 54 | ☐ 최신 Chrome 정상 동작 | 실제 브라우저에서 조작 | 대기 |
| 55 | ☐ GitHub Pages 배포 URL | 실제 외부 접속 확인 | 대기 |
| 56 | ☐ 배포 환경 전체 기능 확인 | 메뉴·테마·API·폼 | 대기 |
| 57 | ☐ README 설명·기술·URL·스크린샷 | README 및 파일 대조 | 설명·기술 완료, Pages URL·스크린샷 대기 |
| 58 | ☐ 저장소 URL·사이트 URL·3종 스크린샷 제출 | 제출 폼 확인 | 대기 |

### 선택 과제

- [x] 언어별 필터와 array.filter: 이번 구현에 포함
- [ ] Hero 타이핑 효과: 선택 기능으로 생략
- [ ] 실제 폼 전송: 선택 기능으로 생략, 이메일 링크 제공
- [x] 시스템 다크 모드 감지: 저장값이 없을 때 사용, 수동 선택을 우선

### 설명할 수 있어야 하는 개념

1. 시맨틱 HTML은 영역의 의미를 전달합니다. article은 독립적으로 읽을 카드, section은 한 주제의 묶음입니다.
2. Flexbox는 한 축의 배치, Grid는 행과 열의 배치에 적합합니다.
3. querySelector로 찾고, addEventListener로 연결하고, 이벤트에서 상태를 바꾼 뒤 render 함수를 호출합니다.
4. map은 변환, filter는 선별, forEach는 각 항목에 작업 적용입니다. 구조분해는 필요한 필드를 꺼냅니다.
5. await는 함수 안에서 비동기 결과를 기다립니다. fetch는 HTTP 오류도 응답으로 반환하므로 response.ok를 따로 확인합니다.
6. 상태 변경만으로 DOM이 자동 갱신되지 않습니다. 이번 구현에서는 각 render 함수가 명시적으로 화면을 바꿉니다.

## 3. 예제 조사 범위와 공통점

세 저장소의 HTML, CSS, JavaScript, README와 파일 트리를 읽었습니다. 조회 중 저장소 변경으로 근거가 섞이지 않도록 아래 커밋에 고정했습니다. 실제 배포 사이트의 브라우저 조작, 이메일 수신, 작성자의 개발 환경은 검증하지 않았습니다.

| 예제 | 검사 기준 커밋 | 주요 파일 |
| --- | --- | --- |
| Cerhovah | 8c7955ec046b7f61f69d5b9bf5a9a1235148d50e | index.html, css/style.css, js/app.js, README.md |
| Dong-tak | b9c01403e985a78a8cfd67b5fb722cb63de4dfd4 | B1-1/index.html, css/style.css, js/main.js, js/projects-data.js, README.md |
| JoongHyun | 5277e970d47f25fe84de457b1bd8607c930381ef | index.html, css/style.css, js/main.js, README.md |

공통점은 다음과 같습니다.

1. **소개 콘텐츠와 동작 코드의 분리:** HTML·CSS·JS를 파일로 나누고, 소개·기술·대표 작업과 API 저장소 목록을 구분합니다.
2. **필수 섹션을 갖춘 한 페이지:** 앵커 링크로 이동하며 모바일 메뉴, 테마, 스크롤 기능을 제공합니다.
3. **CSS 변수와 반응형:** 테마는 data-theme 변수 교체, 내비게이션은 Flexbox, 저장소 목록은 auto-fit/minmax Grid로 구현합니다. 768px·1024px 분기를 둡니다.
4. **성공 외의 상태도 구현:** GitHub API 요청에 로딩·오류·빈 목록 UI와 재시도 버튼이 있습니다. response.ok 검사와 403 처리도 있습니다.
5. **작은 함수로 기능 분리:** 테마 적용, 메뉴 닫기, 카드 표시, 폼 검증 등을 나누어 이벤트와 화면 변경의 관계를 드러냅니다. 상태를 모두 하나의 객체에 저장하는 것은 세 예제의 공통 조건은 아닙니다.
6. **입력 중·제출 시 검증:** 폼을 새로고침으로 제출하지 않고 필수값·이메일 검사와 오류·성공 피드백을 표시합니다.
7. **README에 구현 근거 제공:** 실행법·기능·기준값·배포 주소·스크린샷 참조가 있습니다. 세 예제 모두 타이핑 효과를 구현했으나 이는 선택 과제입니다.

디자인이나 특정 문구를 복사하기보다, **필수 기능의 빠짐없는 연결과 상태별 UI 처리**를 참고하는 것이 적절합니다.

## 4. 예제별 체크리스트 충족 여부

**✓ = 소스·문서에서 구현 근거 확인, △ = 부분 충족/주의, ? = 실행 확인 필요.** 아래 표는 공식 점수표가 아니며 '✓'가 실제 브라우저의 무결점 동작을 뜻하지 않습니다.

| 평가 영역 | Cerhovah | Dong-tak | JoongHyun |
| --- | --- | --- | --- |
| 기본 파일 분리·외부 CSS/JS·defer | ✓ | ✓ | ✓ |
| 필수 섹션·시맨틱 태그 | ✓ | ✓ | ✓ |
| 앵커·이미지 alt·label 연결 | ✓ | ✓ | ✓ |
| 변수·테마·Flexbox·Grid | ✓ | ✓ | ✓ |
| 모바일 퍼스트·768/1024 | ✓ | ✓ | ✓ |
| hover·transition·shadow | ✓ | ✓ | ✓ |
| const/let·DOM 선택·조작·이벤트 | ✓ | ✓ | ✓ |
| 햄버거·부드러운 이동 | ✓ | ✓ | ✓ |
| 60px/300px 스크롤 동작 | ✓ | △ 정확히 60/300에서는 미작동 | ✓ |
| 다크 모드·저장·복구 | ✓ | ✓ 일반 저장 환경 | ✓ |
| Intersection Observer 0.2 | ✓ | ✓ | ✓ |
| 필수값·이메일·필드 오류 | ✓ | ✓ | ✓ |
| 제출 방지·성공 메시지 | ✓ 전송 응답 후 | ✓ 전송 응답 후 | ✓ 검증 데모 |
| ES6·구조분해·map·forEach | ✓ | ✓ | ✓ |
| GitHub API·로딩·성공·오류·빈 상태 | ✓ | ✓ | ✓ |
| 403 처리·재시도 | ✓ | ✓ | ✓ |
| 3가지 이상 상태 → 화면 흐름 | ✓ | ✓ | ✓ |
| 외부 프레임워크 금지 | ✓ | ✓ | ✓ |
| 인라인 style 금지 | ✓ | **△ 오류 템플릿에 1곳** | ✓ |
| README 설명·기술·배포 URL | ✓ | ✓ | ✓ |
| 3종 스크린샷 파일·참조 | ✓ 존재 확인 | ✓ 존재 확인 | ✓ 존재 확인 |
| Live Server 실행법 | ✓ 문서 | ✓ 문서 | ✓ 문서·확장 설정 |
| 실제 배포 환경 정상 동작 | ? | ? | ? |
| 실제 Chrome·반응형·이미지 로딩 | ? | ? | ? |
| 선택: 언어별 필터 | ✓ | ✓ | 미구현 |
| 선택: 타이핑 | ✓ | ✓ | ✓ |
| 선택: 시스템 테마 감지 | ✓ | ✓ | 미구현 |
| 선택: 실제 폼 전송 | 코드·endpoint 존재, 수신 미검증 | 코드·endpoint 존재, 수신 미검증 | 미구현·데모 명시 |

### Cerhovah: 요구사항과 구조가 잘 연결됨

STATE와 DOM을 분리하고, applyTheme/renderProjects/renderFieldError 등의 함수로 상태를 표시합니다. 필터, 타이핑, 시스템 테마 감지, Formspree 연결 코드도 있습니다. 외부 문자열 HTML 이스케이프와 localStorage 예외 처리를 포함합니다.

GitHub 목록 요청은 쿼리 없는 기본 repos 엔드포인트이며 페이지네이션을 구현하지 않았습니다. 전체 저장소를 반드시 모두 보여야 한다는 필수 조건은 없어 자동 감점 항목으로 보지 않지만, 저장소가 많으면 첫 페이지에 한정되는 개선점입니다. API 요청 타임아웃·응답 배열 검증도 추가할 수 있습니다. 실제 Formspree 수신 여부는 확인하지 않았습니다.

근거: [app.js](https://github.com/Cerhovah/codyssey_mission_b1-1/blob/8c7955ec046b7f61f69d5b9bf5a9a1235148d50e/js/app.js), [CSS](https://github.com/Cerhovah/codyssey_mission_b1-1/blob/8c7955ec046b7f61f69d5b9bf5a9a1235148d50e/css/style.css), [README](https://github.com/Cerhovah/codyssey_mission_b1-1/blob/8c7955ec046b7f61f69d5b9bf5a9a1235148d50e/README.md).

### Dong-tak: 핵심 기능은 갖췄으나 금지 조건 보완 필요

`B1-1/js/main.js`의 API 오류 템플릿에 `<p style="font-size:0.85rem">`이 있습니다. JS가 만드는 HTML도 인라인 스타일 금지의 적용 대상이므로 외부 CSS 클래스로 옮겨야 합니다.

같은 파일에서 헤더와 맨 위 버튼 조건이 `y > NAV_SCROLL_THRESHOLD`, `y > SCROLL_TOP_THRESHOLD`입니다. README는 각각 '60px 이상', '300px 이상'이라고 적어 정확히 60/300일 때 코드와 설명이 다릅니다. `>=`로 맞추거나 기준을 정확히 문서화하면 됩니다.

추가 개선점: API 문자열을 innerHTML에 넣기 전 이스케이프하는 처리가 없고, localStorage 접근이 최상단에서 예외 처리 없이 실행됩니다. 저장 접근이 차단되면 뒤의 기능 초기화가 중단될 수 있습니다. 이 두 사항은 원문에 별도 항목으로 적힌 필수 요구는 아니므로, 인라인 스타일 위반과 구분합니다.

근거: [main.js](https://github.com/Dong-tak/codyssey/blob/b9c01403e985a78a8cfd67b5fb722cb63de4dfd4/B1-1/js/main.js), [CSS](https://github.com/Dong-tak/codyssey/blob/b9c01403e985a78a8cfd67b5fb722cb63de4dfd4/B1-1/css/style.css), [README](https://github.com/Dong-tak/codyssey/blob/b9c01403e985a78a8cfd67b5fb722cb63de4dfd4/B1-1/README.md).

### JoongHyun: 기본 범위와 오류 처리가 명확함

상태 객체에 테마·메뉴·프로젝트·폼을 모으고, API의 15초 타임아웃, 403/429/404, 응답 형태 검증을 구현했습니다. Escape·외부 클릭·화면 폭 변경으로 메뉴를 닫고, 폼 검증 성공과 실제 전송을 명확히 구분합니다.

프로젝트 API는 최근 최대 6개로 제한하며 HTML과 README에 명시합니다. 언어 필터와 시스템 테마 감지는 없지만 선택 항목이므로 필수 미충족으로 판정하지 않습니다. 타이핑 기능은 구현되어 있습니다.

근거: [main.js](https://github.com/JoongHyun-codyssey/codyssey_basic_intro_page_B1_1/blob/5277e970d47f25fe84de457b1bd8607c930381ef/js/main.js), [CSS](https://github.com/JoongHyun-codyssey/codyssey_basic_intro_page_B1_1/blob/5277e970d47f25fe84de457b1bd8607c930381ef/css/style.css), [README](https://github.com/JoongHyun-codyssey/codyssey_basic_intro_page_B1_1/blob/5277e970d47f25fe84de457b1bd8607c930381ef/README.md).

## 5. cauchy-P의 내용을 과제에 반영한 방식

| 확인한 공개 내용 | 사이트 반영 | 근거 |
| --- | --- | --- |
| 개발과 번역 학습, Codyssey 재학 | Hero와 About | 프로필 README |
| 2025년 게이오 약학부 입학·현재 휴학 | About | 프로필 README |
| OCR·기술 번역·문서 레이아웃 관심 | Hero 노트·Skills | 프로필 README |
| Python·C·Linux | 기술 소개 | 프로필 README |
| 한국어 모국어, JLPT N1, TOEFL 95 | 언어 정보 | 프로필 README 기재값 |
| 지침·용어집 준수, 원문·코드·맥락 확인 | 작업 방식 | 프로필 README |
| 생물학 퀴즈·JSON 저장·입력 검증 | 대표 프로젝트 | codyssey-E2 README |
| MAC 연산·Cross/X 패턴·JSON 분석 | 대표 프로젝트 | codyssey-E3 README |
| 터미널·Git·Docker·Nginx 실습 | 환경 기술 소개 | codyssey2-E1 README |
| 공개 GitHub 아바타·이메일 | About 이미지·Contact 링크 | 프로필 |

번역 솔루션을 이미 완성했다고 표현하거나, 실제로 확인하지 않은 경력·숙련도·프로젝트 성과를 만들지 않았습니다. API 목록은 공개 저장소만 읽고, 포크 저장소에는 Fork 표기를 붙입니다. 이 사이트의 프런트엔드에는 비공개 저장소 내용이나 인증 토큰을 포함하지 않습니다.

출처: [프로필 README](https://github.com/cauchy-P/cauchy-P/blob/11800831e92463f3084bc41d52d594badc4e14f1/README.md), [생물학 퀴즈](https://github.com/cauchy-P/codyssey-E2/blob/657c807825879933209a39dd857232a042c86b4f/README.md), [Mini NPU Simulator](https://github.com/cauchy-P/codyssey-E3/blob/c1cea546197273577eb6834ce598d732ad238c50/README.md), [개발 환경 실습](https://github.com/cauchy-P/codyssey2-E1/blob/e81e14c2690f8383844d07bc2269e6fc0b574cc4/README.md).

## 6. 완료한 작업과 남은 제출 단계

완료: 미션 재정리, 체크리스트, 세 예제의 소스 비교, 공개 프로필 기반 새 사이트 구현, API/폼/테마 등 17개 모사검증, 정적 HTML·JS 검사, README와 GitHub Pages 워크플로 준비.

남음: 새 GitHub 저장소 생성 및 파일 업로드, GitHub Pages 설정·실제 배포, 실제 Chrome 검증, 데스크톱·모바일·다크 모드 스크린샷. 연결된 GitHub 기능에는 새 저장소 생성 및 Pages 설정 작업이 노출되어 있지 않습니다. 기존의 다른 과제 저장소를 임의로 바꾸지 않았습니다.

완성된 소스는 `cauchy-P_B1-1_submission.zip`에 들어 있습니다. 압축을 푼 뒤 새 공개 저장소 루트에 올리고 Settings → Pages에서 main/(root)를 선택할 수 있습니다. 포함된 GitHub Actions 워크플로를 사용하는 대안은 README에 적었습니다.

Sites 확인용 사이트는 GitHub Pages 제출 요건과 별개입니다. Sites 주소가 생기더라도 GitHub Pages 배포 완료로 체크하면 안 됩니다.
