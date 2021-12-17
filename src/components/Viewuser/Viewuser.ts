import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export class Viewuser extends Vue {
    
    public values:any=[]

  
    mounted(){
      
        let data : any = localStorage.getItem('userList')

        let result : any = JSON.parse(data)
    
        console.log(result)
        console.log("length",result.length)
        console.log("result",result[0].name)


    
    }

    
}

