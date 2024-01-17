import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <div className='bg-white border-8 form-border rounded-2xl'>
        <div className='rounded-lg pt-4 pb-4 pl-6 pr-6 shadow-md'>
          <div>
            <h1 className='text-xl font-bold'>Welcome back!</h1>
            <h2 className="text-zinc-600 text-medium">Please enter your details to login.</h2>
          </div>

          <div className='email-form pt-4 '>
            <form action="#" method='POST' className='flex flex-col'>
              <label className='text-left font-medium'>Email Address</label>
              <input type="text" className='border w-96 rounded-lg p-2 text-md pl-3' placeholder='Email' />
            </form>
          </div>

          <div className='pass-form pt-2 relative'>
            <form action="#" method='POST' className='flex flex-col'>
              <label className='text-left font-medium'>Password</label>
              <input type="password" className='border rounded-lg p-2 text-md pl-3' placeholder='••••••••••'/>
              <div className='absolute inset-y-0 right-0 pr-3 pt-8 flex items-center text-sm leading-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#9ca3af" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></path></svg>
              </div>
            </form>
          </div>

          <div className='forgot-pass text-left pt-3 pb-3 text-zinc-600'>
            <p>Forgot password? <a href="#" className='text-black font-medium'>Reset it</a></p>
          </div>

          <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-slate-600 hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Login
          </button>

          <h3 className='divider flex items-center w-full pt-3 pb-3'>
            <span className='flex-grow bg-gray-200 rounded h-0.5'></span>
            <span className='mx-3 text-sm font-medium text-gray-400'>OR</span>
            <span className='flex-grow bg-gray-200 rounded h-0.5'></span>
          </h3>


          <div className='flex grid-cols-2 gap-2'>
            <button className='flex items-center bg-white border border-gray-300 rounded-lg max-w-xs px-14 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
              <svg className='h-6 w-6 mr-2' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4"></path></svg>
              <span className='font-medium'>Google</span>
            </button>

            <button className='flex items-center bg-white border border-gray-300 rounded-lg max-w-xs px-14 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
              <svg className='h-6 w-6 mr-2' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796"></path></svg>
              <span className='font-medium'>Apple</span>
            </button>
          </div>

        </div>
      </div>
      <p className='text-gray-600'>Don't have an account? <a href="#" className='text-black font-medium'>Register</a></p>
    </main>
  )
}
