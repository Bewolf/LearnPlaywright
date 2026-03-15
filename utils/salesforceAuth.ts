export async function getSalesforceToken(request: any) {

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

    const res = await tokenResponse.json();

    return {
        accessToken: res.access_token,
        instanceURL: res.instance_url,
        tokenType: res.token_type
    };
}