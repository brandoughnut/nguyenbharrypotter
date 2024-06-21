import React from 'react'

const ModalComponent = (props: {isOpen:(input: boolean) => void, character:any}) => {
  return (
    <div onClick={() => {
        props.isOpen(false);
    }}>
    <div 
    className="fixed inset-0 bg-black  bg-opacity-30 z-[50]"></div>
      <div className="fixed inset-0 flex items-center justify-center z-[50]">
        <div className="text-white bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[450px] h-[500px] p-[30px] rounded-[10px] shadow-md">
            <p>{props.character.name}</p>
        </div>

        </div>
    </div>

  )
}

export default ModalComponent
