import { INumberColor } from "@/ts/interface";

import NumberOne from "./number-one";
import NumberTwo from "./number-two";
import NumberThree from "./number-three";
import NumberFour from "./number-four";
import NumberFive from "./number-five";

const Number = (obj: {index: number, color: INumberColor}) => {
    switch(obj.index){
        case 1:
            return <NumberOne color={obj.color} />
        case 2: 
            return <NumberTwo color={obj.color} />
        case 3:
            return <NumberThree color={obj.color} />
        case 4:
            return <NumberFour color={obj.color} />
        case 5:
            return <NumberFive color={obj.color} />
    }
}

export default Number;