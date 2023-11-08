import {useState} from "react";

const Main = () => {
  const [input, setInput] = useState<string>("");
  const [selectedFriet, setSelectedFriet] = useState<any>(null);
  const frietjes: any[] = [
    {
      id: 1,
      name: "Frietje zonder",
      description: "Frietje zonder beschrijving",
    },
    {
      id: 2,
      name: "Frietje met",
      description: "Frietje met beschrijving",
    },
    {
      id: 3,
      name: "Frietje special",
      description: "Frietje special beschrijving",
    },
    {
      id: 4,
      name: "Dik en lng",
      description: "Dik en lang beschrijving",
    },
    {
      id: 5,
      name: "Frietje Oorlog",
      description: "Frietje oorlog beschrijving",
    },
    {
      id: 6,
      name: "Knapperig",
      description: "Frietje knapperig beschrijving",
    },
    {
      id: 7,
      name: "Slap",
      description: "Frietje slap beschrijving",
    },
    {
      id: 8,
      name: "Frietje kapsalon",
      description: "Frietje kapsalon beschrijving",
    },
    {
      id: 9,
      name: "Curly fries",
      description: "Curly fries beschrijving",
    },
    {
      id: 10,
      name: "Zoete aardappel frietje",
      description: "Frietje zoete aardappel beschrijving",
    },
    {
      id: 11,
      name: "Frietje Kernoorlog",
      description: "Frietje kernoorlog beschrijving",
    },
  ];

  const calculateFrietje = () => {
    const nameInput = input.toLocaleLowerCase();

    // Calculate a number based on the name (between 1 and the length of frietjes array)
    const nameNumber = nameInput.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const frietNumber = (nameNumber % frietjes.length) + 1;

    // Find the corresponding frietje object
    const selectedFriet = frietjes.find((frietje) => frietje.id === frietNumber);

    if (selectedFriet) {
      setSelectedFriet(selectedFriet);
    }
  };

  return (
    <>
      <div className={"inputform"}>
        {/* <label>Igor is een frietje</label> */}
        <input value={input} className={"inputfield"} placeholder={"naam"} onChange={(e) => setInput(e.target.value)} />
        <button className={"inputbutton"} onClick={() => calculateFrietje()}>
          Ben ik een frietje?
        </button>
        {selectedFriet ? (
          <>
            <label>{selectedFriet?.name}</label>
            <label>{selectedFriet?.description}</label>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Main;
