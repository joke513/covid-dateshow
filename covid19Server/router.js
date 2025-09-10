const express = require("express");
const router = express.Router();
const country = require("./data/Country.json");
const ncov = require("./data/covid_data.json");
const ncovimg = require("./data/covid_img.json");


/**
 * 全国疫情数据信息
 */
router.get("/ncov",(req,res) =>{
    res.send(ncov)
})


/**
 * 全国疫情数据
 */
router.get("/country", (req, res) => {
    res.send(country)
})


/**
 * 疫情数据曲线图
 */
router.get("/ncovimg",(req,res) =>{
    res.send(ncovimg)
})


module.exports = router;