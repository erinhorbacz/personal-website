import "./PhotographyPage.css";
import Slider from "./Slider";
import Footer from "../../components/footer_section/Footer";

const PhotographyPage = () => {
  return (
    <>
    <div className="galleryContainer" style={{ paddingTop: "5rem"}}>
      <div
        className="banner_title"
        style={{
          fontSize: "20px",
          width: "500px",
          paddingBottom: '4rem',
        }}
      >
        I started loving photography in middle school, and I've been building up
        my small portfolio ever since. I took a few photography classes in high
        school but I hated it... I like it more when I can just capture what I
        think is beautiful and do it purely for fun.
      </div>
      <Slider />
      {/* <Footer color="#765f51c1"/> */}
    </div>
    <Footer color="#765f51c1"/>
    </>
  );
};

export default PhotographyPage;
