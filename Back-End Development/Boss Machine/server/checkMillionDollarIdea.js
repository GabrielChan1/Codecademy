const checkMillionDollarIdea = (req, res, next) => {
    try {
        const idea = req.body;
        const profit = Number(idea.numWeeks) * Number(idea.weeklyRevenue);
        if (profit >= 1000000) {
            next();
        }
        else {
            return res.status(400).send();
        }
    }
    catch(err) {
        return res.status(400).send(err.message);
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
