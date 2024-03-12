import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AddCity = ({ setLocation, addNewCity, location }) => {
  const [citybasee, setCityBasee] = useState([
    "Abu Dhabi",
    "Abuja",
    "Accra",
    "Adamstown",
    "Addis Ababa",
    "Algiers",
    "Alofi",
    "Amman",
    "Amsterdam",
    "Andorra la Vella",
    "Ankara",
    "Antananarivo",
    "Apia",
    "Ashgabat",
    "Asmara",
    "Asunción",
    "Athens",
    "Avarua",
    "Baghdad",
    "Baku",
    "Bamako",
    "Bandar Seri Begawan",
    "Bangkok",
    "Bangui",
    "Banjul",
    "Basse-Terre",
    "Basseterre",
    "Beijing",
    "Beirut",
    "Belgrade",
    "Belmopan",
    "Berlin",
    "Bern",
    "Bishkek",
    "Bissau",
    "Bogotá",
    "Brasília",
    "Bratislava",
    "Brazzaville",
    "Bridgetown",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Caracas",
    "Castries",
    "Cayenne",
    "Charlotte Amalie",
    "Chișinău",
    "City of San Marino",
    "Cockburn Town",
    "Conakry",
    "Copenhagen",
    "Dakar",
    "Damascus",
    "Dhaka",
    "Diego Garcia",
    "Dili",
    "Djibouti",
    "Dodoma",
    "Doha",
    "Douglas",
    "Dublin",
    "Dushanbe",
    "El Aaiún",
    "Fakaofo",
    "Flying Fish Cove",
    "Fort-de-France",
    "Freetown",
    "Funafuti",
    "Gaborone",
    "George Town",
    "Georgetown",
    "Gibraltar",
    "Gitega",
    "Guatemala City",
    "Gustavia",
    "Hagåtña",
    "Hamilton",
    "Hanoi",
    "Harare",
    "Havana",
    "Helsinki",
    "Honiara",
    "Islamabad",
    "Jakarta",
    "Jamestown",
    "Jerusalem",
    "Juba",
    "Kabul",
    "Kampala",
    "Kathmandu",
    "Khartoum",
    "Kigali",
    "King Edward Point",
    "Kingston",
    "Kingstown",
    "Kinshasa",
    "Kralendijk",
    "Kuala Lumpur",
    "Kuwait City",
    "Kyiv",
    "Libreville",
    "Lilongwe",
    "Lima",
    "Lisbon",
    "Ljubljana",
    "Lomé",
    "London",
    "Longyearbyen",
    "Luanda",
    "Lusaka",
    "Luxembourg",
    "Madrid",
    "Majuro",
    "Malabo",
    "Malé",
    "Mamoudzou",
    "Managua",
    "Manama",
    "Manila",
    "Maputo",
    "Mariehamn",
    "Marigot",
    "Maseru",
    "Mata-Utu",
    "Mbabane",
    "Mexico City",
    "Minsk",
    "Mogadishu",
    "Monaco",
    "Monrovia",
    "Montevideo",
    "Moroni",
    "Moscow",
    "Muscat",
    "N'Djamena",
    "Nairobi",
    "Nassau",
    "Naypyidaw",
    "New Delhi",
    "Ngerulmud",
    "Niamey",
    "Nicosia",
    "Nouakchott",
    "Nouméa",
    "Nuku'alofa",
    "Nur-Sultan",
    "Nuuk",
    "Oranjestad",
    "Oslo",
    "Ottawa",
    "Ouagadougou",
    "Pago Pago",
    "Palikir",
    "Panama City",
    "Papeetē",
    "Paramaribo",
    "Paris",
    "Philipsburg",
    "Phnom Penh",
    "Plymouth",
    "Podgorica",
    "Port Louis",
    "Port Moresby",
    "Port of Spain",
    "Port Vila",
    "Port-au-Prince",
    "Port-aux-Français",
    "Porto-Novo",
    "Prague",
    "Praia",
    "Pretoria",
    "Pristina",
    "Pyongyang",
    "Quito",
    "Rabat",
    "Ramallah",
    "Reykjavik",
    "Riga",
    "Riyadh",
    "Road Town",
    "Rome",
    "Roseau",
    "Saint Helier",
    "Saint John's",
    "Saint-Denis",
    "Saint-Pierre",
    "Saipan",
    "San José",
    "San Juan",
    "San Salvador",
    "Sana'a",
    "Santiago",
    "Santo Domingo",
    "Sarajevo",
    "Seoul",
    "Singapore",
    "Skopje",
    "Sofia",
    "South Tarawa",
    "Sri Jayawardenepura Kotte",
    "St. George's",
    "St. Peter Port",
    "Stanley",
    "Stockholm",
    "Sucre",
    "Suva",
    "São Tomé",
    "Taipei",
    "Tallinn",
    "Tashkent",
    "Tbilisi",
    "Tegucigalpa",
    "Tehran",
    "The Valley",
    "Thimphu",
    "Tirana",
    "Tokyo",
    "Tripoli",
    "Tunis",
    "Tórshavn",
    "Ulan Bator",
    "Vaduz",
    "Valletta",
    "Vatican City",
    "Victoria",
    "Vienna",
    "Vientiane",
    "Vilnius",
    "Warsaw",
    "Washington DC",
    "Washington, D.C.",
    "Wellington",
    "West Island",
    "Willemstad",
    "Windhoek",
    "Yamoussoukro",
    "Yaoundé",
    "Yaren",
    "Yerevan",
    "Zagreb",
  ]);

  return (
    <div className="flex flex-row mt-2">
      <input
        value={location}
        className="dive pl-4"
        type="text"
        list="city"
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter your city"
      />
      <datalist id="city">
        {citybasee.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </datalist>

      <button
        className=" text-3xl font-bold pl-5"
        onClick={() => {
          addNewCity();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-9 h-14 hover:text-gray-600 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddCity;
