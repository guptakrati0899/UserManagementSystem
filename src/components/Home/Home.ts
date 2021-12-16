import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export class Home extends Vue {



    addRoute(){
        this.$router.push(`/adduser`)
    }

   
}


