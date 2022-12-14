import { ACSSObject } from "@setsunajs/css"
import { fontSize, SIZE } from "../constants/size"
import { radius } from "../constants/radius"
import { ButtonShape, ButtonVariant } from "./button.type"
import { gray, primary, red } from "../constants/color"

const _defaultStyle: ACSSObject = {
  fontWeight: "400",
  userSelect: "none",
  outline: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px"
}
export const defaultStyle = () => _defaultStyle

const _sizeStyle: Record<string, ACSSObject> = {
  small: {
    fontSize: fontSize.small,
    height: "24px",
    minWidth: "24px",
    padding: "8px"
  },
  middle: {
    fontSize: fontSize.middle,
    height: "32px",
    minWidth: "32px",
    padding: "0 16px"
  },
  large: {
    fontSize: fontSize.large,
    height: "40px",
    minWidth: "40px",
    padding: "0 16px"
  }
}
export const sizeStyle = (size: SIZE) => _sizeStyle[size]

const _shapeStyle: Record<string, ACSSObject> = {
  default: { borderRadius: radius.basic },
  circle: { borderRadius: radius.circle, paddingLeft: "0", paddingRight: "0" },
  round: { borderRadius: radius.rounded }
}
export const shapeStyle = (shape: ButtonShape) => _shapeStyle[shape]

const _variantStyle: Record<string, ACSSObject> = {
  default: {
    color: gray["title"],
    background: gray[1],

    borderColor: gray[5],
    borderWidth: "1px",
    borderStyle: "solid",

    ":hover": {
      color: primary[5],
      background: primary[1],
      borderColor: primary[5]
    },

    ":active": {
      color: primary[7],
      borderColor: primary[7]
    }
  },
  "disabled-default": {
    color: gray[6],
    background: gray[4],

    borderColor: gray[4],
    borderWidth: "1px",
    borderStyle: "solid"
  },
  danger: {
    color: gray[1],
    background: red[6],

    borderColor: red[6],
    borderWidth: "1px",
    borderStyle: "solid",

    ":hover": {
      background: red[5],
      borderColor: red[5]
    },

    ":active": {
      background: red[7],
      borderColor: red[7]
    }
  },
  "disabled-danger": {
    color: gray[1],
    background: red[3],
    borderColor: red[2],
    borderWidth: "1px",
    borderStyle: "solid"
  },
  primary: {
    color: gray[1],
    background: primary[6],

    borderColor: primary[6],
    borderWidth: "1px",
    borderStyle: "solid",

    ":hover": {
      background: primary[5],
      borderColor: primary[5]
    },

    ":active": {
      background: primary[7],
      borderColor: primary[7]
    }
  },
  "disabled-primary": {
    color: gray[1],
    background: primary[3],
    borderColor: primary[2],
    borderWidth: "1px",
    borderStyle: "solid"
  }
}
export const variantStyle = (variant: ButtonVariant) => _variantStyle[variant]

const _plainStyle: Record<string, ACSSObject> = {
  default: {
    color: gray["title"],
    background: gray[1],

    borderColor: gray[5],
    borderWidth: "1px",
    borderStyle: "solid",

    ":hover": {
      color: primary[5],
      borderColor: primary[5]
    },

    ":active": {
      color: primary[7],
      borderColor: primary[7]
    }
  },
  "disabled-default": {
    color: gray[6],
    background: gray[1],

    borderColor: gray[4],
    borderWidth: "1px",
    borderStyle: "solid"
  },
  danger: {
    color: red[6],
    background: red[1],

    borderColor: red[5],
    borderWidth: "1px",
    borderStyle: "solid",

    ":hover": {
      color: gray[1],
      background: red[6],
      borderColor: red[6]
    },

    ":active": {
      color: gray[1],
      background: red[7],
      borderColor: red[7]
    }
  },
  "disabled-danger": {
    color: red[3],
    background: red[1],
    borderColor: red[2],
    borderWidth: "1px",
    borderStyle: "solid"
  },
  primary: {
    color: primary[6],
    background: primary[1],

    borderColor: primary[5],
    borderWidth: "1px",
    borderStyle: "solid",

    ":hover": {
      color: gray[1],
      background: primary[6],
      borderColor: primary[6]
    },

    ":active": {
      color: gray[1],
      background: primary[7],
      borderColor: primary[7]
    }
  },
  "disabled-primary": {
    color: primary[3],
    background: primary[1],
    borderColor: primary[2],
    borderWidth: "1px",
    borderStyle: "solid"
  }
}
export const plainStyle = (variant: ButtonVariant) => _plainStyle[variant]

const _textStyle: Record<string, ACSSObject> = {
  default: {
    paddingLeft: "0px",
    paddingRight: "0px"
  },
  primary: {
    color: primary[6],
    ":hover": {
      color: primary[5]
    },
    ":active": {
      color: primary[7]
    }
  },
  "disabled-primary": {
    color: primary[3]
  },
  danger: {
    color: red[6],
    ":hover": {
      color: red[5]
    },
    ":active": {
      color: red[7]
    }
  },
  "disabled-danger": {
    color: red[3]
  }
}
export const textStyle = (variant: ButtonVariant) => {
  return Object.assign(
    _textStyle["disabled-" + (variant === "default" ? "primary" : variant)],
    _textStyle.default
  )
}

export const disabledStyle = (
  type: "text" | "plain" | "variant",
  variant: ButtonVariant
) => {
  let style = {}
  if (type === "text") {
    style =
      _textStyle["disabled-" + (variant === "default" ? "primary" : variant)]
  } else if (type === "plain") {
    style = _plainStyle["disabled-" + variant]
  } else if (type === "variant") {
    style = _variantStyle["disabled-" + variant]
  } else {
    style = {}
  }

  return Object.assign(style ?? {}, { cursor: "not-allowed" })
}
