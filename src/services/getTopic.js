export default function getImages ({limit = 5,keyword}) {

    const apiURL = `https://api.unsplash.com/search/photos?page=1&query=/topics/:id_or_slug&client_id=rXPLPaL-4R59wj7s3MaF4wD3bminwb56PNy7t5dXv7c`    
    
    
        return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const { results } = response
                const urlsImages = results.map(image => {
                    const {alt_description,id} = image
                    const url = image.urls.small
                    return { url, alt_description, id }
                })
                return urlsImages;
            })
    
}
