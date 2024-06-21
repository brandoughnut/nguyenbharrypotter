import React from 'react'

const ModalComponent = (props: {isOpen:(input: boolean) => void, character:any}) => {
  return (
    <div onClick={() => {
        props.isOpen(false);
    }}>
    <div className="fixed inset-0 bg-black  bg-opacity-30 z-[50]"></div>
      <div className="fixed inset-0 flex items-center justify-center z-[50]">
        <div className="text-white bg-[#181818] border-[#808080] border-[1px] mx-[5px] w-full md:w-[700px] h-[500px] p-[30px] rounded-[10px] shadow-md">
            <div className='grid grid-cols-2'>
                <div>
                    <img className='object-cover border-[1px] w-full h-[425px] me-4 border-white rounded-[10]' src={props.character.image || "/images/emptyavatar.png"} alt="Harry Potter character" />
                </div>
                <div className='ms-4 text-[20px]'>
                    <p className=''>{`Name: ${props.character.name}`}</p>
                    <p className=''>{`House: ${props.character.house}`}</p>
                    <p className=''>{`Birthday: ${props.character.dateOfBirth}`}</p>
                    <p className=''>{`Gender: ${props.character.gender}`}</p>
                    <p className=''>{`Species: ${props.character.species}`}</p>
                    <p className=''>{`Ancestry: ${props.character.ancestry}`}</p>
                    <p className=''>{`Hair Color: ${props.character.hairColour}`}</p>
                    <p className=''>{`Eye Color: ${props.character.eyeColour}`}</p>
                    <p className=''>{`Wand: ${props.character.wand.core}`}</p>

                </div>
            </div>
        </div>

        </div>
    </div>

  )
}

export default ModalComponent
