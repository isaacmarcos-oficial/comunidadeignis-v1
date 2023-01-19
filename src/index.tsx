import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeBlog } from "./components/PageHome/HomeBlog";
import { HomeEvangelii } from "./components/PageHome/HomeEvangelii";
import { HomeHero } from "./components/PageHome/HomeHero";
import { HomeSpirituality } from "./components/PageHome/HomeSpirituality";

export function Home() {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeSpirituality />
      <HomeBlog />
      <HomeEvangelii />
      <Footer />
    </div>
  )
}