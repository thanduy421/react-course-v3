import { toast } from "react-toastify";

const SingleColor = ({color, index, notifySuccess}) => {
    const {hex, weight} = color;
    async function copyToClipboard(text) {
      if(navigator.clipboard){
          try {
            await navigator.clipboard.writeText(text);
            notifySuccess('Text copied to clipboard');
          } catch (error) {
            toast.error('Failed to copy text: ', error);
          }
        } else {
          toast.error('clipboard is not available');
        }
      }
      
    const handleClick = () => {
        copyToClipboard(`#${hex}`)
    }

    return (
        <article style={{ background: `#${hex}` }}
                className={index > 4 ? "color color-light" : "color"}
                onClick={handleClick}
        >
            <p className="percent-value">
                {weight}%
            </p>
            <p className="color-value">#{hex}</p>
        </article>
    )
}

export default SingleColor;