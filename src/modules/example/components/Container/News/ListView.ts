import Vue from 'vue';
import { Component } from 'vue-property-decorator';

export interface listOptionData {
  id: number;
  cateid: string;
  clk: string;
  title: string;
}

export interface mainNewsData{
  
}
export interface subNewsData {
  id: number;
  href: string;
  aid: string;
  title: string;
}

@Component({})
export default class ListView extends Vue {
  listSelected: number | null = 0; // listOption.id를 인덱스 번호를 인식하는 변수

  listOption: Array<listOptionData> = [
    { id: 0, cateid: 'ct2', clk: 'daei', title: '종합/경제' },
    { id: 1, cateid: 'ct3', clk: 'dtvcom', title: '방송/통신' },
    { id: 2, cateid: 'ct4', clk: 'dit', title: 'IT' },
    { id: 3, cateid: 'ct5', clk: 'deng', title: '영자지' },
    { id: 4, cateid: 'ct6', clk: 'dsporent', title: '스포츠/연예' },
    { id: 5, cateid: 'ct7', clk: 'dmagtec', title: '매거진/전문지' },
    { id: 6, cateid: 'ct8', clk: 'dloc', title: '지역' },
  ];

  subNews: Array<subNewsData> = [
    {
      id: 0,
      href: 'http://www.sisaweek.com/news/articleView.html?idxno=201754',
      aid: '55067872e42061ce',
      title: '‘절친’ 두 후계자의 흥미진진 라이벌전',
    },
    {
      id: 1,
      href: 'http://www.sisaweek.com/news/articleView.html?idxno=201747',
      aid: '550678566bb3e92a',
      title: '대통령실 연하장 디자인 ‘도용 논란’',
    },
    {
      id: 2,
      href: 'http://www.sisaweek.com/news/articleView.html?idxno=201753',
      aid: '5506787165bf5def',
      title: '전기차 보조금, ‘직영 서비스센터’ 여부 기준 되나',
    },
    {
      id: 3,
      href: 'http://www.sisaweek.com/news/articleView.html?idxno=201757',
      aid: '550678755f436d6b',
      title: '[2022 영화③] 천만 관객 ‘범죄도시2’, 그리고 손석구',
    },
    {
      id: 4,
      href: 'http://www.sisaweek.com/news/articleView.html?idxno=201741',
      aid: '55067850756dd1f0',
      title: '이재명, 신년 첫 일정 DJ 추모',
    },
    {
      id: 5,
      href: 'http://www.sisaweek.com/news/articleView.html?idxno=201748',
      aid: '55067857ea14ed09',
      title: '민주당, 김건희 여사 ‘특검’ 주장한 까닭',
    },
  ];

  onClickListMenu(idx: number) {
    //idx 파라미터로 받은 인자를 this.listSelected에 할당
    //class 바인딩으로 listOption객체 id 와 listSelected 같으면 값을 option_on 클래스네임을 생성
    this.listSelected = idx;
  }
}
