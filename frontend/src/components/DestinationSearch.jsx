import { useState } from "react";
import axios from "axios";

function DestinationSearch({ value, onSelect }) {

    const [query, setQuery] = useState(value || "");
    const [suggestions, setSuggestions] = useState([]);


    const searchDestination = async (e) => {

        const text = e.target.value;

        setQuery(text);

        if(text.length < 3){
            setSuggestions([]);
            return;
        }


        try{

            const response = await axios.get(
                "https://nominatim.openstreetmap.org/search",
                {
                    params:{
                        q:text,
                        format:"json",
                        limit:5
                    },
                    headers:{
                        "Accept-Language":"en"
                    }
                }
            );


            setSuggestions(response.data);


        }
        catch(error){

            console.log(error);

        }

    };


    const selectPlace = (place)=>{

        setQuery(place.display_name);

        setSuggestions([]);

        onSelect(place.display_name);

    };


    return (

        <div className="relative">

            <input

                type="text"

                placeholder="Search destination"

                value={query}

                onChange={searchDestination}

                className="w-full border p-3 rounded"

            />


            {
                suggestions.length > 0 && (

                    <div className="absolute bg-white border w-full rounded shadow z-10">

                        {
                            suggestions.map((place)=>(

                                <div

                                    key={place.place_id}

                                    onClick={()=>selectPlace(place)}

                                    className="p-3 hover:bg-gray-100 cursor-pointer"

                                >

                                    📍 {place.display_name}

                                </div>

                            ))
                        }

                    </div>

                )
            }


        </div>

    );

}


export default DestinationSearch;