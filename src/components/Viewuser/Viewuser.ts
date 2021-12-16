import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export class Viewuser extends Vue {


    public values:any=[]
    foo(){
        let keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        if(i!=localStorage.length-1)
        this.values.push( localStorage.getItem(keys[i]) );
    }

    for(let i=1;i<this.values.length;i++){
        console.log(this.values[i])
    }

    // console.log(values[1], values[2]);
    // console.log(JSON.parse("values"))
    }
    created(){
        this.foo();
    }
}

