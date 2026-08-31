# Devora Restaurant Website

A responsive restaurant website concept using the supplied Devora logo.

## Included
- Home / hero section with real food & restaurant photography
- Most-ordered section
- Full menu with Food, Hot Drinks, and Cold Drinks filters
- Realistic food/drink photos
- Item name, ingredients, number of persons, price, and Order Now button
- Functional shopping cart with quantity controls
- Checkout/customer information form
- Order confirmation state with generated order number
- Reviews section
- Contact section
- Responsive mobile navigation
- Cart saved in localStorage

## Run
Open `index.html` in a browser.

## Important
The demo uses remote Unsplash image URLs so the photos are real photographs rather than illustrations/icons. For a production restaurant site, replace these URLs with the restaurant's own food photos and connect the checkout form to a real backend/order system.


## Updated in this version
- Cart now starts at 0 and uses a fresh storage key, so the previous demo count cannot carry over.
- Add to cart uses event delegation and works across all menu filters.
- Checkout customer information is saved locally as the latest order.
- Added Desserts category and dessert items.
- Replaced the Fresh Lemonade and Hot Chocolate image URLs and added image fallbacks.
- Darker, warmer, more premium visual palette.
- Redesigned the home image as a polished framed visual with floating detail card.
- Updated contact image to a more professional restaurant/dining visual.
- Removed the logo image from the footer.
- Added an Add your review modal; submitted reviews appear on the page and are stored locally.


## Latest visual update
- The Good food / Good moments story section is now a full-width restaurant-photo background with no left-side image.
- The home hero uses a restaurant photo background and an elegant glass information card instead of a separate right-side photo.
- The contact section uses a separate professional restaurant/chef image.
- Reviews are rendered reliably and newly submitted reviews are persisted and displayed.
- Expanded menu with additional food, hot drinks, cold drinks, and desserts.
- Mobile layout has dedicated responsive breakpoints for navigation, cards, cart, checkout, reviews, and forms.
