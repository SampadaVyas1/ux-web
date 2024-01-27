import SkeletonLayout from "@/components/skeleton";
import { baseColor, highlightColor } from "@/utils/constants/common";

const skeletonStyle = {
  margin: "1.875rem 0",
};

const CustomSkeleton = () => {
  const renderSkeleton = (height: string | number, width = "100%") => (
    <SkeletonLayout
      baseColor={baseColor}
      highlightColor={highlightColor}
      height={height}
      width={width}
    />
  );

  return (
    <div>
      {renderSkeleton(30)}
      {renderSkeleton(20)}
      {renderSkeleton(20)}
      <div style={skeletonStyle}>
        {renderSkeleton(20, "100%")}
        <p>{renderSkeleton(20)}</p>
        <p>{renderSkeleton(20)}</p>
        <p>{renderSkeleton(20)}</p>
      </div>
      <div style={skeletonStyle}>
        {renderSkeleton(20, "100%")}
        <p>{renderSkeleton(20)}</p>
        <p>{renderSkeleton(20)}</p>
        <p>{renderSkeleton(20)}</p>
      </div>
    </div>
  );
};

export default CustomSkeleton;
