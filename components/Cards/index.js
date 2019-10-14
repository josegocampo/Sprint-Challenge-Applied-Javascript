// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios 
.get('https://lambda-times-backend.herokuapp.com/articles')




.then((allArts) => {

    console.log(allArts.data.articles);

    const jquery = allArts.data.articles.jquery;
    const boot = allArts.data.articles.bootstrap;
    const tech = allArts.data.articles.technology;
    const js = allArts.data.articles.javascript;
    const node = allArts.data.articles.nod;


js.forEach((article) => {

let cardsContainer = document.querySelector('.cards-container');

let card = document.createElement('div');
let headline = document.createElement('div');
let author = document.createElement('div');
let imgCont = document.createElement ('div');
let img = document.createElement('img');
let by = document.createElement('span');


card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgCont.classList.add('img-container');
img.classList.add('img');
by.classList.add('span');

card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgCont);
author.appendChild(by);
imgCont.appendChild(img);



headline.textContent = `${article.headline}`;
img.src = `${article.authorPhoto}`;
by.textContent = `${article.authorName}`;



cardsContainer.appendChild(card);

}
);

boot.forEach((article) => {

    let cardsContainer = document.querySelector('.cards-container');
    
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgCont = document.createElement ('div');
    let img = document.createElement('img');
    let by = document.createElement('span');
    
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    img.classList.add('img');
    by.classList.add('span');
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(by);
    imgCont.appendChild(img);
    
    
    
    headline.textContent = `${article.headline}`;
    img.src = `${article.authorPhoto}`;
    by.textContent = `${article.authorName}`;
    
    
    
    cardsContainer.appendChild(card);
    
    }
    );

    tech.forEach((article) => {

        let cardsContainer = document.querySelector('.cards-container');
        
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let author = document.createElement('div');
        let imgCont = document.createElement ('div');
        let img = document.createElement('img');
        let by = document.createElement('span');
        
        
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgCont.classList.add('img-container');
        img.classList.add('img');
        by.classList.add('span');
        
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgCont);
        author.appendChild(by);
        imgCont.appendChild(img);
        
        
        
        headline.textContent = `${article.headline}`;
        img.src = `${article.authorPhoto}`;
        by.textContent = `${article.authorName}`;
        
        
        
        cardsContainer.appendChild(card);
        
        }
        );

        jquery.forEach((article) => {

            let cardsContainer = document.querySelector('.cards-container');
            
            let card = document.createElement('div');
            let headline = document.createElement('div');
            let author = document.createElement('div');
            let imgCont = document.createElement ('div');
            let img = document.createElement('img');
            let by = document.createElement('span');
            
            
            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgCont.classList.add('img-container');
            img.classList.add('img');
            by.classList.add('span');
            
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgCont);
            author.appendChild(by);
            imgCont.appendChild(img);
            
            
            
            headline.textContent = `${article.headline}`;
            img.src = `${article.authorPhoto}`;
            by.textContent = `${article.authorName}`;
            
            
            
            cardsContainer.appendChild(card);
            
            }
            );

            node.forEach((article) => {

                let cardsContainer = document.querySelector('.cards-container');
                
                let card = document.createElement('div');
                let headline = document.createElement('div');
                let author = document.createElement('div');
                let imgCont = document.createElement ('div');
                let img = document.createElement('img');
                let by = document.createElement('span');
                
                
                card.classList.add('card');
                headline.classList.add('headline');
                author.classList.add('author');
                imgCont.classList.add('img-container');
                img.classList.add('img');
                by.classList.add('span');
                
                card.appendChild(headline);
                card.appendChild(author);
                author.appendChild(imgCont);
                author.appendChild(by);
                imgCont.appendChild(img);
                
                
                
                headline.textContent = `${article.headline}`;
                img.src = `${article.authorPhoto}`;
                by.textContent = `${article.authorName}`;
                
                
                
                cardsContainer.appendChild(card);
                
                }
                )
                ;


      })
      .catch((err) =>{
        console.log(err);
      })