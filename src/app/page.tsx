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

  useEffect(() => {
    document.body.style.backgroundColor = "#010102";
    const getData = async () => {
      const data = await getHarryPotterData();
      
      setFirstArr(data.slice(0, 100));
      setSecondArr(data.slice(101, 200))
      setThirdArr(data.slice(201, 300))
      setFourthArr(data.slice(301, 401))
    }
    getData();
  }, [])

  return (
    <div>
      <NavbarComponent/>
      <RowComponent row={'Important Characters'} rowArr={firstArr && firstArr}/>
      <RowComponent row={'Side Characters Part One'} rowArr={secondArr && secondArr}/>
      <RowComponent row={'Side Characters Part Two'} rowArr={thirdArr && thirdArr}/>
      <RowComponent row={'Side Characters Part Three'} rowArr={fourthArr && fourthArr}/>
    </div>
  );
}
