import React from 'react'
import { _mockTakeaways } from 'src/_mock/mockTakeaways'
import Takeaway from './Takeaway'

export default function Takeaways() {
  const [takeaways, setTakeaways] = React.useState(_mockTakeaways)
  console.log(takeaways);
  return (
    takeaways.length > 0 && takeaways.map((takeaway) => (
      <Takeaway takeaway={takeaway} key={takeaway.id}/>
    ))
  )
}
