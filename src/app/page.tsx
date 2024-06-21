'use client'

import { getHarryPotterData } from "@/utils/DataServices";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import RowComponent from "./components/RowComponent";
import ModalComponent from "./components/ModalComponent";

export default function Home() {

  const [fullArr, setFullArr] = useState<any>();
  const [firstArr, setFirstArr] = useState<any[]>();
  const [secondArr, setSecondArr] = useState<any[]>();
  const [thirdArr, setThirdArr] = useState<any[]>();
  const [fourthArr, setFourthArr] = useState<any[]>();
  const [isNav, setIsNav] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#010102";
    const getData = async () => {
      const data = await getHarryPotterData();
      console.log(data);
      if(isNav){
        setFirstArr(data.slice(0, 100));
        setSecondArr(data.slice(101, 200));
        setThirdArr(data.slice(201, 300));
        setFourthArr(data.slice(301, 401));
      }else{
        setFirstArr(data.filter((characters:any) => characters.house.includes('Gryffindor')))
        setSecondArr(data.filter((characters:any) => characters.house.includes('Slytherin')))
        setThirdArr(data.filter((characters:any) => characters.house.includes('Ravenclaw')))
        setFourthArr(data.filter((characters:any) => characters.house.includes('Hufflepuff')))
      }
      
    }
    getData();
  }, [isNav])

  return (
    <div>
      <NavbarComponent isNav={isNav} setIsNav={setIsNav}/>
      <RowComponent row={isNav ? 'Important Characters' : 'Gryffindor'} rowArr={firstArr && firstArr}/>
      <RowComponent row={isNav ? 'Side Characters Part One' : 'Slytherin'} rowArr={secondArr && secondArr}/>
      <RowComponent row={isNav ? 'Side Characters Part Two' : 'Ravenclaw'} rowArr={thirdArr && thirdArr}/>
      <RowComponent row={isNav ? 'Side Characters Part Three' : 'Hufflepuff'} rowArr={fourthArr && fourthArr}/>
    </div>
  );
}
