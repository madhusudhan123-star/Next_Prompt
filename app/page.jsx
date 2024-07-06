import Feed from '@components/Feed';
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col '>
        <h1 className='head_text text-center'>Discover & Share</h1>
        <br className='max-md:hidden' />
        <span className='orange_gradient text_center'> AI-Powered Prompts</span>
        <p className='desc text-center'>Promptopia is a open-source AI prompting tool for modern world to discover create share creative prompts</p>
        <Feed />
    </section>
  )
}

export default Home;