<template>
  <div id="header" role="banner">
    <div class="special_bg">
      <div class="group_flex">
        <div class="logo_area">
          <h1 class="logo_default">
            <a href="/" class="logo_naver" data-clk="top.logo"><span class="blind">네이버</span></a>
          </h1>
        </div>
        <div class="service_area">
          <a
            id="NM_set_home_btn"
            href="https://help.naver.com/support/welcomePage/guide.help"
            class="link_set"
            data-clk="top.mkhome"
            >네이버를 시작페이지로</a
          >
          <i class="sa_bar"></i>
          <a href="https://jr.naver.com" class="link_jrnaver" data-clk="top.jrnaver"
            ><i class="ico_jrnaver"></i><span class="blind">쥬니어네이버</span></a
          >
          <a href="https://happybean.naver.com" class="link_happybin" data-clk="top.happybean"
            ><i class="ico_happybin"></i><span class="blind">해피빈</span></a
          >
        </div>

        <div id="search" class="search_area" data-clk-prefix="sch">
          <form id="sform" name="sform" action="https://search.naver.com/search.naver" method="get" role="search">
            <fieldset>
              <legend class="blind">검색</legend>
              <select id="where" name="where" title="검색 범위 선택" class="blind">
                <option value="nexearch" selected="selected">통합검색</option>
                <option value="post">블로그</option>
                <option value="cafeblog">카페</option>
                <option value="cafe">- 카페명</option>
                <option value="article">- 카페글</option>
                <option value="kin">지식iN</option>
                <option value="news">뉴스</option>
                <option value="web">사이트</option>
                <option value="category">- 카테고리</option>
                <option value="site">- 사이트</option>
                <option value="movie">영화</option>
                <option value="webkr">웹문서</option>
                <option value="dic">사전</option>
                <option value="100">- 백과사전</option>
                <option value="endic">- 영어사전</option>
                <option value="eedic">- 영영사전</option>
                <option value="krdic">- 국어사전</option>
                <option value="jpdic">- 일본어사전</option>
                <option value="hanja">- 한자사전</option>
                <option value="terms">- 용어사전</option>
                <option value="book">책</option>
                <option value="music">음악</option>
                <option value="doc">전문자료</option>
                <option value="shop">쇼핑</option>
                <option value="local">지역</option>
                <option value="video">동영상</option>
                <option value="image">이미지</option>
                <option value="mypc">내PC</option>
                <optgroup label="스마트 파인더">
                  <option value="movie">영화</option>
                  <option value="auto">자동차</option>
                  <option value="game">게임</option>
                  <option value="health">건강</option>
                  <option value="people">인물</option>
                </optgroup>
                <optgroup label="네이버 랩"><option>긍정부정검색</option></optgroup>
              </select>
              <input type="hidden" id="sm" name="sm" value="top_hty" />
              <input type="hidden" id="fbm" name="fbm" value="0" />
              <input type="hidden" id="acr" name="acr" value="" disabled="disabled" />
              <input type="hidden" id="acq" name="acq" value="" disabled="disabled" />
              <input type="hidden" id="qdt" name="qdt" value="" disabled="disabled" />
              <input type="hidden" id="ie" name="ie" value="utf8" />
              <input type="hidden" id="acir" name="acir" value="" disabled="disabled" />
              <input type="hidden" id="os" name="os" value="" disabled="disabled" />
              <input type="hidden" id="bid" name="bid" value="" disabled="disabled" />
              <input type="hidden" id="pkid" name="pkid" value="" disabled="disabled" />
              <input type="hidden" id="eid" name="eid" value="" disabled="disabled" />
              <input type="hidden" id="mra" name="mra" value="" disabled="disabled" />

              <div class="green_window" style="">
                <!-- [AU] data-atcmp-element 에 해당하는 attribute를 추가해주세요. -->
                <input
                  id="query"
                  name="query"
                  type="text"
                  title="검색어 입력"
                  maxlength="255"
                  class="input_text"
                  tabindex="1"
                  accesskey="s"
                  style="ime-mode: active"
                  autocomplete="off"
                  placeholder="검색어를 입력해 주세요."
                  onclick="document.getElementById('fbm').value=1;"
                  value=""
                  data-atcmp-element="" />
              </div>
              <button
                id="search_btn"
                type="submit"
                title="검색"
                tabindex="3"
                class="btn_submit"
                onclick="window.nclick(this,'sch.action','','',event);"
                style="">
                <span class="blind">검색</span>
                <span class="ico_search_submit"></span>
              </button>
            </fieldset>
          </form>
          <!-- 한글입력기 -->
          <a href="#" id="ke_kbd_btn" role="button" class="btn_keyboard" onclick="return false;"
            ><span class="blind">한글 입력기</span><span class="ico_keyboard"></span
          ></a>
          <div id="_nx_kbd" style="display: none"></div>
          <div class="autocomplete">
            <!-- 자동완성 열린 경우 fold 클래스 추가, 딤드인 경우 dim 추가 -->
            <a
              href="#"
              role="button"
              id="nautocomplete"
              tabindex="2"
              class="btn_arw _btn_arw fold"
              aria-pressed="false"
              data-atcmp-element=""
              ><span class="blind">자동완성 레이어</span><span class="ico_arr"></span
            ></a>
          </div>
          <!-- 자동완성레이어 -->
          <div id="autoFrame" class="reatcmp" style="display: none">
            <!-- [AU] data-atcmp-element attribute를 추가해주세요. -->
            <div class="ly_atcmp" data-atcmp-element="">
              <div class="api_atcmp_wrap">
                <!-- 최근검색어 -->
                <!-- [AU] _recent_layer 클래스를 추가해주세요. -->
                <div class="atcmp_fixer _recent_layer" style="display: none">
                  <!-- [AU] _recent_header 클래스를 추가해주세요. -->
                  <div class="atcmp_header _recent_header">
                    <strong class="tit">최근검색어</strong>
                    <div class="option">
                      <!-- [AU] _delAll 클래스를 추가해주세요. -->
                      <a role="button" href="#" class="item _delAll" aria-pressed="false">전체삭제</a>
                    </div>
                  </div>
                  <div class="atcmp_container">
                    <!-- [AU] _recent 클래스를 추가해주세요. -->
                    <ul class="kwd_lst _recent">
                      <!-- 최근검색어 템플릿 -->
                      <!-- [AU] _item 클래스를 추가해주세요. -->
                      <!-- [AU] data-template-type="history" data-keyword="@in_txt@" attribute를 추가해주세요. -->
                      <li class="item _item" data-rank="@rank@" data-template-type="history" data-keyword="@in_txt@">
                        <a href="#" class="kwd">
                          <span class="fix"
                            ><span class="common_ico_kwd"><i class="imsc ico_search"></i></span><span>@txt@</span></span
                          >
                        </a>
                        <span class="etc">
                          <em class="date">@date@.</em>
                          <!-- [AU] _del 클래스를 추가해주세요. -->
                          <a href="#" role="button" class="bt_item _del" aria-pressed="false"
                            ><i class="imsc ico_del">삭제</i></a
                          >
                        </span>
                      </li>
                    </ul>
                    <!-- [D] 검색어 저장 꺼진 경우 atcmp_fixer에 type_off 추가 -->
                    <!-- [AU] _offMsg 클래스를 추가해주세요. -->
                    <div class="kwd_info kwd_off _offMsg" style="display: none">
                      검색어 저장 기능이 꺼져 있습니다.<br /><span class="kwd_dsc"
                        >설정이 초기화 된다면
                        <a
                          href="https://help.naver.com/support/alias/search/word/word_29.naver"
                          class="kwd_help"
                          data-clk="sly.help"
                          target="_blank"
                          >도움말</a
                        >을 확인해주세요.</span
                      >
                    </div>
                    <!-- [D] 검색어 내역 없는 경우 atcmp_fixer에 type_off 추가 -->
                    <!-- [AU] _recentNone 클래스를 추가해주세요. -->
                    <div class="kwd_info kwd_none _recentNone" style="display: none">
                      최근 검색어 내역이 없습니다.<br /><span class="kwd_dsc"
                        >설정이 초기화 된다면
                        <a
                          href="https://help.naver.com/support/alias/search/word/word_29.naver"
                          class="kwd_help"
                          data-clk="sly.help"
                          target="_blank"
                          >도움말</a
                        >을 확인해주세요.</span
                      >
                    </div>
                  </div>
                  <div class="atcmp_footer">
                    <span class="side_opt_area">
                      <span class="opt_item"
                        ><a
                          href="https://help.naver.com/support/service/main.help?serviceNo=605&amp;categoryNo=1991"
                          data-clk="sly.help"
                          target="_blank"
                          >도움말</a
                        ></span
                      >
                    </span>
                    <span class="rside_opt_area">
                      <span class="opt_item">
                        <!-- [AU] _keywordOnOff 클래스를 추가해주세요. -->
                        <a href="#" class="close _keywordOnOff">자동저장 끄기</a>
                      </span>
                    </span>
                  </div>
                </div>
                <!-- 자동완성 -->
                <!-- [AU] _atcmp_layer 클래스를 추가해주세요. -->
                <div class="atcmp_fixer _atcmp_layer" style="display: none">
                  <!-- [AU] _words 클래스를 추가해주세요. -->
                  <div class="atcmp_container _words">
                    <!-- 정답형 템플릿 : 로또당첨번호 -->
                    <!-- [AU] _answer 클래스를 추가해주세요. -->
                    <!-- [AU] data-template-type="answer_3" data-code="@code@" data-keyword="@1@" attribute를 추가해주세요. -->

                    <!-- 정답형 템플릿 : 환율 -->
                    <!-- [AU] _answer 클래스를 추가해주세요. -->
                    <!-- [AU] data-template-type="answer_9" data-code="@code@" data-keyword="@1@" attribute를 추가해주세요. -->

                    <!-- 정답형 템플릿 : 날씨(국내11, 해외12) -->
                    <!-- [AU] _answer 클래스를 추가해주세요. -->
                    <!-- [AU] data-template-type="answer_11" data-code="@code@" data-keyword="@1@" attribute를 추가해주세요. -->

                    <!-- 정답형 템플릿 : 사이트 바로가기 -->
                    <!-- [AU] _answer 클래스를 추가해주세요. -->
                    <!-- [AU] data-template-type="answer_17" data-code="@code@" data-keyword="@1@" attribute를 추가해주세요. -->

                    <!-- [AU] _kwd_list 클래스를 추가해주세요. -->
                    <ul class="kwd_lst _kwd_list">
                      <!-- [AU] 자동완성 검색어 템플릿 -->
                      <!-- [AU] _item 클래스를 추가해주세요. -->
                      <!-- [AU] data-rank="@rank@" data-template-type="suggestion" data-keyword="@in_txt@" attribute를 추가해주세요. -->

                      <!-- [AU] 최근검색어 템플릿 -->
                      <!-- [AU] _item 클래스를 추가해주세요. -->
                      <!-- [AU] data-rank="@rank@" data-template-type="history" data-keyword="@in_txt@" attribute를 추가해주세요. -->
                    </ul>
                    <!-- [AU] 문맥검색 템플릿 -->
                    <!-- [AU] _item 클래스를 추가해주세요. -->
                    <!-- [AU] data-rank="@rank@" data-template-type="intend" data-keyword="@transQuery@" attribute를 추가해주세요. -->

                    <!-- [D] 선거안내문구 -->
                    <!-- [AU] _alert 클래스를 추가해주세요. -->
                    <div class="atcmp_alert _alert">
                      <div class="dsc_election">
                        <p class="dsc"><i class="imsc ico_election"></i><span class="_alert_passage"></span></p>
                        <span class="dsc_inner">
                          <!-- [AU] _alert_passage2 클래스를 추가해주세요. -->
                          <span class="_alert_passage2"></span>
                          <!-- [AU] _alert_link 클래스를 추가해주세요. -->
                          <a href="#" class="link _alert_link" target="_blank">자세히보기</a>
                        </span>
                      </div>
                    </div>
                    <!-- [AU] _plus 클래스를 추가해주세요. -->
                    <div class="atcmp_plus _plus">
                      <div class="dsc_plus">
                        <a
                          href="https://help.naver.com/support/alias/search/word/word_16.naver"
                          class="link_dsc"
                          data-clk="sug.cxhelp"
                          target="_blank"
                          >관심사를 반영한 컨텍스트 자동완성<i class="imsc ico_help">도움말</i></a
                        >
                      </div>
                      <div class="switch">
                        <!-- [D] 선택시 aria-pressed="ture/false" -->
                        <!-- [AU] _plus_btn 클래스를 추가해주세요. -->
                        <a role="button" href="#" class="bt_switch active _plus_btn" aria-pressed="false"
                          ><i class="imsc ico_option">컨텍스트 자동완성</i></a
                        >
                      </div>
                      <!-- [AU] _plus_layer 클래스를 추가해주세요. -->
                      <div class="layer_plus _plus_layer">
                        <strong class="tit">컨텍스트 자동완성</strong>
                        <!-- [AU] _plus_layer_isloggedin 클래스를 추가해주세요. -->
                        <!-- [AU] style="display:none" 추가해주세요. -->
                        <div class="_plus_layer_isloggedin" style="display: none">
                          <p class="dsc">ON/OFF 설정은<br />해당기기(브라우저)에 저장됩니다.</p>
                          <div class="btn_area">
                            <a
                              href="https://help.naver.com/support/alias/search/word/word_16.naver"
                              class="btn btn_view"
                              data-clk="sug.cxlink"
                              target="_blank"
                              >자세히</a
                            >
                          </div>
                        </div>
                        <!-- [AU] _plus_layer_isnotloggedin 클래스를 추가해주세요. -->
                        <!-- [AU] style="display:none" 추가해주세요. -->
                        <div class="_plus_layer_isnotloggedin" style="display: none">
                          <p class="dsc">
                            <em class="txt">동일한 시간대/연령/남녀별</em> 사용자 그룹의<br />관심사에 맞춰 자동완성을
                            제공합니다.
                          </p>
                          <div class="btn_area">
                            <a href="https://nid.naver.com/nidlogin.login" class="btn btn_login" data-clk="sug.cxlogin"
                              >로그인</a
                            >
                            <a
                              href="https://help.naver.com/support/alias/search/word/word_16.naver"
                              class="btn btn_view"
                              data-clk="sug.cxlink"
                              target="_blank"
                              >자세히</a
                            >
                          </div>
                        </div>
                        <!-- [AU] _plus_layer_close 클래스를 추가해주세요. -->
                        <a href="#" role="button" class="btn_close _plus_layer_close"
                          ><i class="imsc ico_close">컨텍스트 자동완성 레이어 닫기</i></a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="atcmp_footer">
                    <span class="side_opt_area">
                      <span class="opt_item"
                        ><a
                          href="https://help.naver.com/alias/search/word/word_17.naver"
                          data-clk="sug.help"
                          target="_blank"
                          >도움말</a
                        ></span
                      >
                      <span class="opt_item"
                        ><a
                          href="https://help.naver.com/support/contents/contents.help?serviceNo=605&amp;categoryNo=18215"
                          class="report"
                          data-clk="sug.report"
                          target="_blank"
                          >신고</a
                        ></span
                      >
                    </span>
                    <span class="rside_opt_area">
                      <span class="opt_item">
                        <!-- [AU] _suggestOnOff 클래스를 추가해주세요. -->
                        <a href="#" class="close _suggestOnOff">자동완성 끄기</a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--EMPTY-->
    <div id="gnb" role="navigation">
      <div id="NM_FAVORITE" class="gnb_inner">
        <div class="group_nav">
          <ul class="list_nav type_fix">
            <li class="nav_item">
              <a href="https://mail.naver.com/" class="nav" data-clk="svc.mail"><i class="ico_mail"></i>메일</a>
            </li>
            <li class="nav_item"><a href="https://section.cafe.naver.com/" class="nav" data-clk="svc.cafe">카페</a></li>
            <li class="nav_item">
              <a href="https://section.blog.naver.com/" class="nav" data-clk="svc.blog">블로그</a>
            </li>
            <li class="nav_item"><a href="https://kin.naver.com/" class="nav" data-clk="svc.kin">지식iN</a></li>
            <li class="nav_item">
              <a href="https://shopping.naver.com/" class="nav shop" data-clk="svc.shopping"
                ><span class="blind">쇼핑</span></a
              >
            </li>
            <li class="nav_item">
              <a href="https://shoppinglive.naver.com/home" class="nav shoplive" data-clk="svc.shoppinglive"
                ><span class="blind">쇼핑LIVE</span></a
              >
            </li>
            <li class="nav_item"><a href="https://order.pay.naver.com/home" class="nav" data-clk="svc.pay">Pay</a></li>
            <li class="nav_item">
              <a href="https://tv.naver.com/" class="nav" data-clk="svc.tvcast"><i class="ico_tv"></i>TV</a>
            </li>
          </ul>
          <ul class="list_nav NM_FAVORITE_LIST">
            <li class="nav_item"><a href="https://dict.naver.com/" class="nav" data-clk="svc.dic">사전</a></li>
            <li class="nav_item"><a href="https://news.naver.com/" class="nav" data-clk="svc.news">뉴스</a></li>
            <li class="nav_item"><a href="https://finance.naver.com/" class="nav" data-clk="svc.stock">증권</a></li>
            <li class="nav_item"><a href="https://land.naver.com/" class="nav" data-clk="svc.land">부동산</a></li>
            <li class="nav_item"><a href="https://map.naver.com/" class="nav" data-clk="svc.map">지도</a></li>
            <li class="nav_item">
              <a
                href="https://vibe.naver.com/?from=naver_main&amp;utm_source=naver_main&amp;utm_medium=naver_main_pcweb&amp;utm_campaign=naver_main_redirect"
                class="nav"
                data-clk="svc.vibe"
                >VIBE</a
              >
            </li>
            <li class="nav_item">
              <a href="https://search.shopping.naver.com/book/home" class="nav" data-clk="svc.book">도서</a>
            </li>
            <li class="nav_item"><a href="https://comic.naver.com/" class="nav" data-clk="svc.webtoon">웹툰</a></li>
          </ul>
          <ul class="list_nav type_empty" style="display: none"></ul>
          <a href="#" role="button" class="btn_more" data-clk="svc.more">더보기</a>
          <div class="ly_btn_area">
            <a href="more.html" class="btn NM_FAVORITE_ALL" data-clk="map.svcmore">서비스 전체보기</a>
            <a href="#" role="button" class="btn btn_set" data-clk="map.edit">메뉴설정</a>
            <a href="#" role="button" class="btn btn_reset" data-clk="edt.reset" style="display: none">초기화</a>
            <a href="#" role="button" class="btn btn_save" data-clk="edt.save" style="display: none">저장</a>
          </div>
        </div>
        <div id="NM_WEATHER" class="group_weather" data-nm-ui="rolling">
          <div
            class="eg-flick-viewport"
            style="
              position: relative;
              z-index: 0;
              overflow: hidden;
              min-width: 100%;
              height: 100%;
              touch-action: pan-x;
              user-select: none;
              -webkit-user-drag: none;
              width: 270px;
            ">
            <div
              class="eg-flick-camera"
              style="width: 100%; height: 100%; will-change: transform; transform: translate3d(0px, 0px, 0px)">
              <div style="width: 270px; position: absolute; top: 0px" class="eg-flick-panel">
                <a
                  data-clk="squ.weat"
                  href="https://weather.naver.com/today/09680108?cpName=KMA"
                  class="weather_area ico_w01">
                  <div class="current_box">
                    <strong class="current" aria-label="현재기온">-4.4°</strong><strong class="state">맑음</strong>
                  </div>
                  <div class="degree_box">
                    <span class="min" aria-label="최저기온">-9.0°</span
                    ><span class="max" aria-label="최고기온">-1.0°</span>
                  </div>
                  <span class="location">논현동</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ly_service">
        <div class="group_service NM_FAVORITE_ALL_LY">
          <dl class="list_service">
            <dt class="service_title">ㄱ-ㅁ</dt>
            <dd class="service_data">
              <a href="https://me.naver.com/tab/news.nhn" name="myfeed" data-clk="map.mysub">구독</a>
            </dd>
            <dd class="service_data">
              <a href="https://weather.naver.com/" name="weather" data-clk="map.weather">날씨</a>
            </dd>
            <dd class="service_data">
              <a href="https://mycar.naver.com" name="mycar" data-clk="map.mycar">네이버 MY CAR</a>
            </dd>
            <dd class="service_data">
              <a href="https://game.naver.com/" name="ngame" data-clk="map.ngame">네이버 게임</a>
            </dd>
            <dd class="service_data">
              <a href="https://booking.naver.com/booked/list" name="booking" data-clk="map.booking">네이버 예약</a>
            </dd>
            <dd class="service_data">
              <a href="https://contents.premium.naver.com/" name="premium" data-clk="map.premium"
                >네이버 프리미엄콘텐츠</a
              >
            </dd>
            <dd class="service_data">
              <a href="http://plus.naver.com" name="plus" data-clk="map.plus">네이버플러스 멤버십</a>
            </dd>
            <dd class="service_data"><a href="https://news.naver.com/" name="news" data-clk="map.news">뉴스</a></dd>
            <dd class="service_data">
              <a href="https://datalab.naver.com/" name="datalab" data-clk="map.datalab">데이터랩</a>
            </dd>
            <dd class="service_data">
              <a href="https://search.shopping.naver.com/book/home" name="book" data-clk="map.book">도서</a>
            </dd>
            <dd class="service_data"><a href="https://memo.naver.com/" name="memo" data-clk="map.memo">메모</a></dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅂ-ㅅ</dt>
            <dd class="service_data"><a href="https://band.us/" name="band" data-clk="map.band">밴드</a></dd>
            <dd class="service_data"><a href="https://land.naver.com/" name="land" data-clk="map.land">부동산</a></dd>
            <dd class="service_data">
              <a href="https://sports.news.naver.com/" name="sports" data-clk="map.sports">스포츠</a>
            </dd>
            <dd class="service_data">
              <a href="https://series.naver.com/" name="nstore" data-clk="map.nstore">시리즈</a>
            </dd>
            <dd class="service_data">
              <a href="https://serieson.naver.com/" name="nstoreon" data-clk="map.serieson">시리즈온</a>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅇ</dt>
            <dd class="service_data">
              <a href="https://expert.naver.com/" name="expert" data-clk="map.expert">엑스퍼트</a>
            </dd>
            <dd class="service_data"><a href="https://movie.naver.com/" name="movie" data-clk="map.movie">영화</a></dd>
            <dd class="service_data">
              <a href="https://audioclip.naver.com/" name="audioclip" data-clk="map.audioclip">오디오클립</a>
            </dd>
            <dd class="service_data">
              <a href="https://office.naver.com/" name="office" data-clk="map.office">오피스</a>
            </dd>
            <dd class="service_data"><a href="https://whale.naver.com/" name="whale" data-clk="map.whale">웨일</a></dd>
            <dd class="service_data">
              <a href="https://novel.naver.com/" name="webnovel" data-clk="map.webnovel">웹소설</a>
            </dd>
            <dd class="service_data">
              <a href="https://comic.naver.com/" name="comic" data-clk="map.webtoon">웹툰</a>
            </dd>
            <dd class="service_data">
              <a href="https://in.naver.com/discover" name="influencer" data-clk="map.influencer">인플루언서</a>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅈ-ㅊ</dt>
            <dd class="service_data">
              <a href="https://contact.naver.com/" name="contact" data-clk="map.contact">주소록</a>
            </dd>
            <dd class="service_data">
              <a href="https://finance.naver.com/" name="stock" data-clk="map.stock">증권</a>
            </dd>
            <dd class="service_data"><a href="https://map.naver.com/" name="map" data-clk="map.map">지도</a></dd>
            <dd class="service_data">
              <a href="https://terms.naver.com/" name="terms" data-clk="map.terms">지식백과</a>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅋ-ㅎ</dt>
            <dd class="service_data">
              <a href="https://calendar.naver.com/" name="calendar" data-clk="map.calendar">캘린더</a>
            </dd>
            <dd class="service_data">
              <a href="https://clovadubbing.naver.com/" name="dubbing" data-clk="map.clovadub">클로바더빙</a>
            </dd>
            <dd class="service_data">
              <a href="https://papago.naver.com/" name="papago" data-clk="map.papago">파파고</a>
            </dd>
            <dd class="service_data"><a href="https://post.naver.com/" name="post" data-clk="map.post">포스트</a></dd>
            <dd class="service_data">
              <a href="https://academic.naver.com/" name="academic" data-clk="map.academic">학술정보</a>
            </dd>
            <dd class="service_data">
              <a href="https://flight.naver.com/" name="airticket" data-clk="map.airticket">항공권</a>
            </dd>
            <dd class="service_data"><a href="https://hotels.naver.com/" name="hotel" data-clk="map.hotel">호텔</a></dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">A-Z</dt>
            <dd class="service_data"><a href="https://keep.naver.com" name="keep" data-clk="map.keep">Keep</a></dd>
            <dd class="service_data"><a href="https://www.modoo.at" name="modoo" data-clk="map.modoo">modoo!</a></dd>
            <dd class="service_data">
              <a href="https://mybox.naver.com/" name="ndrive" data-clk="map.ndrive">MYBOX</a>
            </dd>
            <dd class="service_data">
              <a href="https://entertain.naver.com/home" name="entertain" data-clk="map.entertain">TV연예</a>
            </dd>
            <dd class="service_data">
              <a
                href="https://vibe.naver.com/?from=naver_main&amp;utm_source=naver_main&amp;utm_medium=naver_main_pcweb&amp;utm_campaign=naver_main_redirect"
                name="vibe"
                data-clk="map.vibe"
                >VIBE</a
              >
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">사전</dt>
            <dd class="service_data"><a href="https://dict.naver.com/" name="dic" data-clk="map.dic">사전</a></dd>
            <dd class="service_data">
              <a href="https://ko.dict.naver.com/" name="krdic" data-clk="map.krdic">국어사전</a>
            </dd>
            <dd class="service_data">
              <a href="https://endic.naver.com/" name="endic" data-clk="map.endic">영어/영영사전</a>
            </dd>
            <dd class="service_data">
              <a href="https://ja.dict.naver.com/" name="jpdic" data-clk="map.jpdic">일본어사전</a>
            </dd>
            <dd class="service_data">
              <a href="https://zh.dict.naver.com/" name="cndic" data-clk="map.cndic">중국어사전</a>
            </dd>
            <dd class="service_data">
              <a href="https://hanja.dict.naver.com/" name="hanja" data-clk="map.hanja">한자사전</a>
            </dd>
            <dd class="service_data"><a href="https://dict.naver.com/" class="link_dic">사전 더보기</a></dd>
          </dl>
        </div>
        <div class="group_service NM_FAVORITE_EDIT_LY" style="display: none">
          <dl class="list_service">
            <dt class="service_title">ㄱ-ㅁ</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="myfeed" value="myfeed" /><i class="ico_chk"></i>구독</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="weather" value="weather" /><i class="ico_chk"></i>날씨</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="mycar" value="mycar" /><i class="ico_chk"></i>네이버 MY CAR</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="ngame" value="ngame" /><i class="ico_chk"></i>네이버 게임</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="booking" value="booking" /><i class="ico_chk"></i>네이버 예약</label>
            </dd>
            <dd class="service_data">
              <label
                ><input type="checkbox" name="premium" value="premium" /><i class="ico_chk"></i>프리미엄콘텐츠</label
              >
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="plus" value="plus" /><i class="ico_chk"></i>네이버플러스</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="news" value="news" /><i class="ico_chk"></i>뉴스</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="datalab" value="datalab" /><i class="ico_chk"></i>데이터랩</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="book" value="book" /><i class="ico_chk"></i>도서</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="memo" value="memo" /><i class="ico_chk"></i>메모</label>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅂ-ㅅ</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="band" value="band" /><i class="ico_chk"></i>밴드</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="land" value="land" /><i class="ico_chk"></i>부동산</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="sports" value="sports" /><i class="ico_chk"></i>스포츠</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="nstore" value="nstore" /><i class="ico_chk"></i>시리즈</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="nstoreon" value="nstoreon" /><i class="ico_chk"></i>시리즈온</label>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅇ</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="expert" value="expert" /><i class="ico_chk"></i>엑스퍼트</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="movie" value="movie" /><i class="ico_chk"></i>영화</label>
            </dd>
            <dd class="service_data">
              <label
                ><input type="checkbox" name="audioclip" value="audioclip" /><i class="ico_chk"></i>오디오클립</label
              >
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="office" value="office" /><i class="ico_chk"></i>오피스</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="whale" value="whale" /><i class="ico_chk"></i>웨일</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="webnovel" value="webnovel" /><i class="ico_chk"></i>웹소설</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="comic" value="comic" /><i class="ico_chk"></i>웹툰</label>
            </dd>
            <dd class="service_data">
              <label
                ><input type="checkbox" name="influencer" value="influencer" /><i class="ico_chk"></i>인플루언서</label
              >
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅈ-ㅊ</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="contact" value="contact" /><i class="ico_chk"></i>주소록</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="stock" value="stock" /><i class="ico_chk"></i>증권</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="map" value="map" /><i class="ico_chk"></i>지도</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="terms" value="terms" /><i class="ico_chk"></i>지식백과</label>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">ㅋ-ㅎ</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="calendar" value="calendar" /><i class="ico_chk"></i>캘린더</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="dubbing" value="dubbing" /><i class="ico_chk"></i>클로바더빙</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="papago" value="papago" /><i class="ico_chk"></i>파파고</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="post" value="post" /><i class="ico_chk"></i>포스트</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="academic" value="academic" /><i class="ico_chk"></i>학술정보</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="airticket" value="airticket" /><i class="ico_chk"></i>항공권</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="hotel" value="hotel" /><i class="ico_chk"></i>호텔</label>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">A-Z</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="keep" value="keep" /><i class="ico_chk"></i>Keep</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="modoo" value="modoo" /><i class="ico_chk"></i>modoo!</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="ndrive" value="ndrive" /><i class="ico_chk"></i>MYBOX</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="entertain" value="entertain" /><i class="ico_chk"></i>TV연예</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="vibe" value="vibe" /><i class="ico_chk"></i>VIBE</label>
            </dd>
          </dl>
          <dl class="list_service">
            <dt class="service_title">사전</dt>
            <dd class="service_data">
              <label><input type="checkbox" name="dic" value="dic" /><i class="ico_chk"></i>사전</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="krdic" value="krdic" /><i class="ico_chk"></i>국어사전</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="endic" value="endic" /><i class="ico_chk"></i>영어/영영사전</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="jpdic" value="jpdic" /><i class="ico_chk"></i>일본어사전</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="cndic" value="cndic" /><i class="ico_chk"></i>중국어사전</label>
            </dd>
            <dd class="service_data">
              <label><input type="checkbox" name="hanja" value="hanja" /><i class="ico_chk"></i>한자사전</label>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./HeaderComponent.ts"></script>
<style></style>
