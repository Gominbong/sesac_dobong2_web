import { useEffect } from "react";
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = (document.title = title);
    console.log(prevTitle);
    document.title = prevTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
