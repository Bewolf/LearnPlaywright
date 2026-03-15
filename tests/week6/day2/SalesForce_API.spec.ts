import test, { expect } from "@playwright/test";
import { request } from "node:http";

let accessToken: string
let instanceURL: String
let tokenType: any
let accountId: any


test(`Sales force login`, async ({ request }) => {
    const tokenResponse = await request.post(`https://login.salesforce.com/services/oauth2/token`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        form: {
            "grant_type": "",
            "username": "",
            "password": "",
            "client_id": "",
            "client_secret": ""
        }
    })

    let res = await tokenResponse.json()
    console.log(res)
    accessToken = res.access_token
    instanceURL = res.instance_url
    tokenType = res.token_type
})

test(`Sales force create account`, async ({ request }) => {
    const postResponse = await request.post(`${instanceURL}/services/data/v66.0/sobjects/Account/`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `${tokenType} ${accessToken}`
        },
        data: {
            "name": "Aravind"
        }
    })

    let response = await postResponse.json()
    expect(postResponse.status()).toBe(201)
    expect(response.id).not.toBeNull()
    accountId = response.id
})

test(`Sales force Get account`, async ({ request }) => {
    const getResponse = await request.get(`${instanceURL}/services/data/v66.0/sobjects/Account/${accountId}`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `${tokenType} ${accessToken}`
        }
    })

    let response = await getResponse.json()
    expect(getResponse.status()).toBe(200)
    expect(response.id).not.toBeNull()
})

test(`Sales force Update account`, async ({ request }) => {
    const updateResponse = await request.patch(`${instanceURL}/services/data/v66.0/sobjects/Account/${accountId}`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `${tokenType} ${accessToken}`
        },
        data: {
            "Industry": "Software updated"
        }
    })
    expect(updateResponse.status()).toBe(204)
})

test(`Sales force Delete account`, async ({ request }) => {
    const deleteResponse = await request.delete(`${instanceURL}/services/data/v66.0/sobjects/Account/${accountId}`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `${tokenType} ${accessToken}`
        }
    })

    expect(deleteResponse.status()).toBe(204)
})

