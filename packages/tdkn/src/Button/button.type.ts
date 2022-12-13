import { ACSSObject } from "@setsunajs/css/lib/setsunajs"
import { Attributes } from "setsunajs"
import { SIZE } from "../constants/size"

export type ButtonVariant = "primary" | "danger" | "default"

export type ButtonShape = "round" | "circle" | "default"

export type ButtonProps = {
  variant?: ButtonVariant
  size?: SIZE
  shape?: "round" | "circle" | "default"
  plain?: boolean
  text?: boolean
  atom?: ACSSObject
} & Attributes<"button">
