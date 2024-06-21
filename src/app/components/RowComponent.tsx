'use client'

import React, { useState } from 'react'
import ModalComponent from './ModalComponent'

const RowComponent = (props: {row:string, rowArr:any}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [characterArr, setCharacterArr] = useState<any>();

  return (
    <div className='ms-[60px] my-10'>
        <p className='text-white text-[30px] font-semibold'>{props.row}</p>
        <div className='flex overflow-x-auto'>
            {
                props.rowArr && props.rowArr.map((character:any, idx:number) => {
                    return (
                        <div className='notZoom me-1 w-[175px]' key={idx}>
                            <img
                            onClick={() => {
                                setCharacterArr(character);
                                setIsOpen(true);
                            }}
                            className='zoom cursor-pointer h-[275px] object-cover w-full' src={character.image || "/images/emptyavatar.png"} alt="Harry Potter character" />
                            <p className='text-white w-[200px]'>{character.name}</p>
                            

                        </div>
                    
                    )
                })
            }
            
        </div>
        {
            isOpen ? <ModalComponent isOpen={setIsOpen} character={characterArr} /> : ''
        }
    </div>
  )
}

export default RowComponent
