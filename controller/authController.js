

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const Login = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        user.findOne ({ username: username, email: email, password: password })
        
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};