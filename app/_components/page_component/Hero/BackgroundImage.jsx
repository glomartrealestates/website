function BackgroundImage() {
    return (
      <img
        itemProp="image"
        alt="hero background image"
        src=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-[400px] w-full object-cover z-[-1]" 
      />
    );
  }
  
  export default BackgroundImage;
  