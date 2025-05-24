class User_Auth_Services{

    public async homepagerender(req:any,res:any):Promise<void>{
        res.render("home",{user:req.user})
    }  

    public async loginrender(req:any,res:any):Promise<void>{
        res.render("login",{user:req.user})
    }
    
    public async logoutrender(req:any,res:any):Promise<void>{
        req.logout((err:any) => {
        if (err) {
            res.status(500).json({ message: 'Logout failed', error: err });
        } else {
            res.redirect('/');
        }
    });
    }

    public async google_auth_redirect(req:any,res:any):Promise<void>{
        res.redirect('/profile/')
    }

    public async profilepage(req:any,res:any){
        res.render('views',{user:req.user})
    }
}

export  const user_auth_services:User_Auth_Services=new User_Auth_Services();