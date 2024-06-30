"use client"
import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";


function page() {
  return (
    // <div  className='min-h-screen bg-black py-12 pt-36'>

    // </div>

    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-neutral-200 text-center font-sans font-bold py-8">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto text-sm text-center relative z-10">
                  We&apos;re here to help with any questions about our courses,
                  programs, or events. Reach out and let us know how we can assist you
                  in your musical journey.
        </p>
        <input
          type="email"
          placeholder="Your Email Address"
          className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        {/* <input
          type="text"
          placeholder="Your Message"
          className="rounded-lg h-32 border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
              <textarea
                  placeholder="Your Message" maxLength={250}
                  className="resize-none rounded-lg h-32 border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
              ></textarea>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default page