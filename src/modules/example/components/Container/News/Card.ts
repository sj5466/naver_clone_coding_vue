import { Component, Vue, Prop } from 'vue-property-decorator';
import { cardData } from './News';

@Component({})
export default class Card extends Vue {
  num: number | null = 0;
  @Prop() cards!: Array<cardData>;

  onMouseover(idx: number) {
    /*mouseover 이벤트가 발생시 객체의 id 값을 인자로 넘겨 받게된다.
    받은 인자 값을 변수 num에게 할당한다.*/
    this.num = idx;
  }
}
