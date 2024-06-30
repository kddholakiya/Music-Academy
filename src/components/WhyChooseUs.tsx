"use client"
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import {musicSchoolContent} from "@/data/music_courses.json"

interface musicSchoolContentData {
    title : string,
    description : string
}[]

function WhyChooseUs() {
    let musicSchoolContentInfo : musicSchoolContentData[] = musicSchoolContent
  return (
    <div>
        <StickyScroll content={musicSchoolContentInfo} />
    </div>
  )
}

export default WhyChooseUs