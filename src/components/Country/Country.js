import "./Country.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Country() {
    let params = useParams();
    const [confirmed, setConfirmed] = useState();
    const [recovered, setRecovered] = useState();
    const [deaths, setDeaths] = useState();

    useEffect(()=>{
        const  fetchData = async () => {
            try {
              /*
              const response = await fetch(`https://api.covid19api.com/country/${params.name}?from=2020-10-31T00:00:00Z&to=2020-10-31T23:00:00Z`);
              const DataJSON = await response.json().then(data => {
                console.log("response: "+data);
              setConfirmed(data[0].Confirmed);
              setRecovered(data[0].Recovered);
              setDeaths(data[0].Deaths);
              });
              console.log(DataJSON);
              console.log(confirmed);
              console.log(recovered);
              console.log(deaths);*/

              fetch(`https://api.covid19api.com/country/${params.name}?from=2020-10-31T00:00:00Z&to=2020-10-31T23:00:00Z`)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                setConfirmed(data[0].Confirmed);
                setRecovered(data[0].Recovered);
                setDeaths(data[0].Deaths);
              });
            } catch (error) {
              console.log("error", error);
            }
          };

          fetchData();
        /*
        fetch(`https://icanhazdadjoke.com/j/${params.jokeid}`, {headers: {"Accept" : "application/json"}})
        .then(response => response.json())
        .then(data => {
            console.log(data.joke);
            setJoke(data.joke);
        });*/
    });

    return(
        <div className="results">
            <p>Confirmed: {confirmed}</p>
            <p>Recovered: {recovered}</p>
            <p>Deaths: {deaths}</p>
            <button class="button" onClick={()=>{window.location.href = '/'}}>Go back</button>
        </div>
    );
   
}

export default Country;