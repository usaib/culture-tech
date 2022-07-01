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
      "https://www.ipr.edu/wp-content/uploads/2020/02/music-studio-1024x576.jpg",
    heading: "Virtual Studio - Dance Pakistan",
    description: "Virtual Studio content of Pakistan",
    duration: "3mins",
    videoId: "cN1vniebhzM",
  },
];

export const allDanceDocs = [
  {
    category: "Wedding Dances",
    data: [
      {
        subCtg: "",
        payload: [
          {
            videoId: "a-y-BKLBy2g",
            heading:
              "Lehanga | Wedding Dance | Easy Steps For Girls | Choreography Step2Step Dance Studio | Girls Dance",
            description:
              "Hii Guys! Students Of Step2Step Dance Studio Presenting A Quick Choreography & Dance Video On Song Lehanga Sung By Jass Manak",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "y8VmIV_BCS8",
            heading:
              "Top 21 Wedding Dance Choreography of 2021 | Duet Dance Studio Online Program",
            description:
              "Top 21 Wedding Dance Choreography of 2021 | Duet Dance Studio Online Program",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "cN1vniebhzM",
            heading:
              "Waltz No.2 - Dmitri Shostakovich | Andre Rieu | Second Waltz | Wedding Dance Choreography",
            description:
              "Dance routine to: Second Waltz - Shostakovich | Andre Rieu.  A beautiful, romantic choreography based on Vinnese Waltz",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "N4tUOh4Mvts",
            heading:
              "The Ultimate Pakistani Wedding Dance Tutorial | Noori X Balle Balle | Mashion | Mashaadi 2019",
            description:
              "We got the most popular dance choreographer in Karachi, Zahid Hussain, to teach Roha Qazi how to groove on the most loved songs this wedding season. Watch the full video for the complete tutorial and learn his best tips along the way! ",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
    ],
  },

  {
    category: "Dance Studio",
    data: [
      {
        subCtg: "",
        payload: [
          {
            videoId: "W1z4zDlpxRM",
            heading:
              "MAKHNA - Bollywood Dance |Shivani Bhagwan & Chaya Kumar| Madhuri Dixit, Amitabh Bachchan, Govinda",
            description:
              "To learn this dance to MAKHNA via our Online Dance Tutorials taught by Shivani & Chaya ",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "xJ5ct84-nmw",
            heading:
              "GHUNGROO - BOLLYWOOD DANCE | HRITHIK ROSHAN | SHIVANI AND CHAYA CHOREOGRAPHY #BFUNK #BOLLYFUNK",
            description:
              "To learn this dance to GHUNGROO via our Online Class taught by Shivani & Chaya",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "zUDXj8REpAI",
            heading:
              "Worth it - Fifth Harmony ft.Kid Ink / May J Lee Choreography",
            description:
              "May J Lee teaches choreography to Worth it by Fifth Harmony (feat.Kid Ink).",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
          {
            videoId: "0-gNHICx8ik",
            heading:
              "Raataan Lambiyan - Class Video | Deepak Tulsyan Dance Choreography | G M Dance Centre",
            description:
              "Raataan Lambiyan - Class Video | Deepak Tulsyan Dance Choreography | G M Dance Centre",
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
          },
        ],
      },
    ],
  },
];
