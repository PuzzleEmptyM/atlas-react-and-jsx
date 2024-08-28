import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpfulResource from "./components/HelpfulResource";
import Section from "./components/Section";

function App() {
  return (
    <div  className="app">
      <Header />

      <Section title="What is React?">
        <p>React is a JavaScript library that separates the user interface into separate components, where each component has its own properties and functions. This makes it easier to add elements and sections to a page dynamically, and also makes debugging easier to do. </p>
      </Section>

      <Section title="Benefits of React">
        <ul>
          <li>Easy to learn and use</li>
          <li>Reusability of code components</li>
          <li>Readily available JavaScript Libraries</li>
          <li>Active community with hundreds of custom libraries to explore</li>
          <li>Works for both iOS and Android App development</li>
          <li>Great for SEO</li>
        </ul>
      </Section>
      <Section title="Helpful resources">
        <HelpfulResource label="React in 100 seconds" link="https://www.youtube.com/watch?v=Tn6-PIqc4UM&feature=youtu.be" />
        <HelpfulResource label="Vite guide" link="https://vitejs.dev/guide/" />
        <HelpfulResource label="React Tutorial for Beginners" link="https://www.youtube.com/watch?v=SqcY0GlETPk" />
        <HelpfulResource label="React Full Course for Free" link="https://www.youtube.com/watch?v=CgkZ7MvWUAA" />
      </Section>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
