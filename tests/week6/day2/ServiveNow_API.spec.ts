import test, { expect } from "@playwright/test";

let user = 'admin'
let pass = 'azz/t5EZT/D3'
let login = `${user}:${pass}`
//encrypt 
let loginValue = btoa(login)
let sys_id: string

test("Service now create Incident", async ({ request }) => {
    //post(endpoint url, header info)
    const postResponse = await request.post('https://dev329863.service-now.com/api/now/table/incident', {
        headers: {
            //contentType and auth
            "Content-Type": "application/json",
            "Authorization": "Basic " + loginValue
        },
        data: {
            "short_description": "Unable to connect to network - create via API",
            "urgency": "2",
            "impact": "2"
        }
    })

    let response = await postResponse.json()
    expect(postResponse.status()).toBe(201)
    sys_id = response.result.sys_id
    console.log("sys_id: " + sys_id)
})

test("Service now Get Incident", async ({ request }) => {
    let getResponse = request.get(`https://dev329863.service-now.com/api/now/table/incident/${sys_id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + loginValue
        }
    })
    expect((await getResponse).status()).toBe(200)
})

test("Service now Update Incident", async ({ request }) => {
    let patchResponse = request.patch(`https://dev329863.service-now.com/api/now/table/incident/${sys_id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + loginValue
        }
    })
    expect((await patchResponse).status()).toBe(200)
})

test("Service now Delete Incident", async ({ request }) => {
    let deleteResponse = request.delete(`https://dev329863.service-now.com/api/now/table/incident/${sys_id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + loginValue
        }
    })
    expect((await deleteResponse).status()).toBe(204)
})