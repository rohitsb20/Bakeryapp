import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200/60 flex flex-col items-center gap-4 p-6">
      <div className="flex items-center gap-2 text-xl font-bold">
        image
        <span>Logo</span>
      </div>
      <aside>
        <p>©2025FLogo</p>
      </aside>
      <nav className="text-base-content grid-flow-col gap-4">
        <Link className="link link-hover" to="#">
          About
        </Link>
        <Link className="link link-hover" to="#">
          Blog
        </Link>
        <Link className="link link-hover" to="#">
          Contact
        </Link>
        <Link className="link link-hover" to="#">
          Refund Policy
        </Link>
      </nav>
      <div className="flex h-5 gap-4">
        <Link to="#" className="link text-sky-500" aria-label="Github Link">
          <span className="icon-[tabler--brand-github] size-5"></span>
        </Link>
        <Link to="#" className="link text-sky-500" aria-label="Facebook Link">
          <span className="icon-[tabler--brand-facebook] size-5"></span>
        </Link>
        <Link to="#" className="link text-sky-500" aria-label="X Link">
          <span className="icon-[tabler--brand-x] size-5"></span>
        </Link>
        <Link to="#" className="link text-sky-500" aria-label="Google Link">
          <span className="icon-[tabler--brand-google] size-5"></span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
