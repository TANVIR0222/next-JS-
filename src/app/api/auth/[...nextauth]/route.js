import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"



const handler = NextAuth({
    session:{
        strategy:'jwt'
    },
    providers:[
        CredentialsProvider({
            credentials: {
                email: {label: 'Email' , type:'text', required:true , placeholder:'Enter your Email'},
                password: {label: 'Password' , type:'password', required:true , placeholder:'Enter your password'}
            },
            async authorize(credentials){
                const {email , password } = credentials;
                if (!credentials) {
                    return null
                }
                
                if(email){
                    const currentUser = Users.find((user) => user?.email === email)
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser;
                        }
                    }
                }

                return null
            }
        })

       
    ]
})

const Users = [
    {
        id:1,
        email:'user1@gmail',
        password:'12345'
    },
    {
        id:2,
        email:'u1@gmail.com',
        password:'12345'
    }
]

export {handler as GET , handler as POST}