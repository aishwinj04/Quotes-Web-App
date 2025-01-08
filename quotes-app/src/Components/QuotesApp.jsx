const QuotesApp = () => {
  return (
    <div className="container">
        <div className="quotes-app">
            <h1 className="app-heading">Quote.</h1>
            <i className="bx bxs-heart fav-icon"></i>
            <div className="quote">
                <i className="bx bxs-quote-alt-left left-quote"></i>
                <p className="quote-text">Ask not what your country can do for you; ask what you can do for your country</p>
                <p className="quote-author">John Kennedy</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
        </div>
    </div>
  )
}

export default QuotesApp