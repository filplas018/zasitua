import { Outlet, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card"
import axios from "axios";


export const LimitedCardList = (props) => {
    const {num} = useParams();
    const posty = [];
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);

        /*axios
            .get("posty/" + num)

            .then((response) => {
                if (Array.isArray(response.data)) {
                    setData(response.data);
                    setError(false);
                } else {
                    setData(null);
                    setError(false);
                }
            })
            .catch((error) => {
                setError(true);
                setData(null);
            })
            .then(() => {
                setIsLoading(false);
            });*/

        //console.log("cnt", cnt)
    }, [num]);

    if (error) {
        if (error.response) {
            return;
        } else {
            return ;
        }
    } else if (isLoading) {
        return ;
    } else if (data) {
        let dateString, day, month, year;
        for (let i = 0; i < data.length; i++) {
            let dataset = data[i];
            day = dataset.date.substring(8, 10);
            month = dataset.date.substring(5, 7);
            year = dataset.date.substring(0, 4);
            dateString = day + "." + month + "." + year;
            posty.push(
                <Card img={dataset.thumbNailUrl} heading={dataset.heading} perex={dataset.perex} date={dateString} link ={dataset.link}/>
            );
        }
        return (
            <section>
                <h2>Aktuality</h2>
                <div className="justify-content-between flex-wrap">{posty}</div>
            </section>
        );
    } else if (data === null && error === false) {
        return;
    } else {
        return;
    }
}
export default LimitedCardList;