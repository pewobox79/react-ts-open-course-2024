export type ColorPalete = "red" | "yellow" | "blue";
export type ColorPaleteRGBA = "rgba(255,255,255,1)" | "rgba(200,150,120,1)"

type ButtonTypes = {
    text?: "Download" | "Login" | "Save",
    style: React.CSSProperties & {color: ColorPalete | ColorPaleteRGBA, backgroundColor: ColorPalete},
    action: () => void,
    children: React.ReactElement[] | React.ReactElement
}


function Button({ text = "Login", style, action, children }: ButtonTypes) {

    return (
        <button
            onClick={action}
            style={style}
        >
            {children ? children : text}
        </button>
    )
}

export default Button