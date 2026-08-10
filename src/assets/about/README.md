# Personal photo

Drop a portrait here (portrait orientation, ~4:5, at least 900px tall
looks best) and wire it up in `src/sections/About.jsx`:

Replace:
    <PlaceholderImage label={`Add a photo of ${site.name}`} ratio="4 / 5" />

With:
    import photo from "../assets/about/your-file.jpg";
    ...
    <img src={photo} alt={site.name} className="about__photo-img" />

(Add a matching `.about__photo-img { width:100%; border-radius: var(--radius-lg); }`
rule in About.css if you make this swap.)
