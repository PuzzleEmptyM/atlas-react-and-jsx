import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Header />

      <Section title="What is React?">
        <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
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
    </div>
  );
}

export default App;
