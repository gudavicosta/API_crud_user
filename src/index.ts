import Express from 'express'

const server = Express()
server.get("/", (req,res)=>{
res.send("helo word")
})
server.listen(8080, ()=>{
    console.log("✅ Server is running")
})