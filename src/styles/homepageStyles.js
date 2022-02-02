import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    header: {
      backgroundColor: "rgba(255,255,255,0.95) !Important",
    },
    toolbar: {
      justifyContent: "center",
    },
    Logo: {
      fontFamily: "The Nautigal,cursive !important",
      fontSize: theme.typography.text_xl,
      letterSpacing: "1.05px !Important",
      color: theme.palette.secondary.main,
    },
    leftHead: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      marginLeft: "80px",
      maxWidth: "450px",
      marginRight: "10px",
      [theme.breakpoints.down("lg")]: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
      },
    },
    headingOne: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.text_xl,
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: "20px !important",
      letterSpacing: "1.15px !important",
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.text_lg,
        "&:before": {
          top: "22px !important",
        },
      },
      "&:before": {
        height: "5px",
        width: "58px",
        backgroundColor: "#D16002 !important",
        borderRadius: "10px",
        position: "absolute",
        top: "29px",
        left: "-80px",
        content: "''",
      },
    },
    paragraph: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.1em !Important",
      color: theme.palette.primary.mutedText,
      fontWeight: theme.typography.fontWeightRegular,
      textAlign: "left",
      letterSpacing: "1px !important",
      lineHeight: "1.85 !important",
      marginBottom: "20px !important",
    },
    homeBtn: {
      backgroundColor: theme.palette.secondary.dark,
      color: "#fff",
      borderRadius: "10px !important",
      minWidth: "170px",
      fontSize: "1em !important",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: "20px !important",
      marginBottom: "20px !important",
      padding: "13px 20px !important",
    },

    carouselImage: {
      backgroundRepeat: "no-repeat !important",
      height: "500px",
      objectFit: "cover",
      maxWidth: "650px",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "#f4f4f4 0px 2px 25px  !important",
      borderRadius: "15px !important",
      backgroundSize: "cover !important",
      opacity: "0.88",
    },
    cardsContainer: {
      justifyContent: "space-around",
      [theme.breakpoints.down("lg")]: {
        justifyContent: "center",
      },
    },
    card: {
      borderRadius: "20px !important",
      marginTop: "10px",
      // backgroundColor: "#e4e4e4 !important",
      width: "200px",
      maxWidth: "200px",
      padding: "20px",
      backgroundColor: "#fff !important",
      transitionProperty: "all !Important",
      transitionDuration: "0.3s",
      transitionTimingFunction: "ease-in-out",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      whiteSpace: "wrap",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        transform: "translateY(-35px)",
      },
    },
    // backCard: {
    //   position: "absolute",
    //   bottom: "10px",
    //   zIndex: -1,
    //   left: "2px",
    //   backgroundColor: "#D16002 !important",
    //   height: "50px",
    //   width: "50px",
    //   borderTopLeftRadius: "25px !important",
    //   borderBottomRightRadius: "3px !important",
    //   borderBottomLeftRadius: "0px !important",
    //   borderTopRightRadius: "0px !important",
    // },
    cardTitle: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.text_md,
      color: theme.palette.primary.textColor,
      textAlign: "center",
      display: " -webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    cardDes: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "0.78em !important",
      color: theme.palette.primary.textColor,
      textAlign: "center",
      display: " -webkit-box",
      WebkitLineClamp: "4",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    docCard: {
      maxWidth: "300px",
      height: "210px",
      borderRadius: "15px !important",
      padding: "1.5rem",
      marginTop: "20px",
      backgroundRepeat: "no-repeat !important",
      backgroundSize: "cover !important",
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      transition: "all 0.4s ease-out !important",
      "&:before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        display: " block",
        width: "100%",
        height: "100%",
        borderRadius: "15px",
        background: "rgba(0,0,0, 0.6) !important",
        zIndex: "2",
        transition: "all 0.3s ease-in-out",
        opacity: "0",
      },
      "&:hover": {
        transform: "translateY(10px)",
        "&:before": {
          opacity: "1",
        },
        "& $docInfo": {
          opacity: "1",
          transform: " translateY(0px)",
        },
      },
      [theme.breakpoints.down("lg")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    docInfo: {
      position: "relative",
      zIndex: "3",
      color: "white",
      opacity: "0",
      transform: "translateY(20px)",
      transition: "all 0.3s ease-in-out",
    },
    blogCard: {
      height: "500px",
      width: "350px",
      maxWidth: "400px",
      marginTop: "20px",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px !important",
      borderRadius: "15px !important",
      padding: "1.5rem",
      backgroundRepeat: "no-repeat !important",
      backgroundSize: "cover !important",
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      backgroundColor: "#22222231 !important",
      backgroundBlendMode: "darken",
      transition: theme.transitions.create(["background-color", "transform"], {
        duration: theme.transitions.duration.standard,
      }),
      "&:hover": {
        backgroundColor: "#2222224f !important",

        "& $blogInfo": {
          transform: "translate(-50%,-30px) !important",
        },
      },

      [theme.breakpoints.down("lg")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    blogInfo: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#FFF",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      borderRadius: "15px !important",
      height: "140px",
      width: "270px",
      padding: "0.8em 1.5em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      transition: "all 0.3s ease-in-out",
      fontFamily: theme.typography.fontFamily,
      cursor: "pointer",
    },
    podSec: {
      height: "250px",
      width: "300px",
      marginTop: "30px",
      background: `url(images/mic.png) no-repeat transparent`,
      backgroundSize: "cover",
      transform: "rotate(55deg)",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    podCard: {
      padding: "1.5em 1em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "320px",
      width: "270px",
      marginTop: "60px",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      borderRadius: "15px !important",
      [theme.breakpoints.down("md")]: {
        margin: "10px auto",
      },
    },
    margin: {
      [theme.breakpoints.down("md")]: {
        margin: "50px 0",
      },
    },
    priceCard: {
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Open Sans",
      borderBottom: "none",
      padding: "25px 50px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    planfeature: {
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "1.5",
      padding: " 15px 0 !important",
      borderTop: "1px solid #e1f1ff",
      display: "block !important",
      textAlign: "center !important",
    },
    planSubBtn: {
      border: "1px solid #9dd1ff !important",
      borderRadius: "10px !important",
      display: "inline-block ",
      padding: "15px 35px !important",
      margin: "25px auto !important",
      fontWeight: "700 !important",
      fontSize: "16px",
    },
    footerLinks: {
      position: "relative",
      [theme.breakpoints.down("md")]: {
        left: "-13px",
      },
      "&:before": {
        content: "''",
        height: "80%",
        position: "absolute",
        left: "-1.5px",
        top: "20px",
        backgroundColor: theme.palette.secondary.dark,
        width: "1px",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      "& li": {
        lineHeight: "40px",
        fontWeight: theme.typography.fontWeightMedium,
        fontFamily: theme.typography.fontFamily,
        textTransform: "capitalize",
        textDecoration: "none",
        "& a": {
          textDecoration: "none",
          color: theme.palette.primary.mutedText,
        },
      },
    },
  };
});
export const carouselImages = ["images/image.png", "images/image5.jpg", "images/image4.jpg"];
export const cultureImages = ["images/culture1.jpg", "images/culture2.jpg", "images/culture3.jpg"];
export const blogCards = [
  {
    description:
      "Engrossed listening. Park gate sell they west hard for the. Engrossed listening. Park gate sell they west hard for the actual result",
    image: "images/blogCardImg2.jpg",
    title: "Travel",
    PublishDate: "March 12, 2020",
  },
  {
    description:
      "Engrossed listening. Park gate sell they west hard for the. Engrossed listening. Park gate sell they west hard for the actual result",
    image: "images/blogCardImg3.jpg",
    title: "Business",
    PublishDate: "March 12, 2020",
  },
  {
    description:
      "Engrossed listening. Park gate sell they west hard for the. Engrossed listening. Park gate sell they west hard for the actual result",
    image: "images/blogCardImg1.jpg",
    title: "Photography",
    PublishDate: "March 12, 2020",
  },
];

export const Documentaries = [
  {
    title: "Skardu",
    image: "images/skarduImage.jpg",
    description:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy",
  },
  {
    title: "Musics",
    image: 'images/sitar.jpg',
    description:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy",
  },
  {
    title: "Kachura Lake",
    image: "images/kachuraImage.jpg",
    description:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy",
  },

  {
    title: "History",
    image: "images/AeroplaneImage.jpg",
    description:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy",
  },
  {
    title: "Adventure",
    image: "images/horse.jpg",
    description:
      "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy",
  },
];

export const cards = [
  {
    title: "Documentary",
    description: "Engrossed listening. Park gate sell they west hard for the",
    image: "images/documentary.png",
  },
  {
    title: "Courses",
    description: "Engrossed listening. Park gate sell they west hard for the",
    image: "images/Course.png",
  },
  {
    title: "Live Streaming",
    description: "Engrossed listening. Park gate sell they west hard for the",
    image: 'images/live.png',
  },
  {
    title: "Podcasts",
    description: "Engrossed listening. Park gate sell they west hard for the",
    image: 'images/podcaster.png',
  },
  {
    title: "Tours",
    description: "Engrossed listening. Park gate sell they west hard for the",
    image: 'images/flight.png',
  },
];
export const podcards = [
  {
    author: "Gabe William",
    description: "Engrossed listening. Park gate sell they west hard for the",
    image: 'images/lollipop.jpg',
  },
  {
    author: "Gabe William",
    description: "Engrossed listening Park gate engrossed listening Park?",
    image: 'images/cone.jpg',
  },
  {
    author: "Gabe William",
    description: "Engrossed listening Park gate engrossed listening Park?",
    image: 'images/cherry.jpg',
  },
  {
    author: "Gabe William",
    description: "Engrossed listening Park gate engrossed listening Park?",
    image: 'images/flower.jpg',
  },
  {
    author: "Gabe William",
    description: "Engrossed listening Park gate engrossed listening Park?",
    image: 'images/guava.jpg',
  },
  {
    author: "Gabe William",
    description: "Engrossed listening Park gate engrossed listening Park?",
    image: 'images/orange.jpg',
  },
];

export const pricingCards = [
  {
    planName: "Personal",
    planIcon: 'images/icon1.png',
    planPrice: "Free",
    planFeatures: ["Custom Domains", "Sleeps after 30 mins of inactivity"],
    planBtn: "Sign up",
  },

  {
    planName: "Small Team",
    planIcon: "images/icon2.png",
    planPrice: "$150",
    planFeatures: ["NEVER SLEEPS", "MULTIPLE WORKERS FOR MORE POWERFUL APPS"],
    planBtn: "Free trial",
  },
  {
    planName: "Enterprise",
    planIcon: "images/icon3.png",
    planPrice: "$400",
    planFeatures: ["DEDICATED", "SIMPLE HORIZONTAL SCALABILITY"],
    planBtn: "Sign up",
  },
];

export const footerLinks = [
  { secTitle: "About", Links: ["Our story", "Teams", "Leadership"] },
  { secTitle: "Research", Links: ["Help/FAQ", "Affiliates", "Press"] },
  {
    secTitle: "Impact",
    Links: ["Real World Impacts", "Significant breakthroughs"],
  },
  { secTitle: "Blog", Links: ["Research", "News"] },
];
