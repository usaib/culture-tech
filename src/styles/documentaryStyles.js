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
    image: "https://i.ytimg.com/vi/hkuimX1bh6g/sddefault.jpg",
    heading: "The Sufi Whirling Dervishes - Istanbul, Turkey",
    description:
      "David's Been Here is in Istanbul, Turkey, exploring all the top sites and cultural attractions of the city. In this video, David presents one of the most popular and interesting parts of the Turkish Culture, the amazing Whirling Dervishes. A Sufi practice, this spinning action is used as a physical form of meditation and worship that dates back over 800 years. A mystical and beautiful site to experience, head to the Galata Museum in Istanbul to see this incredible form of religious worship first hand.",
    duration: "3mins",
    videoId: "hkuimX1bh6g",
  },
];
export const allDocs = [
  {
    category: "New Releases",
    data: [
      {
        subCtg: "",
        payload: [
          {
            image: "https://i.dawn.com/large/2016/06/576c74d7b44b6.jpg",
            heading: "Nighat Chaodhry Documentery By DAWN",
            description: "",
            duration: "1hr 54mins",
            videoId: "5SNHcQqYbHI",
          },
          {
            image: "https://i.ytimg.com/vi/aCbcbKZjjdA/mqdefault.jpg",
            heading: "The Hip Hop Years - Full Documentary",
            description:
              "Channel 4 Documentary 1999 Several minutes are muted because of copyrights.",
            duration: "1hr 54mins",
            videoId: "aCbcbKZjjdA",
          },
          {
            image:
              "https://m.media-amazon.com/images/M/MV5BZGM4OWZhNGQtZmQwYS00Y2NiLWI1M2MtYTVlMWU1ZTRlMTUwXkEyXkFqcGdeQXVyNjE1MDcwOTg@._V1_FMjpg_UX1000_.jpg",
            heading: "Making The Dance - Documentary by Darryl Grogan",
            description:
              "Filmed and edited over 2 years this documentary takes the viewer on an in depth and dramatic journey uncovering the inner workings and intense challenges that are faced when putting together a professional dance production. Led by their passionate choreographer Natasha Middleton this group of talented dancers out of Los Angeles showcase the full contemporary and classical dance experience, from the early stages of developing choreography all the way through to the final rehearsals and performances.",
            duration: "1hr 54mins",
            videoId: "DXhuoBIJZis",
          },
          {
            image: "https://i.ytimg.com/vi/EAhRvgkurRM/hqdefault.jpg",
            heading:
              "History and Concept of Hip-Hop Dance | Documentary | Moncell Durden",
            description:
              "History and Concept of Hip-Hop Dance | Documentary | Moncell Durden The Street Culture that became a Global Expression.Conceived and Directed by Moncell Durden",
            duration: "1hr 54mins",
            videoId: "EAhRvgkurRM",
          },
          {
            image: "https://i.ytimg.com/vi/KPPxXeoIzRY/maxresdefault.jpg",
            heading:
              "A Choreographer's Creative Process in Real Time | Wayne McGregor | TED Talks",
            description:
              "We all use our body on a daily basis, and yet few of us think about our physicality the way Wayne McGregor does. He demonstrates how a choreographer communicates ideas to an audience, working with two dancers to build phrases of dance, live and unscripted, on the TEDGlobal stage.",
            duration: "1hr 54mins",
            videoId: "KPPxXeoIzRY",
          },
        ],
      },
    ],
  },
  {
    category: "Modern Dances",
    data: [
      {
        subCtg: "Hip Hop",
        payload: [
          {
            image: "https://i.ytimg.com/vi/aCbcbKZjjdA/mqdefault.jpg",
            heading: "The Hip Hop Years - Full Documentary",
            description:
              "Channel 4 Documentary 1999 Several minutes are muted because of copyrights.",
            duration: "2hr 25mins",
            videoId: "aCbcbKZjjdA",
          },
          {
            image: "https://i.ytimg.com/vi/d0G6RCi5AxA/sddefault.jpg",
            heading: "40 years of Hip Hop Documentary By KRS-One (Full Movie)",
            description:
              "40 years of Hip Hop by KRS-One (Full Movie) BreekpuntKanaal BreekpuntKanaal 2,310 438,829 Published on Sep 6, 2013. KRS-One shares valuable secrets on the history, meaning and philosophy of Hip Hop. Slavery, education, spirituality, culture, modern society, war, the economy, mainstream hip-hop and much more were discussed at this historical event.This speech was held during the Hip Hop appreciation week in Amsterdam, The Netherlands. There, KRS-One held his forty years of Hip-Hop lecture in the Bijlmer neighborhood.",
            duration: "1hr 41mins",
            videoId: "d0G6RCi5AxA",
          },
          {
            image: "https://i.ytimg.com/vi/Qbn055i33OQ/maxresdefault.jpg",
            heading: "Nipsey Hussle - The Last Lap (Full Documentary)",
            description:
              "A hip-hop enthusiast touching on various topics in everything hip-hop. From the latest Hip-Hop news, to major Hip-Hop beef documentaries to talking about rappers and singers that disappeared from the limelight to artists that are on the rise! It's all here hosted by Quake!",
            duration: "2hr",
            videoId: "Qbn055i33OQ",
          },
          {
            image: "https://i.ytimg.com/vi/13fPhE5p4jk/maxresdefault.jpg",
            heading: "The History of Modern Dance",
            description: "N.T. - Passion Project",
            duration: "6mins",
            videoId: "13fPhE5p4jk",
          },
          {
            image: "https://i.ytimg.com/vi/8e_jNcCKFH0/maxresdefault.jpg",
            heading: "Grab The Mic: A Hip Hop History | The 90s (2001)",
            description:
              "MTV documentary hosted by  SWAY CALLOWAY looking back at hip hop's evolution in the 1990s. Shared for historical purposes. I do not own the rights.",
            duration: "33mins",
            videoId: "8e_jNcCKFH0",
          },
        ],
      },
      {
        subCtg: "Comtemporary",
        payload: [
          {
            image: "https://i.ytimg.com/vi/1ct5iqj33Qc/maxresdefault.jpg",
            heading: "Tracing Modern Dance - Documentary",
            description:
              "On September 30, 2016, the Paul Taylor 2 Dance Company performed the reconstructed work Tracer at UNC Charlotte, the culmination of an 18-month process to bring back to life a work not seen in more than 50 years. Paul Taylor choreographed Tracer in 1962, but after a 1964 performance, it fell from the Taylor repertory.",
            duration: "1hr 13mins",
            videoId: "1ct5iqj33Qc",
          },
          {
            image: "https://i.ytimg.com/vi/SJReDBZ6_R0/maxresdefault.jpg",
            heading: "What is contemporary dance? Short Documentary",
            description:
              "The video is a college project. The short documentary is an exploration of a question what is contemporary dance? Includes dancer's opinions and perspectives on contemporary dance.",
            duration: "15mins",
            videoId: "AW7Gkqe676o",
          },

          {
            image:
              "https://slideplayer.com/slide/13460209/80/images/2/What+is+Modern+The+rebellion+against+ballet.jpg",
            heading:
              "PART 1 - MODERN AND CONTEMPORARY DANCE (HISTORY AND PIONEERS)",
            description: "",
            duration: "20mins",
            videoId: "425kUINASUM",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading: "JULIA - Documentary Film (contemporary dancer)",
            description:
              "This is a Documentary Film, of Julia, a contemporary dancer.",
            duration: "4mins",
            videoId: "wTjHjGi6guI",
          },
        ],
      },
      {
        subCtg: "Street Dances",
        payload: [
          {
            image: "https://i.ytimg.com/vi/8uyv9gKcGsA/maxresdefault.jpg",
            heading: "Street Dance Documentary EP3 - Chriz Ooi",
            description:
              "With dedication and persistence, you can achieve anything.. Follow the journey of Chriz Ooi where he begins his dancing career from nothing to where he is today.",
            duration: "10mins",
            videoId: "8uyv9gKcGsA",
          },
          {
            image: "https://i.ytimg.com/vi/5RBZ_kx5TL0/maxresdefault.jpg",
            heading:
              "Finding Yourself - a dance documentation ( hip hop dance, Damon frost, Shake & Future)",
            description:
              "Finding yourself is a short documentary film featuring the 3 legendary dancers Damon Frost, Daniel E Future Kelley and Chris Shake Mathis.",
            duration: "5mins",
            videoId: "5RBZ_kx5TL0",
          },
          {
            image: "https://i.ytimg.com/vi/KDEdcbqgiN0/hqdefault.jpg",
            heading: "Street Dance Documentary",
            description: "",
            duration: "12mins",
            videoId: "DjYkV900Fc4",
          },
          {
            image: "https://i.ytimg.com/vi/hBr8qn3WYto/maxresdefault.jpg",
            heading: "BREATH (2021) Street Dance Documentary | MYM",
            description:
              " Breath is an instalment of the award-winning documentary series, Self Expression. Where the spotlight is turned upon what it is to be a creative, and the personal expression of different individuals chosen art form. Each episode takes the audience on a journey and delves a little deeper into the individuals' background and how they became involved in their chosen art and how it's gone on to shape their lives.",
            duration: "5mins",
            videoId: "hBr8qn3WYto",
          },
          {
            image: "https://i.ytimg.com/vi/An3ply3BbWE/sddefault.jpg",
            heading:
              "Emporium Mall Lahore (break dance) Flash Mob THE MARTIANS",
            description: "",
            duration: "11mins",
            videoId: "An3ply3BbWE",
          },
        ],
      },
      {
        subCtg: "Creative",
        payload: [
          {
            image: "https://i.ytimg.com/vi/IasPpe1BZ2o/maxresdefault.jpg",
            heading: "DANCE REBELS - a story of modern dance",
            description: "Documentário exibido e produzido pelo canal BBC.",
            duration: "1hr 28mins",
            videoId: "IasPpe1BZ2o",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading: "The Creative Imagination | A Dance Documentary",
            description: "",
            duration: "14mins",
            videoId: "fFBmmB8qRGc",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading: "What is Creative Dance? An Introduction for Beginners",
            description:
              "What is Creative Dance?... In this video, we talk about what creative dancing is, this is a quick introduction for beginners!",
            duration: "6mins",
            videoId: "tpbih8_ys40",
          },
          {
            image: "https://i.ytimg.com/vi/sWSB0p9wyO0/maxresdefault.jpg",
            heading: "da:ns docuseries: What is contemporary dance? (part 1)",
            description:
              "An evocative introduction to contemporary dance, this video starts with a broad sweep of its history and evolution over time, eventually zooming into the personal, with five dancers from Singapore expressing their heartfelt thoughts about dance in both word and movement. It also .",
            duration: "12mins",
            videoId: "sWSB0p9wyO0",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading:
              "Panga Jatra: A Documentary by Students of Creative Acadmey",
            description:
              "This documentary is made by students of Creative Academy as a workshop assignment organized by British Council in collaboration with INTO Films Org.",
            duration: "6mins",
            videoId: "0y0fdwbQmoc",
          },
        ],
      },
    ],
  },
  {
    category: "Classical Katthak",
    data: [
      {
        subCtg: "",
        payload: [
          {
            image: "https://i.ytimg.com/vi/jPTPihtuAHA/maxresdefault.jpg",
            heading:
              "THE STORYTELLER // The Documentary on Indian Kathak Dancing",
            description: "",
            duration: "3mins",
            videoId: "jPTPihtuAHA",
          },
          {
            image: "https://i.ytimg.com/vi/Wjp3B1DNRtY/maxresdefault.jpg",
            heading: "Kathak: Dancing with taboos | Documentary",
            description:
              "A short documentary on Kathak in Pakistan through the years. From Kathak's true essence to how it survived during the first military dictatorship. As recounted by the captivating Bina Jawwad, a melting pot of countless passions.",
            duration: "11mins",
            videoId: "Wjp3B1DNRtY",
          },
          {
            image:
              "https://i.tribune.com.pk/media/images/662488-NighatChaudhrys-1390494543/662488-NighatChaudhrys-1390494543.JPG",
            heading: "Nighat chaudhry# kathak Dance master",
            description: "",
            duration: "1mins",
            videoId: "EEqsyBNql20",
          },
          {
            image: "https://i.ytimg.com/vi/V7yF3LV6vZ0/maxresdefault.jpg",
            heading:
              "Dancing the Female Body in Pakistan | Nighat Chaodhary | TEDxUCP",
            description:
              "Nighat Chaodhry takes us through the fate of classical dance in Pakistan. She talks about the past, present and future of classical dance and its significance.  Born in Lahore and brought up in England, Nighat Chaodhry has been a dancer from an early age as her skills were vividly visible ",
            duration: "16mins",
            videoId: "V7yF3LV6vZ0",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading:
              "Woman Of the East - Episode #1 - Passion (Nighat Chaodhry)",
            description:
              "Woman Of the East is a documentary series of inspiring, headstrong women from Pakistan who continue to come forward despite the cultural stereotypes that are held against women till date. While some girls have difficulties growing up and pursuing their dreams and ambitions, there is another side to the eastern woman: there is independence of thought, resilient attitude and a much, much stronger sense of empowerment that prevails despite popular belief of suppression of womanhood in a country like Pakistan",
            duration: "11mins",
            videoId: "CKC29uhZ3HE",
          },
        ],
      },
      {
        subCtg: "",
        payload: [
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading: "Khaas Mulaqat- An Interview With Nighat Chaodhry",
            description:
              "Khaas Mulaqat- Nighat Chaodhry gives an exclusive interview to Mujahid Barelvi of CNBC Channel.",
            duration: "49mins",
            videoId: "MX1uDVN_XQo",
          },
          {
            image: "https://i.ytimg.com/vi/cMsP13Qaz0E/maxresdefault.jpg",
            heading:
              "KHAMAJ PART 11 | SAYONI MERA MAHI - NOOR JAHAN - MASTANA MAHI Pakistani Classics",
            description:
              "KHAMAJ PART 11 | SAYONI MERA MAHI - NOOR JAHAN - MASTANA MAHI Pakistani Classics",
            duration: "0mins",
            videoId: "cMsP13Qaz0E",
          },
          {
            image: "https://i.ytimg.com/vi/pNMMIe0OyBU/maxresdefault.jpg",
            heading: "Nighat Chaodhry | WPAF | World Performing Arts Festival",
            description: "",
            duration: "7mins",
            videoId: "d334hpv5zpg",
          },
        ],
      },
    ],
  },
  {
    category: "Spiritual Dances",
    data: [
      {
        subCtg: "Dhamaal",
        payload: [
          {
            image: "https://i.ytimg.com/vi/KFH2I6I6ByA/maxresdefault.jpg",
            heading: "Pauna6 (BTS, Concept Movement with Nighat Chaudhry)",
            description:
              "'Pauna6' is the title of Maham's new single whose music video is releasing on 26th May, 2021 (Insha Allah).This video is one of a series of videos to be released in the coming weeks, including of course, the main music video for 'Pauna6'. The single features some top Pakistani & Finnish musicians, and is an unusual music piece though with captivating groove sections.This BTS (Behind The Scenes) video, is put together to share with the audiences, the work that Nighat Chaudhry has done with Maham, as the choreographer and featured movement artist/dancer on this video. The video concept including the characterisation of the 2 women (Maham & Nighat) in the video, has been carefully done through the movement sequences.",
            duration: "3mins",
            videoId: "qTxLVm80Mo8",
          },
          {
            image: "https://i.ytimg.com/vi/CvvxDKLzg_Y/maxresdefault.jpg",
            heading: "Nighat Chaodhry and Wahab Shah Performance For Olpers",
            description:
              "Nighat Chaodhry and Wahab Shah deliver a power packed performance for Olpers.",
            duration: "6mins",
            videoId: "BM1KLVK1wiw&t=92s",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading: "Fitoor -Nighat Chaodhry|Dance Performance.",
            description: "",
            duration: "1hr 54mins",
            videoId: "Z8uC-9o5UtY",
          },
          {
            image:
              "https://stdc.gos.pk/media/k2/items/cache/d6e7bc44feb1613d041d5385e5745b10_XL.jpg",
            heading: "dhamal on laal shahbaz qalandar",
            description: "",
            duration: "1mins",
            videoId: "CImOStAqGyE",
          },
          {
            image: "https://i.ytimg.com/vi/-28e2wvJ98g/sddefault.jpg",
            heading: "Dhamal at Shah Kamal",
            description:
              "Summary of the dhamal ritual at the Sufi shrine of Baba Shah Kamal. Dhol performance by Gonga Sain. Dhamal is isqh namaz - prayer of love.",
            duration: "7mins",
            videoId: "-28e2wvJ98g",
          },
        ],
      },
      {
        subCtg: "Shaman Ritual Dances",
        payload: [
          {
            image: "https://i.ytimg.com/vi/mLmaUFyx1I0/hqdefault.jpg",
            heading: "Dance Can Become A Sacred, Spiritual Process",
            description: "Dance Can Become A Sacred, Spiritual Process",
            duration: "6mins",
            videoId: "Vvm7FQT1YAY",
          },
          {
            image: "https://i.ytimg.com/vi/b3qrg0Yd87o/mqdefault.jpg",
            heading:
              "Dance As A Spiritual Practice - Collaborative Video Project - FULL VIDEO",
            description:
              "ITS FINALLY HERE!! Here is the FULL VIDEO of the ‘Dance As A Spiritual Practice’ collaborative project. Seven ordinary / extraordinary dancers speak about their experiences with the spiritual side of dance, and bust some awesome dance moves too. Wed love to hear your feedback on the video and your personal experiences with dance as a spiritual practice too. Post in comments below.",
            duration: "18mins",
            videoId: "b3qrg0Yd87o",
          },

          {
            image: "https://i.ytimg.com/vi/hyNO8FKg74o/sddefault.jpg",
            heading: "Kundalini Dance - Tantric Shamanic Dance Journey",
            description:
              "We created this DVD in Canada with my priestess circle there.. great animators holgraphic productions created sacred geometrical psychedelic  animations to describe what we see and feel in our bodies when we are dancing in the energy flow.",
            duration: "9mins",
            videoId: "hyNO8FKg74o",
          },
          {
            image: "https://i.ytimg.com/vi/SoTCIg0IEG0/maxresdefault.jpg",
            heading: "Shaman Dance (Bitan ) in Hunza 1984",
            description:
              "Shamanistic tradition centered around religious specialists known as bitan.These practitioners inhale the smoke of burning juniper branches, dance to a special music, drink blood from a freshly severed goat's head, enter into ecstatic trances, and converse with supernatural beings. An ethnographic and historical analysis of this little-known shamanistic tradition is offered, focusing on the rituals, beliefs, and practices of Hunzakut bitan, the place of these practitioners in the traditional ritual and politico-ideological apparatus of the former Hunza state, and their role as healers and soothsayers.",
            duration: "3mins",
            videoId: "SoTCIg0IEG0",
          },

          {
            image: "https://i.ytimg.com/vi/dgZz8vhD9xU/maxresdefault.jpg",
            heading:
              "Shamans of Himalaya || Shamanism || Himalayan Shaman || Himalayan Culture",
            description:
              "Shamanism is practiced around the hills and himalayas of Nepal. There various types of Shaman are found in Nepal. Some Shamans are Bon religion based Shaman and some hindu goddesses based Shamans. Here in this video we show you Shamans of Himalaya (Humla district of North West Nepal).",
            duration: "5mins",
            videoId: "dgZz8vhD9xU",
          },
        ],
      },
      {
        subCtg: "Sufi Dances",
        payload: [
          {
            image:
              "https://yt3.ggpht.com/ytc/AKedOLTZCZSqfn7AwtkA-QKStAIoHP2CuJKkyatuP6f090o=s900-c-k-c0x00ffffff-no-rj",
            heading: "Nighat Chaodhry dance performance (3)",
            description:
              "International dance day Nighat Chaodhry performance at Alhamra Arts Council, Mall.",
            duration: "1mins",
            videoId: "bMwABOZP8cg",
          },
          {
            image:
              "https://www.tgkarate.com/wp-content/uploads/2017/04/default-image.jpg",
            heading: "Nighat Chaodhry- Sufi Dance- PTV",
            description:
              "Nighat Chaodhry performs a Sufi dance for PTV's show along with Khalid Anum.",
            duration: "4mins",
            videoId: "YJICXbbmeQo",
          },
          {
            image: "https://i.ytimg.com/vi/mM6FmQJtUKk/maxresdefault.jpg",
            heading:
              "BABA KAKI aur MAin- Spirtual Healing बाबा काकी और में~रूहानी इलाज",
            description:
              "Each Word Has Its Own Power & Impact on Spirit.Just Concentrate On Each Word Each Step You Will Get Your Self.The Love Therapy Always Heal With Unconditional Love.This Is The Self Practical Of BABA- Syed Safdar Ali Bukhari Peer Kaki Sarkar",
            duration: "6mins",
            videoId: "mM6FmQJtUKk",
          },
          {
            image: "https://i.ytimg.com/vi/pvbJBLZX3F4/maxresdefault.jpg",
            heading: "Nataraj Spiritual Dance Festival Documentary, India",
            description:
              "Nataraj Spiritual Dance Festival takes place every year at Zorba The Buddha in Delhi, India around New Years Eve. This 5 day event features some of the best dance teachers in the fields of spiritual dance plus individual workshops and special choreography classes in more classical and modern dance styles of with the option to bring these to our final evening Talent Show. ",
            duration: "26mins",
            videoId: "pR2jVmCdhfE",
          },
          {
            image: "https://i.ytimg.com/vi/hkuimX1bh6g/sddefault.jpg",
            heading: "The Sufi Whirling Dervishes - Istanbul, Turkey",
            description:
              "David's Been Here is in Istanbul, Turkey, exploring all the top sites and cultural attractions of the city. In this video, David presents one of the most popular and interesting parts of the Turkish Culture, the amazing Whirling Dervishes. A Sufi practice, this spinning action is used as a physical form of meditation and worship that dates back over 800 years. A mystical and beautiful site to experience, head to the Galata Museum in Istanbul to see this incredible form of religious worship first hand.",
            duration: "3mins",
            videoId: "hkuimX1bh6g",
          },
        ],
      },
    ],
  },
];
