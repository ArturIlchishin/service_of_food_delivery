import {motion} from "framer-motion";
import {ReactNode} from "react";

interface IChildren {
    children: ReactNode
}

const animations = {
    initial: {opacity: 1, y: 800},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 1, y: 800,},
}

export const AnimatedCard = ({children} : IChildren) => {
    return (
        <motion.div variants={animations}
                    initial={"initial"}
                    animate={'animate'}
                    exit={'exit'}
                    transition={{duration: 1}}
        >
            {children}
        </motion.div>
    )
}