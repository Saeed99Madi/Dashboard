import React, { useState } from 'react'
import { _mockTakeaways } from 'src/_mock/mockTakeaways'
import Takeaway from './Takeaway'

export default function Takeaways() {
  const [takeaways] = useState(_mockTakeaways)
  return (
    takeaways.length > 0 && takeaways.map((takeaway) => (
      <Takeaway takeaway={takeaway} key={takeaway.id}/>
    ))
  )
}
