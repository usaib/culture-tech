import React, { useState } from "react";
import { Homepage } from "./pages/Homepage";
import Podcasts from "./pages/Podcasts";
import Documentry from "./pages/Documentry";
import SeeAll from "./components/SeeAll";
import SeeAllSubs from "./components/SeeAllSubs";
import Header from "./components/Header";
import VirtualStudios from "./pages/VirtualStudios";
import TopDanceTourism from "./components/TopDanceTourism";
import DanceTourism from "./pages/DanceTourism";

// import SeeAllSubs from "./components/SeeAllSubs";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Modal } from "./components/Modal";
import { Category } from "./pages/Category";
import { HealthandFitness } from "./pages/HealthandFitness";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [category, setCategory] = useState("");
  function onClose() {
    setOpen(false);
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage setOpen={setOpen} setData={setData} />}
          />
          <Route path="app/podcasts" element={<Podcasts />} />
          <Route
            path="documentries"
            element={
              <Documentry
                setOpen={setOpen}
                setData={setData}
                setCategory={setCategory}
              />
            }
          />
          <Route exact path="/SeeAll" element={<SeeAll />} />
          <Route exact path="/SeeAllSubs" element={<SeeAllSubs />} />
          <Route
            path="app/DanceTourism"
            element={<DanceTourism setCategory={setCategory} />}
          />

          {category && (
            <Route
              path="app/DanceTourism/:category"
              element={
                <Category setOpen={setOpen} setData={setData} ctg={category} />
              }
            />
          )}
          <Route
            path="app/virtualStudio"
            element={<VirtualStudios setCategory={setCategory} />}
          />
          {/* <Route
            exact
            path="/app/virtualStudio"
            element={
              <>
                <Header
                  title={"VIRTUAL STUDIO"}
                  image={require("./Images/studio.jpg")}
                />
                <VirtualStudios></VirtualStudios>
              </>
            }
          /> */}
          <Route
            path="/documentary/:category"
            element={
              category && (
                <Category setOpen={setOpen} setData={setData} ctg={category} />
              )
            }
          />
          <Route
            path="/healthandfitness"
            element={<HealthandFitness setOpen={setOpen} setData={setData} />}
          />
        </Routes>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          videoId={data}
          channel="youtube"
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
