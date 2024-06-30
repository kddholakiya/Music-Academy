'use client'
import React from 'react'
import { musicSchoolTestimonials } from "@/data/music_courses.json"
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

function MovingCards() {
  return (
    <div className='h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col overflow-hidden items-center justify-center'>
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Pur Harmony : Voices of Success</h2>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-6xl'>
                <InfiniteMovingCards items={musicSchoolTestimonials} direction='right' speed='slow' />
            </div>
        </div>
    </div>
  )
}

export default MovingCards