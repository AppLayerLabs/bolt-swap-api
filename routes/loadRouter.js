require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require('axios');


router.post('', async (req, res) => {
    async function fetchChainData() {
      try {
        let json = JSON(req.body); 
        if (!json) {
          res.status(500).json({message:"Request is not being recieved"})
        }
        const response = await axios.post('http://localhost:8090',req.body);
        res.status(200).json(response.data)
      } catch (error) {
        res.status(500).json({message:"Request is not being recieved"})
      }
    }
    fetchChainData();
})