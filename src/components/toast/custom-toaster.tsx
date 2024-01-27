import { Toaster } from "react-hot-toast";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";

const CustomToaster = () => {
  const { deviceType } = useWindowUtil();
  return (
    <Toaster
      position={deviceType === DeviceType.MOBILE ? "top-center" : "top-right"}
      toastOptions={{
        duration: 3000,
      }}
    />
  );
};

export default CustomToaster;
