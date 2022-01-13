import { Link } from "react-router-dom";

const SocialMedias = ({ socialmedias }) => {
  return (
    <div className="social-list">
      {socialmedias.map((socialmedia) => (
        <div className="blog-preview" key={socialmedia.id}>
          <Link to={`/profile/${socialmedia.userId}`}>
            <h2>facebook: {socialmedia.facebookUrl}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedias;
