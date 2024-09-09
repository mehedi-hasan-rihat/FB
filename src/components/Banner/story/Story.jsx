import React from 'react'
import AddStory from './AddStory'
import OtherStory from './OtherStory'

export default function Story() {
  return (
    <div>
      <div className="flex gap-2 max-w-[605px]">
        <AddStory/>
        <OtherStory/>
      </div>
    </div>
  )
}



