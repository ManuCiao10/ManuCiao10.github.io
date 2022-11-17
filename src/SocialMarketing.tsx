import social from "../img/results.png";
import toolbar from "../img/ui-toolbar.avif";

function SocialMarketing() {
  return (
    <div className="social-marketing-header">
      <div className="social-marketing-body">
        <img src={social} alt="social" className="social-marketing-img" />
        <img src={toolbar} alt="marketing" className="social-marketing-img" />
      </div>
    </div>
  );
}

export default SocialMarketing;
