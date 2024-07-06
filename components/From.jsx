import React from 'react'
import Link from 'next/link';


const Form = ({type,post,setPost,submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {type} Prompt
        </span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share it with the community
      </p>
      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
         
      >
        <label>
          <span className='font-satoshi font-semibold text-base'>
            Your Prompt
          </span>
          <textarea 
            type='text'
            value={post.prompt}
            placeholder='Write your prompt here'
            required
            className='form_textarea'
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base'>
            Tag
            <span className='font-normal'>(e.g., #art, #music, #coding)</span>
          </span>
          <input 
            type='text'
            value={post.tag}
            placeholder='#tags'
            required
            className='form_input'
            onChange={(e) => setPost({...post, tag: e.target.value})}
            />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button 
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
          {submitting?  `${type}ing` : type}
          </button>
        </div> 
      </form>
    </section>
  )
}

export default Form