import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

// the hook closes the open window when clicked outside the window
export const useOuside = (initialIsVisible: boolean): TypeOut => {
    const [ isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef<HTMLElement>(null)

    const handleClickOuside = ( event: any) => {
        if(ref.current && !ref.current.contains(event.target)){
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOuside, true)
        return () => {
            document.removeEventListener("click", handleClickOuside, true);
        }
    })
    return { ref, isShow, setIsShow}
}

/** example
const {ref, isShow, setIsShow} = useOuside(false)

*/