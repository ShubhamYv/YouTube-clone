import React from 'react'
import Button from './Button'

const buttonNames = [
  "All",
  "Mixes",
  "Music",
  "Live",
  "News",
  "JavaScript",
  "Indian Pop Music",
  "Cricket",
  "Football",
  "Coding",
  "Python"
];

const ButtonList = () => {
  return (
    <div className='flex flex-row gap-2'>
      {
        buttonNames?.map((item, index) => (
          <Button key={index} name={item} />
        ))
      }
    </div>
  )
}

export default ButtonList


