import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
export default function middleware(req){
    const {cookies} = req;

    const jwt = cookies.OursiteJWT;
    const url = req.nextUrl.clone();
    const token = req.cookies.get('token')
    if(url.includes('/cart')){
        if(token){
            try{
                verify(jwt,secret);
                return NextResponse.redirect('/login')
            }catch(e){
                return NextResponse.next()
            }

            
        }
        
    }

    if(url.includes('/cart')){
        if(jwt === undefined){
            return NextResponse.redirect('/login')
        }
        try{
            verify(jwt,secret);
            return NextResponse.next()
        }catch(e){
            return NextResponse.redirect('/login')
        }
    }
}
// export const config = {
//     matcher: ['/cart'],
//   }