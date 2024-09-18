export default defineEventHandler(async event => {
    const { userTag } = await readBody(event)
    const config = useRuntimeConfig()

    const response = await fetch(`https://api.brawlstars.com/v1/players/%23${ userTag }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept-Encoding": "identity",
            'Authorization': `Bearer ${ config.API_KEY_BRAWL_STARS }`
        }
    })
    const data = await response.json()

    if (!response.ok) {
        return data.reason
    }

    return data
})