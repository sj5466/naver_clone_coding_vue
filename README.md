# Eum Admin

## 개발환경

개발 서버

| IP             | HostName | Account       | Password  |
| -------------- | -------- | ------------- | --------- |
| 192.168.210.58 | EUM_WEB  | administrator | qwer1234! |
| 192.168.210.59 | EUM_DB   | administrator | qwer1234! |

NAS 정보

| Path                   | Domain    | Account  | Password   |
| ---------------------- | --------- | -------- | ---------- |
| `\\192.168.210.58\NAS` | `EUM_WEB` | `nasadm` | `Pa$$w0rd` |

DB 연결 정보

| Server           | Account | Password    |
| ---------------- | ------- | ----------- |
| `192.168.210.59` | `sa`    | `Pa$$w0rd@` |



## Structure



### Modules

- `system` : 시스템
  - 용어
  - 계열사 관리
  - 권한 그룹 관리
- `menu` : 메뉴
  - 메뉴 설정
  - 퀵메뉴 설정
- `board` : 게시판
  - 필드 설정
  - 게시판 설정
  - 게시글 관리
- `func` : 기타 기능
  - 태마 관리
  - 팝업 관리
  - 휴일 관리
- `reserve` : 예약
  - 자원 관리
  - 예약함 관리
  - 예약글 관리
- `stat` : 통계
  - 접속로그
  - 메뉴접근로그
  - 접속자 통계



## File Storage



| 구분     | value1   | value2    | value3 |      |
| -------- | -------- | --------- | ------ | ---- |
| 게시판   | board    | {BoardId} | {uid}  |      |
|          |          |           |        |      |
| 팝업관리 | system   | noticepopup |        |      |
| 메뉴관리 | system   | menu      |        |      |
| 웹메일   | mail     | {email}   | {id}   |      |
| 일정     | calendar | {email}   | {id}   |      |
| 연락처   | contact  | {email}   | {id}   |      |
|          |          |           |        |      |



## 공통 유틸리티



event-bus



cache

- 사진
- 인사 정보







## 배포



### IIS 설정

`web.config` 에서 `index.html` 파일에 대해 `no-cache` 정책 적용

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

  <location path="index.html">
    <system.webServer>
      <httpProtocol>
        <customHeaders>
          <add name="Cache-Control" value="no-cache" />
        </customHeaders>
      </httpProtocol>
    </system.webServer>
  </location>

</configuration>
```

