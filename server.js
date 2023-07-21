"use strict"
const express = require("express")
const path = require("path")
const http = require("http")


function initialize() {
    return new Promise((resolve, reject) => {
        const app = express()
        let httpServer = http.createServer(app)
        app.use(express.static("public"));
        httpServer.listen("9999", err => {
            if (err) {
                reject(err)
                return
            }
            console.log("Gaming on port: 9999")
            resolve()
        })
    })
}

async function startup() {
    try {
        await initialize()
    }
    catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startup()
