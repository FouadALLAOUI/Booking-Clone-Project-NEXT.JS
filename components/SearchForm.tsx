'use client'

import * as z from "zod"

export const formSchema = z.object({
    location: z.string().min(2).max(50),
    dates: z.object({
        from: z.date(),
        to: z.date(),
    }),
    adults: z
    .string()
    .min(1,{massage: "Please select at least 1 adulte"})
    .max(12,{message: "Max 12 adults Occupancy"}),
    children: z.string().min(0).max(12,{
        message: "Max 12 adults Occupancy"
    }),
    rooms: z.string().min(1, {
        message: "Please select at least 1 room"
    })
})



function SearchForm() {
  return (
    <div>
        

    </div>
  )
}

export default SearchForm