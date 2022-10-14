export default function getImages ({keyword, page = 0}) {

const apiURL = `https://api.unsplash.com/search/photos?page=${page}&per_page=10&query=${keyword}&client_id=rXPLPaL-4R59wj7s3MaF4wD3bminwb56PNy7t5dXv7c`    


    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { results } = response
            const urlsImages = results.map(image => {
                const {alt_description,id} = image
                const url = image.urls.regular
                return { url, alt_description, id }
            })
            return urlsImages;
        })

}