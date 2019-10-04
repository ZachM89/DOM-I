const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navWordsAddOne = document.createElement('a');
navWordsAddOne.textContent = "NavExtraOne";

const navWordsAddTwo = document.createElement('a');
navWordsAddTwo.textContent = "NavExtraTwo";

const navSelector = document.querySelector(".container header nav");
navSelector.appendChild(navWordsAddOne);
navSelector.appendChild(navWordsAddTwo);

const navWords = document.querySelectorAll('a');
navWords[0].textContent = siteContent["nav"]["nav-item-1"];
navWords[1].textContent = siteContent["nav"]["nav-item-2"];
navWords[2].textContent = siteContent["nav"]["nav-item-3"];
navWords[3].textContent = siteContent["nav"]["nav-item-4"];
navWords[4].textContent = siteContent["nav"]["nav-item-5"];
navWords[5].textContent = siteContent["nav"]["nav-item-6"];

for(let a = 0; a < navWords.length; a++){
    navWords[a].style.color = "green";
}

const bigWords = document.querySelector(".container .cta .cta-text h1");
bigWords.textContent = siteContent["cta"]["h1"];

const getStartedButton = document.querySelector(".container .cta .cta-text button");
getStartedButton.textContent = 'Get Started';

const circleCodePic = document.querySelector('#cta-img');
circleCodePic.setAttribute('src', siteContent["cta"]["img-src"]);

const mainContentTitlesTop = document.querySelectorAll(".container .main-content .top-content .text-content h4" );
mainContentTitlesTop[0].textContent = siteContent["main-content"]["features-h4"];
mainContentTitlesTop[1].textContent = siteContent["main-content"]["about-h4"];

const mainContentParagraphsTop = document.querySelectorAll('.container .main-content .top-content .text-content p');
mainContentParagraphsTop[0].textContent = siteContent["main-content"]["features-content"];
mainContentParagraphsTop[1].textContent = siteContent["main-content"]["about-content"];

const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const mainContentTitlesBottom = document.querySelectorAll(".container .main-content .bottom-content .text-content h4" );
mainContentTitlesBottom[0].textContent = siteContent["main-content"]["services-h4"];
mainContentTitlesBottom[1].textContent = siteContent["main-content"]["product-h4"];
mainContentTitlesBottom[2].textContent = siteContent["main-content"]["vision-h4"];

const mainContentParagraphsBottom = document.querySelectorAll('.container .main-content .bottom-content .text-content p');
mainContentParagraphsBottom[0].textContent = siteContent["main-content"]["services-content"];
mainContentParagraphsBottom[1].textContent = siteContent["main-content"]["product-content"];
mainContentParagraphsBottom[2].textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector(".container .contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactParagraphs = document.querySelectorAll(".container .contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

const footerSection = document.querySelector(".container footer p");
footerSection.textContent = siteContent["footer"]["copyright"];