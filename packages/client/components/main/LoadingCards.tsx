import { useEffect, useLayoutEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  if (typeof window === undefined) return size;
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const ImageGrid: React.FC = (props) => {
  const [dimensions, setDimensions] = useState({
    x: 0,
    y: 0,
    width: 300,
    height: 200,
    radius: 4,
    padding: 12,
    sWidth: 800,
    sHeight: 600,
    shouldDisplaySecond: true,
  });

  const [w, h] = useWindowSize();

  useEffect(() => {
    setDimensions((prev) => ({
      ...prev,
      sWidth: w * 0.9,
      sHeight: h * 0.7,
      shouldDisplaySecond: w >= dimensions.width * 2.5,
    }));
  }, [w, h]);

  const { sWidth, sHeight, x, y, width, height, radius, padding } = dimensions;
  return (
    <ContentLoader
      width={sWidth}
      height={sHeight}
      viewBox={`0 0 ${sWidth} ${sHeight}`}
      backgroundColor='#f3f3f3'
      foregroundColor='#dddddd'
      {...props}
    >
      <rect x={x} y={y} rx={radius} ry={radius} width={width} height={height} />
      <rect
        x={x}
        y={y + height + padding}
        rx={0}
        ry={0}
        width={width * 0.8}
        height={10}
      />
      <rect
        x={x}
        y={y + height + padding + 10 + padding}
        rx={0}
        ry={0}
        width={width * 0.6}
        height={10}
      />
      {/* second one */}
      {dimensions.shouldDisplaySecond && (
        <>
          <rect
            x={x + width + padding + padding}
            y={y}
            rx={radius}
            ry={radius}
            width={width}
            height={height}
          />
          <rect
            x={x + width + padding + padding}
            y={y + height + padding}
            rx={0}
            ry={0}
            width={width * 0.8}
            height={10}
          />
          <rect
            x={x + width + padding + padding}
            y={y + height + padding + 10 + padding}
            rx={0}
            ry={0}
            width={width * 0.6}
            height={10}
          />
        </>
      )}
    </ContentLoader>
  );
};

export default ImageGrid;
