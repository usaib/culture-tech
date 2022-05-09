import { makeStyles } from "@mui/styles";
import HeroImage from "../assets/heroImage.jpeg";

export const useStyles = makeStyles((theme) => {
  return {
    centerContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      maxWidth: "550px !important",
      margin: "30px 10px",
      [theme.breakpoints.down("md")]: {
        margin: "30px auto",
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
      },
    },
    paragraph: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.1em !Important",
      color: theme.palette.primary.mutedText,
      fontWeight: theme.typography.fontWeightRegular,
      fontWeight: "300",
      textAlign: "left",
      letterSpacing: "1px !important",
      lineHeight: "1.85 !important",
      marginBottom: "20px !important",
    },
    homeBtn: {
      backgroundColor: theme.palette.secondary.dark,
      color: "#fff",
      borderRadius: "25px !important",
      minWidth: "170px",
      boxShadow: "rgb(209 96 3 / 50%) 0px 20px 30px -10px !important",
      fontSize: "1em !important",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      margin: 0,
      marginRight: "30px !important",
      padding: "10px 20px !important",
    },
    heroImage: {
      backgroundRepeat: "no-repeat !important",
      height: "500px",
      objectFit: "cover",
      maxWidth: "650px",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "none  !important",
      borderRadius: "0px !important",
      backgroundSize: "cover !important",
      backgroundImage: `url(${HeroImage})`,
    },
    filterBtn: {
      marginRight: "25px !important",
      border: "1px solid #d9d9d9 !important",
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down("md")]: {
        marginBottom: "12px !important",
      },
    },
    active: {
      border: "1px solid #d16003 !important",
      color: "#d16003 !important",
    },
    contentCard: {
      boxShadow: "#d160031c 0px 8px 24px",
      backgroundColor: "#fff",
      height: "auto",
      padding: "8px",
      paddingBottom: "15px",
      width: "300px",
      borderRadius: "10px",
      marginTop: "30px !important",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    ctg: {
      textAlign: "left ",
      color: theme.palette.primary.main,
      letterSpacing: 0.5,
      fontFamily: theme.typography.fontFamily,
      fontWeight: "600 !important",
      fontSize: "1.5rem  !important",
    },
    thumbnail: {
      marginBottom: "10px",
    },
    playBtn: {
      marginRight: "10px",
      backgroundColor: "#D16003",
      color: "#fff",
      borderRadius: "50%",
      boxShadow: "rgb(209 96 3 / 50%) 0px 20px 30px -10px ",
      height: "1.5em !important",
      width: "1.5em !important",
      fontSize: "2rem !important",
      paddingTop: "6px",
      paddingBottom: "6px",
    },
    date: {
      color: theme.palette.secondary.dark,
      marginTop: "8px !important",
      fontSize: "0.8rem !important",
      fontWeight: "400 !important",
      position: "relative",
      paddingLeft: "15px",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 7,
        left: 0,
        backgroundColor: theme.palette.secondary.dark,
        height: "6px",
        width: "6px",
        borderRadius: "4px",
      },
    },
  };
});

export const healthandfitness = [
  {
    category: "Yoga",
    subCtg: "Yoga with Adriene",
    payload: [
      {
        image: "https://i.ytimg.com/vi/516wWsO7Rzs/maxresdefault.jpg",
        heading: "Yoga For Period Relief | How To Reduce Menstrual Pain",
        videoId: "516wWsO7Rzs",
        date: "May 24, 2019",
      },
      {
        image: "https://i.ytimg.com/vi/BFaXfQpxnps/maxresdefault.jpg",
        heading: "Yoga For Chronic Pain",
        videoId: "BFaXfQpxnps",
        date: "Nov 3, 2019",
      },
      {
        image: "https://i.ytimg.com/vi/DQew7AiwPWw/maxresdefault.jpg",
        heading: "Yoga For Acid Reflux - Embrace It!",
        videoId: "DQew7AiwPWw",
        date: "Aug 8, 2013",
      },
      {
        image: "https://i.ytimg.com/vi/IvAx7q2LKqk/maxresdefault.jpg",
        heading: "Yoga for Bloating, Digestion, Ulcerative Colitis, IBD & IBS",
        videoId: "IvAx7q2LKqk",
        date: "Dec 19, 2014",
      },
      {
        image: "https://i.ytimg.com/vi/XN3JB67-a_k/maxresdefault.jpg",
        heading: "Brain Body Balance",
        videoId: "XN3JB67-a_k",
        date: "Dec 6, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/icfwMWYDeac/maxresdefault.jpg",
        heading: "Yoga To Shift Perspective | 20 Minute Yoga Flow",
        videoId: "icfwMWYDeac",
        date: "Jul 4, 2020",
      },
    ],
  },
  {
    category: "Yoga",
    subCtg: "Yogi Haider",
    payload: [
      {
        image: "https://i.ytimg.com/vi/cWajd-aDxm0/maxresdefault.jpg",
        heading: "Yoga & Meditation in Ayub National Park Rawalpindi",
        videoId: "DvYh28d0svE",
        date: "Dec 3, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/O3cz76b8W2A/maxresdefault.jpg",
        heading: "Daily Yoga & Meditation in Ayub National Park Rawalpindi",
        videoId: "O3cz76b8W2A",
        date: "Nov 18, 2021",
      },

      {
        image: "https://i.ytimg.com/vi/mZyjI8tKJSg/maxresdefault.jpg",
        heading: "Treatment of Apoplexy(لقوہ) & Paralysis",
        videoId: "_rdKXKXzn-U",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Mind Science (Reiki)",
    subCtg: "Mind Science (Reiki)",
    payload: [
      {
        image: "https://i.ytimg.com/vi/idJxvPQGuNU/maxresdefault.jpg",
        heading:
          "full body ASMR REIKI | embracing your true self for 2022 | letting go, plucking negative energy",
        videoId: "idJxvPQGuNU",
        date: "Dec 3, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/HZpFm85UYIo/maxresdefault.jpg",
        heading:
          "Reiki Course Level 1 (1h and 38 minutes) With Cert./Diploma + Attunements (see description)",
        videoId: "HZpFm85UYIo",
        date: "Nov 18, 2021",
      },

      {
        image: "https://i.ytimg.com/vi/8DVrLwvXXqs/hqdefault.jpg",
        heading: "Focusing on you | Intense reiki session (dark mode)",
        videoId: "8DVrLwvXXqs",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/ibkX9WnV_II/hqdefault.jpg",
        heading: "Drawing Reiki Symbols on ALL YOUR CHARKAS ASMR Whisper",
        videoId: "ibkX9WnV_II",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/zIRODWQA2x8/maxresdefault.jpg",
        heading:
          "Instant Reiki Healing Session HD | Reiki Healing Music #shorts",
        date: "Nov 13, 2021",
        videoId: "aWdn6QNfFzI",
      },
      {
        image:
          "https://images-platform.99static.com/kJxsjqL_YmXqTc4blx5dFyhjFSo=/103x2359:1887x4143/500x500/top/smart/99designs-contests-attachments/89/89756/attachment_89756547",
        heading: "Reiki Lounge",
        date: "Nov 13, 2021",
        videoId: "1BUJcHCHH10",
      },
    ],
  },
  {
    category: "Fitness",
    subCtg: "Fitness with Adnan Farooq",
    payload: [
      {
        image: "https://i.ytimg.com/vi/ioWfjzBCF5I/hqdefault.jpg",
        heading:
          "Heart Disease & Cholesterol!! Natural Cure & Prevention Tips (Part 1)",
        videoId: "ioWfjzBCF5I",
        date: "Dec 3, 2021",
      },
      {
        image:
          "https://club.atlascoffeeclub.com/wp-content/uploads/2016/02/coffee_vs_energy_drinks_post_sm-1.jpg",
        heading: "Out of Energy? Need Coffee? Drink THIS instead!",
        videoId: "QW37OHw_AzQ",
        date: "Nov 18, 2021",
      },

      {
        image:
          "https://static.toiimg.com/thumb/71941372.cms?width=680&height=512&imgsize=686512",
        heading: "BELLY FAT DISCUSSION ON TV",
        videoId: "8o6kpadTWXY",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Fitness",
    subCtg: "Fitness with Omer Chaudhary",
    payload: [
      {
        image: "https://i.ytimg.com/vi/TVMe4x-JqMk/maxresdefault.jpg",
        heading:
          "IMPORTANT 8 Things You Don't Know About Supplements ! Must Watch",
        videoId: "TVMe4x-JqMk",
        date: "Dec 3, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/PLYvQL42aVg/maxresdefault.jpg",
        heading: "Complete Back Workout with a Lion - Sets and Reps Included",
        videoId: "PLYvQL42aVg",
        date: "Nov 18, 2021",
      },

      {
        image: "https://i.ytimg.com/vi/q-t7O1UGdXw/maxresdefault.jpg",
        heading: "Complete Shoulder Workout with Lion - EXTREME PUMP AND SHAPE",
        videoId: "q-t7O1UGdXw",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/1m3IVsStLDk/hqdefault.jpg",
        heading:
          "THE PERFECT LOWER ABS WORKOUT AT HOME(NO EQUIPMENT REQUIRED)-CORONA VIRUS LOCK-DOWN",
        videoId: "1m3IVsStLDk",
        date: "Nov 18, 2021",
      },

      {
        image: "https://i.ytimg.com/vi/uPG_zv2X45w/maxresdefault.jpg",
        heading:
          "FULL BODY WORKOUT | Legs, Chest, Shoulders Workout | Beginners Series Day 02",
        videoId: "uPG_zv2X45w",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Nutrition and Diet",
    subCtg: "Nutrition",
    payload: [
      {
        image: "https://i.ytimg.com/vi/KD-FmeueFUo/maxresdefault.jpg",
        heading: "Healthy Aging with Nutrition",
        videoId: "KD-FmeueFUo",
        date: "Dec 3, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/fR3NxCR9z2U/sddefault.jpg",
        heading: "Metabolism & Nutrition, Part 1: Crash Course A&P #36",
        videoId: "fR3NxCR9z2U",
        date: "Nov 18, 2021",
      },

      {
        image: "https://i.ytimg.com/vi/bREPaPWc2zI/mqdefault.jpg",
        heading:
          "All About NUTRITION | Balanced Diet Chart | Diet plan in Quarantine Days | Letstute",
        videoId: "bREPaPWc2zI",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/KpXeWl2p5KM/maxresdefault.jpg",
        heading: "Animated Science. Episode 3. Nutrition",
        videoId: "KpXeWl2p5KM",
        date: "Nov 18, 2021",
      },

      {
        image: "https://i.ytimg.com/vi/xyQY8a-ng6g/maxresdefault.jpg",
        heading: "How the food you eat affects your brain - Mia Nacamulli",
        videoId: "xyQY8a-ng6g",
        date: "Nov 13, 2021",
      },
      {
        image:
          "http://s3.amazonaws.com/img.mynetdiary.com/blog/brain-diet-plan-brain-health-nutrition.jpeg",
        heading: "Brain Health and Nutrition",
        videoId: "g98qf2_7VE8",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Nutrition and Diet",
    subCtg: "Adnan Farooq",
    payload: [
      {
        image:
          "https://club.atlascoffeeclub.com/wp-content/uploads/2016/02/coffee_vs_energy_drinks_post_sm-1.jpg",
        heading: "Out of Energy? Need Coffee? Drink THIS instead!",
        videoId: "QW37OHw_AzQ",
        date: "Nov 18, 2021",
      },

      {
        image:
          "https://static.toiimg.com/thumb/71941372.cms?width=680&height=512&imgsize=686512",
        heading: "BELLY FAT DISCUSSION ON TV",
        videoId: "8o6kpadTWXY",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Nutrition and Diet",
    subCtg: "Omer Chaudhary",
    payload: [
      {
        image: "https://i.ytimg.com/vi/ZDgU0lFm3MA/maxresdefault.jpg",
        heading: "WHAT TO EAT BEFORE GYM FOR MUSCLE GAIN",
        videoId: "ZDgU0lFm3MA",
        date: "Nov 13, 2021",
      },
      {
        image:
          "https://i.ytimg.com/vi/PRb1SA8Uxp4/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCRqv6-W2TmrIZSsVvDUzyW7LjNTQ",
        heading: "10 Common Food Items That You Should Never Eat!",
        videoId: "PRb1SA8Uxp4",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Nutrition and Diet",
    subCtg: "NutritionFacts.Org",
    payload: [
      {
        image: "http://i.ytimg.com/vi/OxOK0qERZkI/maxresdefault.jpg",
        heading: "Lead in Calcium Supplements",
        videoId: "OxOK0qERZkI",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/JiSmW-KjIdM/maxresdefault.jpg",
        heading: "Flashback Friday: The Best Diet for Upset Stomach",
        videoId: "JiSmW-KjIdM",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Nutrition and Diet",
    subCtg: "UCLA Health",
    payload: [
      {
        image: "https://i.ytimg.com/vi/O1oVgRtVXRo/maxresdefault.jpg",
        heading:
          "Nutrition: Creating a Healthy Lifestyle | UCLA Health Ornish Lifestyle Medicine",
        videoId: "O1oVgRtVXRo",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/krIgKr3IC7s/maxresdefault.jpg",
        heading: "The Power of Nutrition | Luke Corey, RD, LDN | UCLAMDChat",
        videoId: "krIgKr3IC7s",
        date: "Nov 13, 2021",
      },
    ],
  },
  {
    category: "Nutrition and Diet",
    subCtg: "Dr. Matthew Weiner",
    payload: [
      {
        image: "https://i.ytimg.com/vi/l7xkJ5qfzxc/maxresdefault.jpg",
        heading: "Dr. Weiner's Weight Loss Surgery Channel - Postop Nutrition",
        videoId: "l7xkJ5qfzxc",
        date: "Nov 13, 2021",
      },
      {
        image: "https://i.ytimg.com/vi/l7xkJ5qfzxc/maxresdefault.jpg",
        heading:
          "Can I lose weight with Bariatric Surgery if Dieting doesn't work?",
        videoId: "vvGFIPtbgak",
        date: "Nov 13, 2021",
      },
    ],
  },
];
