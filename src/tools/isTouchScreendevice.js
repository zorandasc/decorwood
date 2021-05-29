//detektuj touch screan capacity
const isTouchScreendevice = () => {
  //ssr ne vidi window
  if (typeof window !== "undefined") {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  return false;
};

export default isTouchScreendevice;
