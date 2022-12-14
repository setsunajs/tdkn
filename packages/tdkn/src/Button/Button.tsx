import { FC, jsx } from "setsunajs"
import { ACSSObject, C } from "@setsunajs/css/lib/setsunajs"
import {
  defaultStyle,
  disabledStyle,
  plainStyle,
  shapeStyle,
  sizeStyle,
  textStyle,
  variantStyle
} from "./button.style"
import { ButtonProps } from "./button.type"

export const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "middle",
  shape = "default",
  plain = false,
  text,
  disabled,
  atom,
  ...rest
}) => {
  let themeStyle: ACSSObject = {}
  if (disabled) {
    ;(rest as any).disabled = disabled
    themeStyle = disabledStyle(
      text ? "text" : plain ? "plain" : "variant",
      variant
    )
  } else if (text) {
    themeStyle = textStyle(variant)
  } else if (plain) {
    themeStyle = plainStyle(variant)
  } else {
    themeStyle = variantStyle(variant)
  }

  return () => (
    <C.button
      class="t-button"
      atom={[
        {
          ...defaultStyle(),
          ...sizeStyle(size),
          ...shapeStyle(shape),
          ...themeStyle
        },
        ...(atom ? (Array.isArray(atom) ? atom : [atom]) : [])
      ]}
      {...rest}
    >
      <children />
    </C.button>
  )
}
