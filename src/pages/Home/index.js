import React from 'react'
import {ListImages} from '../../components/ListImages'


export default function Home () {

  return (
    <div>
    <section className='app-content'>
    <ListImages keyword={'random'}></ListImages>
    </section>
    </div>
  )
}
