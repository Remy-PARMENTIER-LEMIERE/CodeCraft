import "./home.css";

function home() {
  return (
    <section className="home">
      <section className="home_intro">
        <h1>
          Bienvenue sur <span>CodeCraft</span>
        </h1>
        <p>
          CodeCraft est la plateforme idéale pour apprendre à programmer.
          Découvrez des concepts clés, progressez à votre rythme, et relevez des
          défis concrets !
        </p>
        <img
          src="src/assets/images/codecraft.png"
          alt="Illustration CodeCraft"
          className="home__image"
        />
      </section>
    </section>
  );
}
export default home;
