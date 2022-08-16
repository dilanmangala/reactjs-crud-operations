import React, { Component } from 'react'

import axios from 'axios'


export default axios.create({
    baseURL: "http://localhost:8099/",
});