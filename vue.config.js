const mockIndexData=require("./data/local");
module.exports={
    devServer:{
        port:8080,
        
        before(app){
            app.get("/local",(req,res)=>{
                res.json(mockIndexData);
            })
        }
    }
}