The goal of my application is to create an interface for a plant nursery where someone who is new to plants or even a veteran can sort by how difficult it is to care for that type of plant, and can filter by what climate that plant will thrive in and by their price range. This way people who are new to gardening can shop for plants they want to buy more efficiently. 

Deployed web application : https://miscellaneousmonkey88.github.io/development/

I only had one component, called PlantItem. Each of the plant components are passed props, including image, name, price, difficulty, climate, an add button, and a remove button. It was important that the add and remove buttons were created in App.js and then passed into the PlantItem component, because this way they could alter the state of the cart. These buttons call addToCart and removeFromCart respectively, which alter the state of the cart and the state of the total price.

I kept a pretty intuitive and classic design, with a list of items you can scroll through and a fixed cart on the side. 
