import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

const ColorList = ({colors, notifySuccess}) => {
    return (
        <section className="colors">
        {colors.map((color, index) => {
            return <SingleColor color={color} key={nanoid()} 
                index ={index} notifySuccess={notifySuccess}/>
        })}
      </section>
    )
}

export default ColorList;