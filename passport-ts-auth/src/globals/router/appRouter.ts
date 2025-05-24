import express, { Application } from 'express'
import User_Auth_Router from '../../features/user/route/User_Auth_Route_'
import ProfileRoute from '../../features/user/route/profile_route'

const appRouter=(app:Application)=>{
    app.use('/',User_Auth_Router)
    app.use('/profile',ProfileRoute)
}
export default appRouter