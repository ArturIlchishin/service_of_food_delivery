import { motion } from "framer-motion"
import {ReactNode} from "react";

interface IChildren {
    children: ReactNode
}

const animations = {
    initial: {opacity: 0, x: -300},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -300,},
}

export const AnimatedComponent = ({children} : IChildren) => {
    return (
        <motion.div variants={animations}
                    initial={"initial"}
                    animate={'animate'}
                    exit={'exit'}
                    transition={{duration: 0.85}}
                    >
            {children}
        </motion.div>
    )
}