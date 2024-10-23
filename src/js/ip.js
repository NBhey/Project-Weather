export default async function getIp() {
    try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(err.message)
    }
}