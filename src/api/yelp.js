import axios from "axios";





export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer yKZBm1xsRo1sfRiG93_WbwabLDdSgQbn1Oln5O0y-DicnpsUhlZOyy77Kpm1-kxXp1mLhGMDZyTViRV-dlGe2QUvHuBZxNl4ShWBXFYsywdPic2NC3qMvvcwbrteWnYx'
    }
})

