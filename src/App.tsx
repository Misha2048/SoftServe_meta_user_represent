import React from "react";
import "./styles/index.css";
import { ContentBox } from "./Components/ContentBox";
import { Stat } from "./Components/Stat";
import { Scale } from "./Components/Scale";
import { Textbox } from "./Components/Textbox";

function App() {
  return (
    <main className="container">
      <div className="meta-user-image">
        <img src="./images/Alex.jpg" width={640} alt="Alex" />
      </div>
      <section className="content">
        <div className="content__block content__upper">
          <ContentBox title="About">
            Alex is university graduate, working professional who is very busy
            all time. Since childhood he was interested in technology, society,
            presentations, media. He enjoys being in center of attention, that`s
            why he presents his ideas on TED`s forums to make world a little
            better time to time.
          </ContentBox>
          <ContentBox>
            <Stat title="age" value={27} />
            <Stat title="occupation" value="business analyst" />
            <Stat title="status" value="not married" />
            <Stat title="children" value="none" />
            <Stat title="location" value="Dnipro, Ukraine" />
          </ContentBox>
        </div>
        <div className="content__block content__middle">
          <ContentBox title="Needs">
            <ul className="needs">
              <li>
                Increase his working efficiency and reduce estimated amount of
                time to complete the job
              </li>
              <li>
                Tool to collect, manage and visualize the data needed for
                projects
              </li>
              <li>
                Find content such an images with no copyright or watermark to
                use in presentation/article faster
              </li>
            </ul>
          </ContentBox>
          <ContentBox title="Frustrations">
            <ul className="frustrations">
              <li>Lacks rest</li>
              <li>
                Spending too much time to generate and prepare to present the
                idea
              </li>
              <li>
                Feel uneasy with graphics tools, because it uses most of PC
                resourses
              </li>
            </ul>
          </ContentBox>
        </div>
        <div className="content__block content__lower">
          <ContentBox title="Context of use">
            <div className="context">
              <Scale percentage={80}>Desktop</Scale>
              <Scale percentage={25}>Mobile</Scale>
              <Scale percentage={60}>Social media</Scale>
              <Scale percentage={100}>Technical skill</Scale>
            </div>
          </ContentBox>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ContentBox title="Current feelings">
              <ul className="feelings">
                <li>Tired</li>
                <li>Busy</li>
                <li>Сreative crisis</li>
              </ul>
            </ContentBox>
            <ContentBox title="Personality">
              <ul className="personality">
                <Textbox>Organized</Textbox>
                <Textbox>Analytical</Textbox>
                <Textbox>Active</Textbox>
                <Textbox>Witty</Textbox>
                <Textbox>Extravert</Textbox>
              </ul>
            </ContentBox>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
