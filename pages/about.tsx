import Header from "../components/Header";
import TrendsImage from "../img/3.jpeg";

function About() {
  return (
    <div>
      <Header />
      <AboutArticle />
    </div>
  );
}

export default About;

const AboutArticle = () => {
  return (
    <>
      <h1 className="text-6xl underline font-serif -tracking-wide text-center">
        What is African Trends
      </h1>
      <div className="">
        <p className="text-center text-bold">
          We find the best African market products, ideas and companies, so that
          you can make the most informed decisions about your investments on the
          emerging African Market.
          <img
            className="md:inline-flex h-50 lg:w-55 px-10"
            src={TrendsImage.src}
            alt="young people doing business"
          />
        </p>
      </div>
    </>
  );
};
