import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex items-center grid-cols-5 justify-center text-center">
      <div className='bg-white border-8 form-border rounded-2xl'>
        <div className='rounded-lg pt-4 pb-4 pl-6 pr-6 shadow-md'>
          <div>
            <h1 className='text-xl font-medium'>Welcome back!</h1>
            <h2 className="text-zinc-600 text-base">Please enter your details to login.</h2>
          </div>

          <div className='email-form pt-4'>
            <form action="#" method='POST' className='flex flex-col'>
              <label className='text-left font-medium'>Email Address</label>
              <input type="text" className='border w-96 rounded-lg p-1' />
            </form>
          </div>

          <div className='pass-form pt-2'>
            <form action="#" method='POST' className='flex flex-col'>
              <label className='text-left font-medium'>Password</label>
              <input type="password" className='border rounded-lg p-1' />
            </form>
          </div>

          <div className='forgot-pass text-left pt-3 pb-3 text-zinc-600'>
            <p>Forgot password? <a href="#" className='text-black font-medium'>Reset it</a></p>
          </div>

          <button>Login</button>
        </div>

      </div>
    </main>
  )
}
