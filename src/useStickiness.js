import { useEffect, useState } from "react";

const useStickiness = (ref, endingRef) => {
    const [lower, setLower] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [myOffsetTop, setMyOffsetTop] = useState(10);
    useEffect(() => {
    
        const handleScroll = () => {
          let endingOffset
          if(endingRef !== undefined && endingRef.current) {
            const {offsetTop} = endingRef.current;
            endingOffset = offsetTop
          }
          if (ref.current) {
            if(!lower) {
              const {offsetTop} = ref.current;
              setMyOffsetTop(offsetTop)
            }
            console.log(endingOffset)
            setIsSticky(window.scrollY > myOffsetTop && window.scrollY < endingOffset)
          
            if(window.scrollY > myOffsetTop && window.scrollY < endingOffset){
              setLower(true)
            } else {
              setLower(false)
            }
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      })

    return [isSticky]
}
export default useStickiness