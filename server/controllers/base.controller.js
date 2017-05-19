class BaseController {
    constructor() {
        this.actions = [];
        this.route = null;
    }

    setUpActions(route) {
        this.route = route;
        for (let act of this.actions) {
            var method = act['spec']['method'];
            route[method.toLowerCase()](act['spec']['path'], act['action']);
        }
    }

    addAction(spec, fn) {
        var newAct = {
            'spec': spec,
            action: fn,
        }
        this
            .actions
            .push(newAct)
    }

    handleCallback(res, err) {
        return new Promise(function (fulfill, reject) {
            try {
                if (err) {
                    res.send({
                        isSuccess: false,
                        errors: err
                    });
                    reject(error)
                } else {
                    fulfill();
                }
            } catch (error) {
                res.status(500).send(error)
                reject(error)
            }
        })
    }
}

module.exports = BaseController;