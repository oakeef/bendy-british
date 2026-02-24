const Logo = ({ className }: { className?: string }) => {
  return (
    <div 
      className={`bg-primary ${className}`}
      style={{
        maskImage: 'url("/logo.svg")',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: 'url("/logo.svg")',
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        width: '128px', 
        height: '80px',
      }}
    />
  );
};

export default Logo;