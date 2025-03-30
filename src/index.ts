import Express from 'express'

const server = Express()

server.listen(8080, ()=>{
    console.log("✅ Server is running")
})