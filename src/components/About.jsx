export default function About() {
  return (
    <section className="about-section flex-col gap-30px page-width">
      <div className="about-header">
        <h2 className="std-39px center">About GuineaDad & BunnyDad</h2>
        <p className="center">
          At GuineaDad & BunnyDad, we’re passionate about providing the best care for your small pets. 
          From cozy homes to healthy treats, we offer high-quality pet kits designed to keep your furry friends happy and healthy.
        </p>
      </div>

      <div className="about-content flex gap-40px flex-wrap">
        <div className="about-card flex-col gap-15px">
          <h3 className="bold">Our Mission</h3>
          <p>
            To create a safe, fun, and nurturing environment for every guinea pig and bunny, 
            delivering products that combine comfort, safety, and style.
          </p>
        </div>

        <div className="about-card flex-col gap-15px">
          <h3 className="bold">Our Promise</h3>
          <p>
            Quality is our top priority. Every kit is carefully curated to ensure your pets get the best, 
            whether it’s bedding, toys, or treats.
          </p>
        </div>

        <div className="about-card flex-col gap-15px">
          <h3 className="bold">Our Community</h3>
          <p>
            We love building a community of small pet lovers! Join us to share tips, stories, and support 
            for happy and healthy pets.
          </p>
        </div>
      </div>

      <div className="about-cta center">
        <p>Ready to give your pets the care they deserve?</p>
        <a href="/shop" className="primary-button">Shop Our Kits</a>
      </div>
    </section>

  );
}
