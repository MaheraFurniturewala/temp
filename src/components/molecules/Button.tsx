import { Button as Btn, ButtonProps } from "@chakra-ui/react"

const Button = ({
    children,
    icon,
    variant,
    buttonProps
}: {
    children: string
    icon?: JSX.Element
    variant?: string
    buttonProps?: ButtonProps
}) => {
    return (
        <Btn
            size="sm"
            leftIcon={icon}
            variant={variant ? variant : "solid"}
            aria-label={children}
            {...buttonProps}>
            {children}
        </Btn>
    )
}

export default Button
