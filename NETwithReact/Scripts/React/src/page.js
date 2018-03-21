// Navigate to http://localhost:58044/home/react
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


console.log('page loaded');

axios.get('/api/values').then(response => {
    console.log(response);
    document.getElementById('app').innerText = JSON.stringify(response);
})