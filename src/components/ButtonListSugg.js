import React from 'react'
import Button from './Button'

const ButtonListSugg = () => {
  return (
    <div className='flex flex-row gap-2 m-4 ml-2'>
      <Button btnText={'All'}/>
      <Button btnText={'Comedy'}/>
      <Button btnText={'Music'}/>
      <Button btnText={'Cricket'}/>
      <Button btnText={'Football'}/>
      <Button btnText={'PUBG'}/>
      <Button btnText={'Gaming'}/>
      <Button btnText={'Cooking'}/>
      <Button btnText={'WWE'}/>
    </div>
  )
}

export default ButtonListSugg