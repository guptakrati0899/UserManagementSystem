import { Vue, Component} from 'vue-property-decorator'

type User = {
    name : string,
    email : string,
    phonenumber : string,
    key:string
}

@Component
export class Adduser extends Vue {

    public user:User = {
        name: "",
        email: "",
        phonenumber: "",
        key:""
    }

    public userArray : any;

    public userList : Array<User> = []

    submit(event:any):void{
        event.preventDefault();
        let name=document.getElementById('name') as any
        let email = document.getElementById('email') as any
        let num = document.getElementById('phonenumber') as any

        this.user.name = name.value,
        this.user.email = email.value,
        this.user.phonenumber= num.value
        this.user.key = Math.random().toString()
       
        console.log(this.user)

        this.userList.push(this.user)
        localStorage.setItem('userList',JSON.stringify(this.userList));

       

        
        
        console.log(this.userArray)
       
        
        this.$router.push('/viewuser')
    }

    
}

