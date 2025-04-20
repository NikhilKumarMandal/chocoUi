import Card1 from "../UIComponents/Card/Card1";
import Card2 from "../UIComponents/Card/Card2";
import Card5 from "../UIComponents/Card/Card5";
import Card7 from "../UIComponents/Card/Card7";
import DollyGatesCard from "../UIComponents/Card/DollyGatesCard";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import ProductCard from "../UIComponents/Card/ProductCard";

function CardPage() {
  const cardsVariants = [
    {
      title: "Choco Card",
      component: (
        <DollyGatesCard
          image="https://i.ytimg.com/vi/WX7DBPcsiEs/maxresdefault.jpg"
          title="When $100B Meets $2 Chai"
          subtitle="The only time Windows crashed for a good reason"
          description="When Microsoft's founder realized the best way to debug life is with a cup of Dolly's magic potion. 'Your system needs a chai break' - Dolly Chaiwala, probably."
          label="ChocoUI"
        />
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const DollyGatesCard = ({ image, title, subtitle, description, label }) => {
            const iconPaths = [
              "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
              "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
              "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
            ];
          
            return (
              <div className="flex justify-center items-center">
                <div className="w-full max-w-md rounded-3xl overflow-hidden bg-white shadow-lg">
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                    <div className="relative h-full">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                          {title}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90">{subtitle}</p>
                      </div>
                    </div>
                  </div>
          
                  <div className="relative p-4 sm:p-6">
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs mb-3 sm:mb-4">
                      {label}
                    </span>
          
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      {title}
                    </h2>
          
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
                      {description}
                    </p>
          
                    <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                      {iconPaths.map((path, index) => (
                        <button
                          key={index}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            sm:width="20"
                            sm:height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d={path}></path>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default DollyGatesCard;
          `,
        },
      ],
      componentProps: [
        {
          name: "image",
          type: "string",
          default: "undefined",
          description: "URL of the image to be displayed on the card",
          example: "'https://example.com/image.jpg'",
        },
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Title of the card",
          example: "'When $100B Meets $2 Chai'",
        },
        {
          name: "subtitle",
          type: "string",
          default: "undefined",
          description: "Subtitle to be displayed below the title",
          example: "'The only time Windows crashed for a good reason'",
        },
        {
          name: "description",
          type: "string",
          default: "undefined",
          description: "A longer description of the card's content",
          example:
            "'When Microsoft's founder realized the best way to debug life is with a cup of Dolly's magic potion.'",
        },
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "Label displayed on top of the description",
          example: "'ChocoUI'",
        },
      ],
    },
    {
      title: "Simple Card",
      component: (
        <Card1
          title="Welcome to ChocoUI"
          description="Explore all the components and tools built with love by Tech-Wizard team."
          buttonText="Explore Now"
          onClick={() => alert("Clicked!")}
          backgroundColor="#FFE4C4"
          textColor="#1a1a1a"
          buttonColor="#4B2E1E"
        />
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";

const Card = ({
  title = "Choco UI",
  description = "Here are the full information of choco ui and tech-wizard team",
  buttonText = "Read more",
  onClick = () => {},
  backgroundColor = "#FFDBB5",
  textColor = "#152f3d",
  buttonColor = "#6C4E31",
}) => {
  return (
    <div
      className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm mx-auto m-4"
      style={{ backgroundColor }}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: textColor }}>
        {title}
      </h5>

      <p className="mb-3 font-normal" style={{ color: textColor }}>
        {description}
      </p>

      <button
        onClick={onClick}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none"
        style={{
          backgroundColor: buttonColor,
        }}
      >
        {buttonText}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;
          `,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "Choco UI",
          description: "The main heading or title of the card.",
          example: "'Welcome to ChocoUI'",
        },
        {
          name: "description",
          type: "string",
          default:
            "Here are the full information of choco ui and tech-wizard team",
          description: "Content or message to display under the title.",
          example: "'Explore the latest updates from our team.'",
        },
        {
          name: "buttonText",
          type: "string",
          default: "Read more",
          description: "Text to show on the CTA button.",
          example: "'Explore Now'",
        },
        {
          name: "onClick",
          type: "function",
          default: "() => {}",
          description: "Function to call when the button is clicked.",
          example: "() => alert('Clicked!')",
        },
        {
          name: "backgroundColor",
          type: "string",
          default: "#FFDBB5",
          description: "Background color of the card.",
          example: "'#FFE4C4'",
        },
        {
          name: "textColor",
          type: "string",
          default: "#152f3d",
          description: "Text color for the title and description.",
          example: "'#1a1a1a'",
        },
        {
          name: "buttonColor",
          type: "string",
          default: "#6C4E31",
          description: "Background color of the button.",
          example: "'#4B2E1E'",
        },
      ],
    },
    {
      title: "Melted Delight",
      component: <Card2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Card({
            imageUrl = "https://plus.unsplash.com/premium_photo-1683120880375-074c4ba3f775?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt = "Sunset in the mountains",
            title = "Rich, velvety brown chocolate flows smoothly, melting into a decadent treat",
            description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            tags = ["#Choco 🍫", "#ChocoAddict 😍"],
          }) {
            return (
              <div className="max-w-sm rounded-2xl border-1 overflow-hidden shadow-lg mx-auto m-4">
                <img
                  className="p-3 rounded-3xl w-full h-64 object-cover"
                  src={imageUrl}
                  alt={imageAlt}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          }
          
          export default Card;
                    `,
        },
      ],
      componentProps: [
        {
          name: "imageUrl",
          type: "string",
          default: "URL to default chocolate image",
          description: "URL of the image shown on top of the card.",
          example: "'https://images.unsplash.com/photo-12345'",
        },
        {
          name: "imageAlt",
          type: "string",
          default: "Sunset in the mountains",
          description: "Alt text for the image (accessibility & SEO).",
          example: "'Decadent chocolate swirl'",
        },
        {
          name: "title",
          type: "string",
          default: "Rich, velvety brown chocolate flows smoothly...",
          description: "Heading or title displayed below the image.",
          example: "'Delicious Dark Chocolate Bar'",
        },
        {
          name: "description",
          type: "string",
          default: "Lorem ipsum dolor sit amet...",
          description: "Description text below the title.",
          example: "'Smooth, sweet and perfect for any dessert.'",
        },
        {
          name: "tags",
          type: "array of strings",
          default: "['#Choco 🍫', '#ChocoAddict 😍']",
          description: "List of tags or labels displayed at the bottom.",
          example: "['#Dessert', '#CocoaLover']",
        },
      ],
    },

    {
      title: "The Grand Card",
      component: (
        <div className="flex justify-center items-center">
          <Card5
            name="Hitesh Choudhary"
            jobTitle="Ex Techie"
            imageUrl="https://images.pexels.com/users/avatars/97941/hitesh-choudhary-291.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
          />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";

function Card({ name, jobTitle, imageUrl, className }) {
  const handleAddFriend = () => {
    alert("Friend added!");
  };

  const handleMessage = () => {
    alert("Message sent!");
  };

  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4 "
    >
      <div className="flex flex-col items-center pb-10 mt-9">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imageUrl}
          alt="image"
        />
        <h5 className="mb-1 text-xl font-sans text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {jobTitle}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            onClick={handleAddFriend}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            onClick={handleMessage}
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
          `,
        },
      ],
      componentProps: [
        {
          name: "name",
          type: "string",
          default: "undefined",
          description: "The name of the person displayed in the card",
          example: "'Hitesh Choudhary'",
        },
        {
          name: "jobTitle",
          type: "string",
          default: "undefined",
          description: "The job title of the person displayed in the card",
          example: "'Ex Techie'",
        },
        {
          name: "imageUrl",
          type: "string",
          default: "undefined",
          description: "URL of the person's image",
          example: "'https://example.com/image.jpg'",
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "Custom CSS classes for styling the card",
          example: "'border-4 border-indigo-500'",
        },
      ],
    },

    {
      title: "Image Background Card (Hitesh Sir Edition)",
      component: (
        <div className="flex justify-center items-center">
          <Card7
            imageUrl="https://images.pexels.com/photos/1739941/pexels-photo-1739941.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            date="2025-03-02"
            title="Haanji, kaisi lagi ChocoUI?"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"
          />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Card7({ imageUrl, date, title, description }) {
            return (
              <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-96 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <img
                  alt=""
                  src={imageUrl}
                  className="absolute inset-0 h-full w-full object-cover"
                />
          
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <time datetime={date} className="block text-xs text-white/90">
                      {new Date(date).toLocaleDateString()}
                    </time>
          
                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-white font-bold">{title}</h3>
                    </a>
          
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            );
          }
                    `,
        },
      ],
      componentProps: [
        {
          name: "imageUrl",
          type: "string",
          default: "undefined",
          description:
            "The URL of the image to be displayed as the background.",
          example:
            "'https://images.pexels.com/photos/1739941/pexels-photo-1739941.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'",
        },
        {
          name: "date",
          type: "string",
          default: "undefined",
          description:
            "The date when the post was created. It should be in string format.",
          example: "'2025-03-02'",
        },
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "The title of the post/card.",
          example: "'Haanji, kaisi lagi ChocoUI?'",
        },
        {
          name: "description",
          type: "string",
          default: "undefined",
          description: "A short description or content of the post/card.",
          example:
            "'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'",
        },
      ],
    },
    {
      title: "Product Card",
      component: <ProductCard />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 39,
      name: "Modern Smartphone",
      description:
        "Latest smartphone with advanced camera features and sleek design.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1564931768869-c66430fe1162?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 45,
      name: "Wireless Headphones",
      description:
        "Premium wireless headphones with noise cancellation and long battery life.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1696834137489-74a760ff8240?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 55,
      name: "Smart Watch",
      description:
        "Feature-rich smartwatch with health monitoring and stylish design.",
    },
  ];

  const toggleLike = () => setIsLiked(!isLiked);
  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-sm mx-auto px-2 sm:px-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative aspect-[4/5] sm:aspect-[4/3]">
          <button
            className={
              "absolute top-3 right-3 z-10 p-2 rounded-full bg-black/30 transition-transform " +
              (isLiked ? "scale-110" : "scale-100")
            }
            onClick={toggleLike}
            aria-label={isLiked ? "Unlike product" : "Like product"}
          >
            <Heart
              className={
                "w-5 h-5 " +
                (isLiked ? "fill-red-500 text-red-500" : "text-white")
              }
            />
          </button>

          <div className="relative h-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ transform: "translateX(-" + currentSlide * 100 + "%)" }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full h-full flex-shrink-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0">
            <div className="flex justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={
                    "w-2 h-2 rounded-full transition-colors " +
                    (currentSlide === index ? "bg-blue-500" : "bg-gray-300")
                  }
                  onClick={() => goToSlide(index)}
                  aria-label={"Go to slide " + (index + 1)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium text-lg text-blue-500">
              {products[currentSlide].name}
            </h2>
            <span className="font-medium text-blue-500">
              {"$" + products[currentSlide].price}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {products[currentSlide].description}
          </p>

          <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
`,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description:
            "The URL of the image to be displayed as the background.",
          example: "''",
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Card Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore a curated selection of sleek, responsive card components
      </p>
      <div className="mt-6 space-y-6">
        {cardsVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default CardPage;
