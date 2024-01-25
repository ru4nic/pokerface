import Tilt from 'react-parallax-tilt';

type TiltParalaxProps = {
  children: React.ReactNode;
  className?: string;
};
function TiltParalax({ children, className = undefined }: TiltParalaxProps) {
  return (
    <Tilt
      perspective={1000}
      glareBorderRadius="50"
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.02}
      className={className}
    >
      {children}
    </Tilt>
  );
}

export default TiltParalax;
