
export const index = (req, res) => res.send({action: 'index'});

export const store = (req, res) => {
    const {name, email, phone, password} = req.body;

    res.send({
        name: name,
        email: email,
        password: password,
        phone: phone
    });
};

export const show = (req, res) => res.send({action: 'show'});

export const update = (req, res) => res.send({action: 'update'});

export const forceDelete = (req, res) => res.send({action: 'delete'});

export const restore = (req, res) => res.send({action: 'restore'});