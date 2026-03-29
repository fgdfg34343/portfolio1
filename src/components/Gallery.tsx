import "./styles/Gallery.css";

const galleryImages = Array.from({ length: 23 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");

  return {
    id,
    src: `/images/gallery/gallery-${id}.png`,
    alt: `Portfolio gallery preview ${id}`,
  };
});

const Gallery = () => {
  return (
    <section className="gallery-section section-container" id="gallery">
      <div className="gallery-header">
        <p>Visual Case Studies</p>
        <h2>
          Full <span>Gallery</span>
        </h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <a
            key={image.id}
            className="gallery-card"
            href={image.src}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <div className="gallery-card-tag">Frame {image.id}</div>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
