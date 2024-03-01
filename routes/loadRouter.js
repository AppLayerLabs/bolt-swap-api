require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require('axios');


router.post('', async (req, res) => {
    async function fetchChainData() {
      if (req.method === 'OPTIONS') {
        res.status(200);
        res.set({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Accept-Encoding': 'deflate',
          'Accept-Language': 'en-US'
        });
        res.end();
        return;
      }
      try {
        let json = JSON.stringify(req.body); 
        if (!json) {
          res.status(500).json({message:"Request is not JSON"})
        }
        const response = await axios.post('http://localhost:8090',req.body);
        res.set({
          'Server': 'YourServerName/Version', // Replace with actual server name/version
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json', // This can be conditional based on the request
          'Connection': 'keep-alive',
          'Strict-Transport-Security': 'max-age=0',
          'Vary': 'Origin',
          'Access-Control-Allow-Credentials': 'true'
        });
        res.status(200).json(response.data)
      } catch (error) {
        res.status(500).json({message:"Request is not being recieved"})
      }
    }
    fetchChainData();
})

module.exports = router;