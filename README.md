# Quotes Web App

A React application that displays a random quote from an API and allows users to save their favorite quotes.

## Features

- Display a random quote from an API.
- Option to add quotes to a favorites list.
- Toggle between viewing and hiding favorites.
- Interactive UI with styled components.
- Ability to delete a quote from the favorites list.


## Live Site
The QuotesApp is hosted on Netlify. You can view the live app at the following URL:

https://quotes-app-aishwinj.netlify.app/

## How It Works
### Fetching Quotes
- The app fetches a random quote from an API when you click the New Quote button.
- The API used is https://go-quote.azurewebsites.net/, which does not require an API key.
  
### Favorites
- Users can add a quote to the Favorites list by clicking the Add to Favourites button.
- The app stores the favorites locally and displays them when toggled by clicking the heart icon.
- Users can also delete quotes from their favorites.
  
### Code Structure
QuotesApp Component: The main component that handles the quote fetching, favorites management, and UI rendering.
useState Hooks: Manage the state for quotes, favorites, and the visibility of the favorites list.
Screenshot
