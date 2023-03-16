import {useContext} from 'react'
import { UiContext } from "@/context";




const useUI = () => useContext(UiContext);


export default useUI;