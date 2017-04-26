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

    excuteDb(res, spec) {
        try {
            spec.model[spec.method](spec.options).then((doc, count) => {
                if (doc.errors) {
                    console.log(err);
                } else {
                    if (spec.callback) {
                        spec.callback(doc);
                    }
                }
            });
        } catch (error) {
            res.status(500).send('error')
        }
    }
}

module.exports = BaseController;