import { ACSSObject, C } from "@setsunajs/css/lib/setsunajs"
import {
  Attributes,
  FC,
  jsx,
  SeElement,
  useEffect,
  useMount,
  useRef,
  useState
} from "setsunajs"
import { gray, primary } from "../constants/color"
import { radius } from "../constants/radius"
import { fontSize, SIZE } from "../constants/size"

type InputAttributes = Omit<Attributes<"input">, "type" | "prefix">
export type InputProps = {
  size?: SIZE
  disabled?: boolean
  border?: boolean
  password?: boolean

  allowClear?: boolean
  onClear?: (value: string) => boolean | string

  defaultValue?: string

  maxlength?: number
  showCount?: boolean

  prefix?: SeElement<any, any> | number | string
  suffix?: SeElement<any, any> | number | string

  addonAfter?: SeElement<any, any> | number | string
  addonBefore?: SeElement<any, any> | number | string

  errorStatus?: string

  inputAtom?: ACSSObject | ACSSObject[]
  containerAtom?: ACSSObject | ACSSObject[]
  containerAttrs?: Attributes<"input">
} & InputAttributes

export const Input: FC<InputProps> = ({
  size,
  disabled,
  border,
  password = false,
  allowClear = false,
  onClear,
  defaultValue,
  maxlength,
  showCount,
  prefix,
  suffix,
  addonAfter,
  addonBefore,
  errorStatus,
  inputAtom,
  containerAtom,
  containerAttrs = {},

  onBlur,
  onFocus,
  ...rest
}) => {
  const inputRef = useRef<HTMLElement | null>(null)[0]
  const [force, setForce] = useState(false)

  useMount(() => {
    const input = inputRef()!

    const onFocus = (e: FocusEvent) => {
      setForce(true)
      // onFocus(e)
    }
    input.addEventListener("focus", onFocus)

    const onBlur = (e: FocusEvent) => {
      setForce(false)
      // onBlur(e)
    }
    input.addEventListener("blur", onBlur)

    return () => {
      input.removeEventListener("focus", onFocus)
      input.removeEventListener("blur", onBlur)
    }
  })

  useEffect([force], v => {
    console.log(force() ? primary[5] : gray[5] )
  })

  return () => (
    <C.div
      {...containerAttrs}
      class="t-input"
      atom={[
        {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: force() ? primary[5] : gray[5],
          borderRadius: radius.basic,
          overflow: "hidden",
          ":hover": {
            borderColor: primary[5]
          }
        },
        ...(containerAtom
          ? Array.isArray(containerAtom)
            ? containerAtom
            : [containerAtom]
          : [])
      ]}
    >
      {addonBefore && addonBefore}
      <div class="t-input-inner">
        {prefix && <div class="t-input-prefix">{prefix}</div>}
        <C.input
          {...rest}
          type={password ? "password" : "text"}
          atom={[
            {
              padding: "0px 12px",
              height: "32px",
              textOverflow: "ellipsis",
              color: gray.title,
              fontSize: fontSize.middle,
              border: "none",
              outline: "none"
            },
            ...(inputAtom
              ? Array.isArray(inputAtom)
                ? inputAtom
                : [inputAtom]
              : [])
          ]}
          ref={inputRef}
        />
        {suffix && <div class="t-input-suffix">{suffix}</div>}
      </div>
      {addonAfter && addonAfter}
    </C.div>
  )
}

// export const InputTextArea: FC = () => {
//   return () => <div></div>
// }
