import { useWindowSize } from "./useWindowSize"

export const useDeviceCategory = () => {
  const { width } = useWindowSize()
  return width >= 720 ? "desktop" : "mobile"
}
