import React, {useState, useEffect} from 'react'
import './news.css'

function News() {

    const [json, setJson] = useState({})
    const [inputValue, setInputValue] = useState("tesla")
    
    const URL = `https://newsapi.org/v2/everything?q=${inputValue}&from=2022-02-02&sortBy=publishedAt&apiKey=`

    const API_KEY = "e0060ee71ece4d45bcbe8129e0c27d7a"

        useEffect(() => {
            fetch(`${URL}${API_KEY}`)
            .then(response => response.json())
            .then(data => setJson(data))
        }, [inputValue])

        console.log(json);


    return (<div>
        
        <input className='input' onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search..." />

        <ul className="list">
           {
               json.articles?.map(item => {
                return(
                        <li className="card" key={item?.author}>
                        <img key={item?.author} width="260" height="210" src={item?.urlToImage} />
                        <details>
                            <summary>
                            {item?.title}
                            </summary>
                            <p>
                            {item?.description}
                            </p>
                        </details>
                    </li>
                )
        })
           }
        </ul>

    </div>)
}

export default News