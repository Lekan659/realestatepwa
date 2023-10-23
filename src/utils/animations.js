export const containerVariants = (delay = 0) =>( {
    "offscreen":{
        opacity: 0,
        y: 30
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 2,
            delay
        }
    }
})

export const tagVariants = {
    "offscreen":{
        opacity: 0,
        y: 10
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 2
        }
    }
}

export const titleVariants = {
    "offscreen":{
        opacity: 0,
        y: 30
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 2.2
        }
    }
}

export const desVariants = {
    "offscreen":{
        opacity: 0,
        y: 20
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 2.6,
            delay: .2
        }
    }
}

export const tagVariantsres = {
    "offscreen":{
        opacity: 0,
        y: 10
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 3
        }
    }
}

export const titleVariantsres = {
    "offscreen":{
        opacity: 0,
        y: 30
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 3.2
        }
    }
}

export const desVariantsres = {
    "offscreen":{
        opacity: 0,
        y: 20
    },
    "onscreen":{
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            duration: 3.6,
            delay: .2
        }
    }
}