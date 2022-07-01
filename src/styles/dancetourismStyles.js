import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    "& body": {
      backgroundColor: "#1b1b1b !important",
    },
    ctg: {
      textAlign: "left ",
      color: "#fff",
      letterSpacing: 0.5,
      fontWeight: "600 !important",
      fontFamily: "Poppins !important",
      fontSize: "1.3rem  !important",
    },
    ctgExp: {
      color: "#fff !important",
      letterSpacing: 0.5,
      textDecoration: "none !important",
      fontWeight: "600",
      fontFamily: "Poppins",
      marginLeft: "0.7rem !important",
      transform: "translateX(-10px)",
      transition: "all 0.3s",
      opacity: 0,
      textTransform: "capitalize",
      fontSize: "0.85rem",
    },
    docCard: {
      height: "120px",
      maxWidth: "100%",
      position: "relative",
      backgroundColor: "transparent !important",
      transition: "all 0.5s !important",
      margin: "20px auto 20px 0px",
      boxShadow: "none",
      overflow: "inherit !important",
      "&:hover,&:focus": {
        transform: "scale(1.3)",
        zIndex: 1,
        boxShadow: "-1px 5px 10px 1px rgba(7,7,7,0.5) !important",
        "& div:nth-child(2)": {
          display: "block",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
        "& img": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        "& iframe": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
      "& img": {
        borderRadius: 4,
        height: "100%",
        objectFit: "cover",
      },
      "& iframe": {
        borderRadius: 4,
        height: "100%",
        objectFit: "cover",
      },
    },
    docContent: {
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; !important",
      borderRadius: 4,
      display: "none",
      position: "absolute",
      width: "100%",
      backgroundColor: "#1b1b1b",
    },
    docAct: {
      color: "#9b9b9b !important",
      border: "1px solid !important",
      borderRadius: "15px !important",
      height: "30px !important",
      width: "30px !important",
      minWidth: "30px !important",
      padding: "0 !important",
      "&:hover": {
        color: "#fff !important",
      },
    },
    docDes: {
      color: "#fff",
      letterSpacing: "0.3px !important",
      fontSize: "0.65rem !important",
      display: " -webkit-box",
      WebkitLineClamp: "4",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    arrowLeft: {
      position: "absolute",
      top: "27px",
      bottom: "0",
      margin: "auto",
      zIndex: 1,
      height: "120px !important",
      width: "50px !important",
      backgroundColor: "rgba(0,0,0,0.3)",
      borderRadius: "5px",
      cursor: "pointer",
    },
    arrowRight: {
      position: "absolute",
      top: "27px",
      bottom: "0",
      margin: "auto",
      zIndex: 1,
      height: "120px !important",
      width: "50px !important",
      backgroundColor: "rgba(0,0,0,0.3)",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
});
export const featuredVideos = [
  {
    image:
      "https://i.pinimg.com/564x/6b/63/cf/6b63cfb93428789236f2b63d991ed56e--pakistani-dance.jpg",
    heading: "Cultural Dance - KPK, Pakistan",
    description: "Dancing Festival in KHyber Pakhrunkuwa Pakistan",
    duration: "3mins",
    videoId: "hY3V3SWgASg   ",
  },
];

export const allDocs = [
  {
    category: "National",
    data: [
      {
        subCtg: "",
        payload: [
          {
            videoId: "7EP1Yk0rNnA",
            heading: "Beijing Night Pakistani cultural dance",
            description:
              "Beijing Night is the annual function in Beijing Normal university where students from different countries present there dance, cultural talent on a platform and it is live broadcasted on China TV.",
            image:
              "https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20160805/a41f726a8538190ea06804.jpg",
          },

          {
            videoId: "12ogr54VhUM",
            heading: "Top 10 traditional dances in the world",
            description: "Top 10 traditional dances in the world",
            image:
              "https://www.starquestdance.com/wp/wp-content/uploads/2018/05/dancecompetition8.png",
          },

          {
            videoId: "0v4Dzz9PsIg",
            heading:
              "Dances of india - classical and folk dances of india all states",
            description:
              "Classical and Folk dances of india state wise with images.",
            image: "https://kanislife.com/wp-content/uploads/2019/03/1-1.jpg",
          },
        ],
      },
    ],
  },
  {
    category: "Regional",
    data: [
      {
        subCtg: "punjab",
        payload: [
          {
            videoId: "4fW7OitGawQ",
            heading:
              "Complete Documentary Of Punjab, Pakistan In Urdu And Hindi",
            description: "history of Punjab",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "GteI3IsT6R0",
            heading: "PUNJAB CULTURE & TRADITIONS | #PUNJAB DOCUMENTARY",
            description: "punjab cultures",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "h035UUVK9Pc",
            heading: "Documentary about Jhoomer (punjabi folk dance)",
            description:
              "Short documentary on the origins and current state of the Punjabi folk dance Jhummar (Jhoomer) featuring DAV College Jhoomer Team.",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
      {
        subCtg: "sindh",
        payload: [
          {
            videoId: "NsrmxALhkqY",
            heading:
              "THESPIANZ FOLK FESTIVAL | SINDH CULTURAL DANCE PERFORMANCE | DAY 1 |",
            description:
              "THIS BEAUTIFUL SINDHI CULTURAL PERFORMANCE SHOWS THE IMPORTANCE OF HISTORICAL VALUES OF SINDH. WE BELIEVE THIS FESTIVAL WAS FAMOUS FOR ONE OF THE LARGEST GATHERING OF UNIQUE ARTISTS AT ONE PLACE. IN ORDER TO CELEBRATE PEACE",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "CNw7prveRoQ",
            heading: "Saraiki jhumar in Arid University by Saraiki Students",
            description: "Saraiki culture jhumar",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "taUA69YoVLA",
            heading:
              "Sindhi Dance Performance by Sanam Studios at Atlanta Dogwood Festiva",
            description:
              "Sanam Studios dancers perform a Sindhi dance at the Atlanta Dogwood Festival, 2015, as part of the Pakistani American Cultural Exchange of Georgia.  They performed dances from all the four provinces of Pakistan.  This dance is from the Sindh region. ",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
      {
        subCtg: "balochistan",
        payload: [
          {
            videoId: "2-GHA-pGGZo",
            heading:
              "#Balochistan #Barkhan #Culture Khetran Baloch CULTURE TALWAR BAZI",
            description:
              "Baloch Sword Dance (زام دریس) a rare traditional dance of Baloch tribes.Arab Baloch sword dances (raqs al-saïf) evolved out of sword fighting between men, in both Egypt and Turkey. There was even a time when sword dancing was banned by the sultan during Ottoman rule, as it was believed that dancers, who took swords from soldiers and pretended to them at the end of the performances, collected the swords to begin a resistance against the army",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "26QssICydNc",
            heading: "Balochistan",
            description: "Balochistan documentary",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "jGRWdgeQZhI",
            heading:
              "Baloch culture, people, traditions and places (in english)",
            description:
              "Information on baloch province of pakistan. Baloch culture, balochi people, balochi food, balochi cities and other information.",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
      {
        subCtg: "kashmir",
        payload: [
          {
            videoId: "p9ii1tCBuco",
            heading:
              "Kashmir Valley (Paradise), Azad Jammu and Kashmir, Pakistan (Full Documentary)",
            description:
              "Azad #Jammu and #Kashmir, abbreviated as #AJK and commonly known as Azad Kashmir, is a region administered by Pakistan as a nominally self-governing jurisdiction, and constituting the territory has a parliamentary form of government modelled after the Westminster system, with its capital located at #Muzaffarabad",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "DA_GBNw43FQ",
            heading: "Documentary on Bhand Pather Folk Theatre of Kashmir",
            description: "Folk Theatre Art Form of Kashmir",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "HYPxFEGI0qk",
            heading:
              "KASHMIR - Heaven On Earth | Full Urdu Documentary - Discover Pakistan TV",
            description:
              "Azad Jammu and Kashmir, abbreviated as AJK and colloquially referred to as simply Azad Kashmir, is a region administered by Pakistan.",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
      {
        subCtg: "gilgit",
        payload: [
          {
            videoId: "6SMWv18EGoY",
            heading: "Gilgit Song balti dance Nauroz celebrations! Shina Song",
            description: "Gilgit song Dance",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "5v2qPpojdak",
            heading:
              "Rambo Chacha's Dance At Islamabad Lok Virsa Dance By Old Man karay karay Salman Paris shina Dacne..",
            description:
              "Rambo Chacha's Dance At Islamabad Lok Virsa Dance By Old Man karay karay Salman Paris shina Dacne.",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "Xxcf9LhIsGY",
            heading:
              "Travel to Gilgit Baltistan | Documentry History about GilgitBaltistan In Urdu & Hindi | گلگت کی سیر",
            description:
              "Travel to Gilgit Baltistan | Documentry  History about GilgitBaltistan In Urdu & Hindi | گلگت کی سیر",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
      {
        subCtg: "kpk",
        payload: [
          {
            videoId: "PF4vDKnZIe4",
            heading:
              "Pashtuns Culture Documentary # Great Rules Of Pashtuns Culture",
            description: "pashtun culture",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "hY3V3SWgASg",
            heading:
              "KPK Performance/ Pakistan Day 2019 | Khyber Pakhtunkhwa | Prepared by Mrs.Qazi Naeem | Q Familia",
            description:
              "Prepared by Mrs.Qazi Naeem, Organised by Sohni Dharti AKC, Qatar... Pakistan Day 2019",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "NDzWkGXfC6Q",
            heading:
              "Explore Unseen Tribal Belt of Pakistan - Merged Districts KPK - EX FATA | By Aqeel Meer",
            description:
              "Showcasing the hidden beauty of tribal belt alongside afghan border, recently merged tribal areas Bajaur, Khyber, Waziristan, Orakzai and Kurram with Khyber Pakhtonkhwa previously known as FATA.",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
    ],
  },

  {
    category: "Mountainous",
    data: [
      {
        subCtg: "",
        payload: [
          {
            videoId: "MYDsjJivU8s",
            heading:
              "BEAUTIFUL Pakistani Wedding in the Mountains (Super Rare)",
            description:
              "Over a year ago, I was invited by a Wakhi family I befriended in the North of Pakistan to attend their eldest son's wedding... and make a film about it. It was a true honour, and rare opportunity to take part in the wedding celebrations of an ethnic community that lives in one of the remotest parts of Asia.",
            image: "https://i.ytimg.com/vi/MYDsjJivU8s/maxresdefault.jpg",
          },
          {
            videoId: "9uheTLX6oho",
            heading:
              "Dancing with Snow (2017) - A Short Documentary Film by Wajahat Malik",
            description:
              "This short documentary film by #WajahatMalik is set in the high #Karakoram mountains of #Pakistan, the valley of #Naltar is where the sport of skiing took root in the country. Dancing with Snow tells the interesting tale from the days of wooden skis in 1958 to the date when the sport has progressed by leaps and bounds in Pakistan. The film premiered at the 3rd Pakistan International Mountain Film Festival in 2017. ",
            image: "https://i.ytimg.com/vi/9uheTLX6oho/hqdefault.jpg",
          },
          {
            videoId: "8lhisnQOau0",
            heading: "The Mountains of Pakistan",
            description:
              "The first time-lapse project of my most beautiful #Pakistan. Hope you like it. Feedback is always appreciated.",
            image:
              "http://pakistantravelplaces.com/wp-content/uploads/2017/02/k2-death-2014_h.jpg",
          },
        ],
      },
    ],
  },

  {
    category: "Tribal Dances",
    data: [
      {
        subCtg: "",
        payload: [
          {
            videoId: "7IqHU9G3oRU",
            heading:
              "Kalashi Girls Beautiful Dance | Kalash Girls Dancing | Kalash Function Dance",
            description: "Kalash Beautiful Dancing",
            image: "https://i.dawn.com/primary/2018/06/5b23d99e65ff6.jpg",
          },
          {
            videoId: "bjom5gUTI6I",
            heading: "Documentary on Sindh's indigenous tribe Rabari in urdu",
            description:
              "Watch here the the documentary on indigenous tribe Rebari.",
            image:
              "https://media.gettyimages.com/photos/rebari-women-carry-water-pots-on-their-heads-rebariraika-are-a-picture-id170966611?s=612x612",
          },
          {
            videoId: "s94ChMhxYeo",
            heading: "Documentary on Sindhi indigenous tribe Koochra in Urdu",
            description:
              "Documentary on Sindhi indigenous tribe Koochra in Urdu",
            image: "https://i.ytimg.com/vi/s94ChMhxYeo/maxresdefault.jpg",
          },
        ],
      },
    ],
  },

  {
    category: "Tour on Demand",
    data: [
      {
        subCtg: "",
        payload: [
          {
            videoId: "EeT_0AXvZmk",
            heading:
              "Studio Tour #vickypateldance | New Dance Studio | Vicky Patel Choreography",
            description:
              "We Are Uploading A Dance Video With The Tutorial On Hindi Bollywood Song. So You Can Learn Dance Step By Step ",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "Zn6yKRSPGhg",
            heading:
              "Cake Shop Tour In UK //Why Egg Free Cake In Demand /CakeBake",
            description: "Cake Shop Tour In UK Why Egg Free Cake In Demand",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "EnyzXbZY3-I",
            heading: "Middlesex University on demand Campus Tour",
            description:
              "In this pre-recorded campus tour you can hear from Emily a film student at MDX as she guides you around the campus.",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
    ],
  },
];
