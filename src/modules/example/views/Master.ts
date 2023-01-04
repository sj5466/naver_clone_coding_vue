import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '../components/Header/HeaderComponent.vue';
import ContainerComponent from '../components/Container/ContainerComponent.vue';
import FooterComponent from '../components/Footer/FooterComponent.vue';

@Component({
  components: {
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
  },
})
export default class ExampleMaster extends Vue {}
