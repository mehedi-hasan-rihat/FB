import React from 'react'
import AddStory from './AddStory'
import OtherStory from './OtherStory'

export default function Story() {
  return (
    <div>
      <div className="flex gap-2 ">
        <AddStory/>
        <OtherStory/>
      </div>
    </div>
  )
}



