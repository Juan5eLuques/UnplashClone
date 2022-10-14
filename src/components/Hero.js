import react from 'react'
import { HeroContainer } from '../style/Layout'

export function Hero({title,subtitle,paragraph,img}) {

return (
<HeroContainer img={img}>
    <h1>{title}</h1>
    <h4>{subtitle}</h4>
    <p>{paragraph}</p>
</HeroContainer>
)

}
