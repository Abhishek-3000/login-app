const express = require("express");
 const app = express();
 const path = require("path");
 const router = express.Router();
 
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
 
router.get("/", (req, res) => {
res.render("index");
});
 
router.get("/about", (req, res) => {
res.render("about", { title: "about", message: "Hello there!  this is about page content" });
});

router.get("/services",(req,res)=>{
    res.render("services",)
});
 
app.use("/", router);
app.listen(process.env.port || 3000);
 
console.log("Running at Port 3000");