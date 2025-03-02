const PROJECTS_DATA = [
  {
    title: 'Shadeum Clone',
    description:
      'Decentralization for everyone Fast, scalable, and forever fair.',
    github: 'https://github.com/hanorah/shadeum',
    about: ' Shardeum is an EVM-based, truly decentralized L1.',
    link: 'https://shardeum.org/',
    imageUrl: 'https://i.ibb.co/s9rmgCym/1.jpg',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'Fizzi',
    description: 'Fizzi a fictional soda brand',
    github: 'https://github.com/hanorah',
    about:
      'Our soda is made with real fruit juice and a touch of cane sugar. We never use artificial sweeteners or high fructose corn syrup. Try all five flavors and find your favorite.',
    link: 'https://cans-lwah.vercel.app/?vercelToolbarCode=lC1r4YL6l0YnY6n',
    imageUrl: 'https://i.ibb.co/Xk7mZLf7/fizzi.jpg',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'IVY',
    description: 'A healthcare website.',
    github: 'https://github.com/hanorah',
    about:
      'Envision the comfort of knowing your loved one is in the hands of caring professionals who appreciate their individuality. Here, they are encouraged to maintain their cherished routines, savor their preferred meals, and engage in the hobbies they adore. ALL THIS AND MORE AWAITS YOUR LOVED ONE AT IVY HEALTH CARE LIMITED.',
    link: 'https://hanorah.github.io/ivy/',
    imageUrl: 'https://i.ibb.co/2YYdng95/ivy.jpg',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'Ochi Website-clone',
    description: 'An Presentation agency.',
    github: 'https://github.com/hanorah',
    about:
      'Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.',
    link: 'https://ochi-clone-theta.vercel.app/',
    imageUrl: 'https://i.ibb.co/ZpRT31JN/ochi.jpg',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'Block chain technology',
    description: 'Decentralized Data Solutions',
    github: 'https://github.com/hanorah',
    about:
      'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.',
    link: 'https://block-chain-sable.vercel.app/',
    imageUrl: 'https://i.ibb.co/jP5kJKRX/block.jpg',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'Branding Company',
    description: 'A Branding company in Canada.',
    github: 'https://github.com/hanorah',
    about: 'This is a digital brand identity company website.',
    link: 'https://hanorah.github.io/brand/',
    imageUrl: 'https://i.ibb.co/8jTdBWm/20240810140750.gif',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'Design Company',
    description: 'A Design and brand identity company in india.',
    github: 'https://github.com/hanorah',
    about: 'This is a design and brand identity website.',
    link: 'https://devopus.com/',
    imageUrl: 'https://i.ibb.co/8KFkPXK/20240810141820.gif',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'TISV',
    description: 'Digital Solutions Company',
    github: 'https://github.com/hanorah',
    about: 'Digial solutions comapny in Canada and Nigeria .',
    link: 'https://www.tisv.digital/',
    imageUrl: 'https://i.ibb.co/1JcCyPr/20240810142233.gif',
    type: ['open-source', 'tools', 'project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'The Tailors Shop',
    description: 'A fashion design company.',
    github: 'https://github.com/hanorah',
    about: 'put info.',
    link: 'https://selmtech.github.io/zahir/',
    imageUrl: 'https://i.ibb.co/nCtqmqj/20240810144317.gif',

    type: ['project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },

  {
    title: 'Ecommerce Shoe Store',
    description: 'description.',
    github: 'https://github.com/hanorah',
    about: 'put info.',
    link: 'https://hanorah.github.io/selm/',
    imageUrl: 'https://i.ibb.co/tYhWx8G/20240810140649.gif',
    type: ['project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },
  {
    title: 'Selm Technology',
    description: 'A tech solutions company.',
    github: 'https://github.com/hanorah',
    about: 'put info.',
    link: 'https://hanorah.github.io/selm/',
    imageUrl: 'https://i.ibb.co/N1F9PT1/20240810144433.gif',
    type: ['project'],
    technologies: ['React', 'Redux Saga', 'Javascript', 'Firebase', 'Next.js'],
  },

  {
    title: 'THE CHEE SPACE',
    description: 'A tech and brand solutions company.',
    github: 'https://github.com/hanorah',
    about: 'put info.',
    link: 'https://hanorah.github.io/cheespace/',
    imageUrl: 'https://i.ibb.co/jyXptG3/20240810144124.gif',
    type: ['project'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },
  {
    title: 'The barbers shop',
    description: 'A barbing salon.',
    github: 'https://github.com/hanorah',
    about: 'put info.',
    link: 'https://hanorah.github.io/barber/',
    imageUrl: 'https://i.ibb.co/PgWwWQ6/20240810144016.gif',
    type: ['project'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },
  {
    title: 'E-Commerce Website',
    description: 'An E-commerce Application.',
    github: 'https://github.com/hanorah',
    about:
      'This is an e-commerce platform catered towards giving the best and fast experience for customers to buy products, we call it a frictionless process from start to finish.',
    link: 'https://github.com/hanorah',
    imageUrl: 'https://i.ibb.co/y60ZJMf/20240810140510.gif',
    type: ['project'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },

  {
    title: 'S.I.T (Skills, Income, and Technology Program)',
    about:
      'The Skills, Income, and Technology program focuses on equipping children with essential digital skills to empower their creativity and foster future opportunities in the tech space.',
    description:
      'S.I.T teaches kids digital skills like web development, graphic design, and video editing, preparing them for future careers in technology. Through interactive workshops and hands-on learning, participants gain practical experience in using tools such as React, Next.js, and more, setting the foundation for real-world tech applications.',
    link: 'https://mytofnation/sit.com',
    github: 'https://github.com/hanorah',
    imageUrl: 'https://i.ibb.co/5GQGWvF/20241004222054.gif',
    type: ['project', 'tools'],
    technologies: ['Typescript', 'Rollup', 'React', 'Nextjs'],
  },

  {
    title: 'Magic',
    description: 'Delightful auth for Web3 onboarding',
    about:
      'Onboard users new to crypto with just an email, phone number, or social login. One SDK for auth, wallet creation, and key management.',
    link: 'https://magic.link',
    imageUrl:
      'https://i.ibb.co/1Q3331D/Screenshot-2023-08-02-at-8-21-59-PM.png',
    type: ['others', 'project'],
    technologies: ['React', 'TypeScript', 'Nextjs', 'Javascript', 'GraphCMS'],
  },

  {
    title: 'Clinified',
    description: 'Accessing healthcare will never be the same again',
    about:
      'Clinified is your personal assistant working for you 24/7. Better manage your practice and build your online reputation. With our integrated end-to-end solution, you are able to improve your online presence and devote time to what really matters: your patients. Today, the entire healthcare system in Africa is fundamentally broken, complicated, and frustrating. Clinified wants to change this by transforming how you access and experience healthcare, with a focus on high quality and improved outcomes.',
    link: 'https://clinified.com/',
    imageUrl:
      'https://i.ibb.co/ZhmzLdv/Screenshot-2020-05-04-at-4-26-10-AM.png',
    type: ['project'],
    technologies: ['Nuxt', 'Vue', 'Javascript', 'A11y'],
  },

  {
    title: '54gene',
    description: 'Discover Yourself Through Your Genes.',
    about:
      'Africans house the most genetically diverse DNA in comparison to all other world populations combined. In gathering insights from the African genome, we could power medical breakthroughs and discoveries that will change the entire landscape of healthcare, globally. We fully recognize the tremendous potential that this presents. Presently, most genomic data used for development research is from Europe, the United Kingdom, and North America with African genomic data only accounting for less than 3%. This is where we come in. We exist to close this gap by increasing access to highly curated genomic data from African populations.',
    link: 'https://54gene.com',
    imageUrl:
      'https://i.ibb.co/6gZckMz/Screenshot-2020-05-04-at-4-34-31-AM.png',
    type: ['others', 'project'],
    technologies: ['Vuejs', 'Javascript', 'Vuex'],
  },
  {
    title: 'Piggment Chrome Extension',
    github: 'https://github.com/adenekan41/piggment-chrome',
    description: 'The gradient you have always wanted in a new tab',
    about:
      'Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, and save, easy CSS cross-browser gradient codes all in a new tab.',
    link: 'https://chrome.google.com/webstore/detail/piggment-crafted-to-inspi/eifkhhlfjplpakoddkndkgjhfajnhffg',
    imageUrl: 'https://i.ibb.co/Pxm6yzy/Screenshot-2020-07-28-at-02-48-43.png',
    type: ['open-source', 'tools'],
    technologies: ['React', 'Context API', 'Javascript'],
  },

  {
    title: 'Zeedas',
    description: 'Engineering Team On Steroid.',
    about:
      'Zeedas is an advanced product management tool that allows you to manage and track the speed and accuracy of developers from anywhere in the world to meet your software needs.',
    link: 'https://zeedas.com',
    imageUrl:
      'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
    type: ['others', 'project'],
    technologies: ['Vuejs', 'Vuex', 'Javascript', 'CSS3 & Sass'],
  },
  {
    title: 'Nester Verify',
    description:
      'An online web application for address and guarantor verification',
    about:
      'Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.',
    link: 'https://nesterverify.com',
    imageUrl:
      'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
    type: ['project'],
    technologies: ['Vue', 'Vuex', 'Javascript', 'CSS3 & Sass'],
  },

  {
    title: 'Lentora by NgCareers',
    description: 'Learn a New Skill, Boost Your Career',
    about:
      'Learn Anything at Your Own Pace. Get lifetime access to hundreds of top-quality professional and vocational courses/programs. Learn at your own pace. Improve your career and business growth with relevant skills.',
    link: 'https://www.jobberman.com/discover/jobberman-nigeria-acquires-ngcareers-com',
    imageUrl:
      'https://i.ibb.co/ykQmbVw/Screen-Shot-2019-11-23-at-2-20-17-PM.png',
    type: ['others', 'project'],
    technologies: ['Nuxt', 'Vue', 'Javascript', 'Vuex', 'A11y'],
  },

  {
    title: 'Truegiven',
    description: 'Addressing current and future workforce needs.',
    about:
      'True Given helps people gain more control of their finances by connecting people to organizations providing direct and immediate assistance to families and individuals who desperately require a modest helping hand. Our specific focus is how the aid will benefit children, older adults, and other vulnerable members of our community. True Given offers peace of mind.',
    link: 'https://truegiven.com',
    imageUrl:
      'https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png',
    type: ['project'],
    technologies: ['HTML', 'CSS', 'Javascript', 'Compiled HTML'],
  },

  {
    title: 'Liveizy',
    description: 'Manage all your properties in one place.',
    about:
      'We reduce the cost of living and help you meet your most important living expectations by increasing easy access to all the necessary resources needed to improve living standards.',
    link: 'https://techpoint.africa/2020/08/17/liveizy-feature/',
    imageUrl:
      'https://i.ibb.co/PxwbV5m/Screen-Shot-2019-11-24-at-11-36-52-PM-1.png',
    type: ['others', 'project'],
    technologies: ['HTML', '11ty', 'Javascript', 'CSS & Sass'],
  },

  {
    title: 'Nex AI',
    description: 'The new way to tell stories',
    about:
      'NEX builds new tools for digital media creation. We’re on a mission to augment human storytelling-- try our newest AI tools now!',
    link: 'https://nex.art',
    imageUrl:
      'https://i.ibb.co/GtLWcwC/Screenshot-2024-01-16-at-7-55-21-PM.png',
    type: ['others', 'project'],
    technologies: ['Nextjs (React)', 'Javascript'],
  },
  {
    title: 'Eze Wholesale',
    description: 'Buy & sell iPhones in wholesale quantities.',
    link: 'https://ezewholesale.com',
    about:
      'Eze connects electronics traders from all around the globe, enabling access to invaluable resources that improve the day-to-day lives of people everywhere.',
    imageUrl:
      'https://i.ibb.co/Kyn18dm/Screenshot-2021-11-30-at-3-08-36-AM.png',
    type: ['project', 'others'],
    technologies: ['Nextjs (React)', 'AWS', 'D3', 'Javascript', 'MobX'],
  },

  {
    title: 'Bellza',
    description:
      'Discover & access to on-demand Information leisure and utility over the world from your chrome.',
    about:
      'Bellza, a chrome extension, will open up an era of high customization for the new tab pages of your Chrome and Firefox. Common websites can be added to Speed Dial in one step and displayed with icons; the customizable search engines, select HD wallpapers and widgets like Weather, Notes, Bookmarks, To-do List, History, Gmail Notifier, etc. can increase your productivity.',
    link: 'https://chrome.google.com/webstore/detail/bellza-always-informed/fhnmdmmmdclgjnjlbodahlcmabjnngde',
    imageUrl: 'https://i.ibb.co/W6859mc/ezgif-com-optimize.gif',
    type: ['tools'],
    technologies: ['Vue', 'javascript', 'HTML & CSS'],
  },

  {
    title: 'DrugStoc',
    description: 'Empowering Pharmacies Toward a Healthier Africa.',
    link: 'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    about:
      'Drugstoc makes use of unmatched technology, supply chain innovation, financial solutions, and product knowledge to unlock access to medications in emerging Economies.',
    imageUrl:
      'https://i.ibb.co/mC4z0c4/Screenshot-2021-11-30-at-3-12-33-AM.png',
    type: ['project', 'others'],
    technologies: ['Nextjs (React)', 'Javascript'],
  },

  {
    title: 'Developp by Tunga',
    description: 'Test engineers on their skills and competence.',
    link: 'https://testing.tunga.io',
    about: 'Test Engineers on their skills and competence.',
    imageUrl:
      'https://i.ibb.co/PQXmbwK/Screenshot-2021-11-30-at-3-22-24-AM.png',
    type: ['project', 'others'],
    technologies: ['React', 'Redux', 'Javascript'],
  },

  {
    title: '3D Visuals with Three.js and CSS Distortion',
    description:
      'Exploring the intersection of Three.js and CSS to create dynamic, interactive 3D visuals with stunning distortion effects.',
    about:
      'This project delves into the powerful combination of Three.js and CSS to create immersive 3D visual experiences. By harnessing Three.js for rendering and incorporating CSS distortion techniques, the project demonstrates innovative ways to manipulate visuals, offering a unique blend of art and interactivity.',
    link: 'https://github.com/Hanorah',
    github: 'https://github.com/Hanorah',
    imageUrl: 'https://i.ibb.co/7vSdSk0/20241005155058.gif',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup'],
  },
  {
    title: 'Unit Css',
    description: '💪 A CLI tool to convert units in your CSS file',
    about:
      'Unitcss A CLI tool to convert CSS units in your file helps you swiftly convert units/measurements in your file or folders. Using unitcss on files provides an easy way of changing measurement from px to rem or rem to px or even px to em with only a few commands in your terminal.',
    link: 'https://www.npmjs.com/package/unitcss',
    github: 'https://github.com/Hanorah',
    imageUrl: 'https://i.ibb.co/X2f8nWf/unitcsss.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'CLI'],
  },

  {
    title: 'Overstateful',
    description:
      'A small state management with less setup and super scalability in your react app.',
    about:
      'A small state management with less setup and super scalability in your react app. with over-stateful, all you need is this, less documentation required to get you going',
    link: 'https://www.npmjs.com/package/over-stateful',
    github: 'https://github.com/Hanorah/',
    imageUrl:
      'https://i.ibb.co/YT6fXLB/Screenshot-2020-05-04-at-4-41-05-AM.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },
  {
    title: 'Broadstate',
    about:
      'Have you ever tried to move the value of a state from a child to the parent without using large state management tools like Redux, Mobx e.t.c? Broadstate is an easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
    description:
      'Easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
    link: 'https://www.npmjs.com/package/broad-state',
    github: 'https://github.com/Hanorah/',
    imageUrl: 'https://i.ibb.co/GVdt9Jq/Dribbble-Shot-HD-3broad.png',
    type: ['open-source', 'tools'],
    technologies: ['Javascript', 'Rollup', 'React'],
  },

  {
    title: 'Use Responsive Query',
    about:
      ' An extremely powerful but easy-to-use hook for listening to media events in React. URQ creates an experience of a javascript-like reactive accommodation for your react application.',
    description:
      'An extremely powerful but easy to use hook for listening to media events in react.',
    link: 'https://www.npmjs.com/package/use-responsive-query',
    github: 'https://github.com/Hanorah/',
    imageUrl: 'https://i.ibb.co/CPK4YzL/Group-38dd.png',
    type: ['open-source', 'tools'],
    technologies: ['Typescript', 'Rollup', 'React'],
  },
];

export default PROJECTS_DATA;
