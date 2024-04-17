import { Router, Request } from "express";

export const router = Router();

const authList: Record<string, User> = {};

router.get("/", (req, res)=>{
    if(authList[req.cookies.auth] === undefined){
        res.render("auth");
    }else{
        res.render("index");
    }
});

router.post("/auth", (req: Request<{}, {}, User>, res)=>{
    req.body.login;
})
