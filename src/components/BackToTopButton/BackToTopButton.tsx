

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="absolute-btn">
      <button onClick={scrollToTop}>
        <span><i className="ri-arrow-up-double-line"></i></span>
      </button>
    </div>
  );
};

export default BackToTopButton;
