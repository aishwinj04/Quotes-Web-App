import { useState } from "react"

const QuotesApp = () => {
    const [quote, setQuote] = useState({
        text: "Ask not what your country can do for you; ask what you can do for your country",
        author: "John Kennedy" // default for initial view 
    })
    const fetchNewQuote = async () => {
        const url = "https://quotes-api-self.vercel.app/quote"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setQuote({
            text: data.quote, // quote and author name of the json keys
            author: data.author
        })
    }

    const [showFavourites, setShowFavourites] = useState(false)
    const toggleFavourites = () => {
        setShowFavourites(!showFavourites)

    }

    const [favourites, setFavourites] = useState([])
    const addToFavourites = () => {
        const isInFavourites = favourites.some((fav) => fav.text === quote.text && fav.author === quote.author)

        if (!isInFavourites){
             setFavourites([...favourites, quote])
        }
       
    }

  return (
    <div className="container">
        <div className="quote-container">
            <h1 className="app-heading">InspireMe.</h1>
            <i className="bx bxs-heart bx-tada-hover fav-icon" onClick={toggleFavourites}></i>
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
                <button className="btn btn-fav" onClick={addToFavourites}>Add to Favourites</button>
            </div>

            {showFavourites && (<div className="favourites">
                <button className="btn-close" onClick={toggleFavourites}>
                    <i className="bx bx-x bx-flashing"></i>
                </button>

                {favourites.map((favQuote, index) => (<div className="fav-quote" key={index}>
                    <div className="fav-quote-delete">
                        <i className="bx bx-x-circle bx-tada-hover" onClick={() => {
                            const updatedFavourites = favourites.filter((item, i) =>
                            i !== index) // index being the position of clicked quote 
                            setFavourites(updatedFavourites)
                        }}></i>
                    </div>
                    <div className="fav-quote-content">
                        <div className="fav-quote-text">{favQuote.text}</div>
                        <div className="fav-quote-author">{favQuote.author}</div>
                    </div>
                </div>))}
                
            </div>
)}

            
        </div>
    </div>
  )
}

export default QuotesApp