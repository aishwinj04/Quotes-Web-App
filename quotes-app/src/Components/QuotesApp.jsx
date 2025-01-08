import { useState } from "react"

const QuotesApp = () => {
    const [quote, setQuote] = useState({
        text: "Ask not what your country can do for you; ask what you can do for your country",
        author: "John Kennedy"
    })

    const fetchNewQuote = async () => {
        const url = "https://go-quote.azurewebsites.net/docs/#/default/get_random_quote" /* keyless api */
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setQuote({
            text:data.text,
            author: data.author
        })
    }
  return (
    <div className="container">
        <div className="quote-container">
            <h1 className="app-heading">Quote.</h1>
            <i className="bx bxs-heart fav-icon"></i>
            <div className="quote">
                <i className="bx bxs-quote-alt-left left-quote"></i>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">{quote.author}</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
            <div className="circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
            </div>
            <div className="buttons">
                <button className="btn btn-new" onClick={fetchNewQuote}>New Quote</button>
                <button className="btn btn-fav">Favourite</button>
                
                
            </div>
        </div>
    </div>
  )
}

export default QuotesApp