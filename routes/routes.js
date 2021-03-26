
const { Client } = require('pg');

const dataChatBox = require("../datas/chatbox")

const client = new Client({
    // user: "xwiovmqwszkcyu",
    // password: "d6b7341da9cc35fc39fad2c8f70fd9dfe5308c54b555c872ab25b26b26df6161",
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: true
    },
    max: Infinity,
    idleTimeoutMillis: 5000
});
console.log({ client })
// Router
const router = app => {
    //GET
    app.get('/scb_demo/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/scb_demo/status', (request, response) => {
        client.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
            client.query('SELECT * FROM table_status', (err, res) => {
                if (err) response.send({ success: false, detail: err });
                else {
                    const list = []
                    for (let row of res.rows) {
                        list.push(row)

                    }
                    let params = {
                        detail: list,
                        success: true
                    }
                    response.send(params);
                }
                // client.end();
            })
        });
    })

    app.get('/scb_demo/project', (request, response) => {
        let page = request.query.page > 0 ? parseInt(request.query.page) : 1;
        let limit = request.query.limit
        
        client.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
            if (limit) {
                client.query(`SELECT * FROM table_project`, (err, res) => {
                    if (err) response.send({ success: false, detail: err });
                    else {
                        const list = []
                        for (let row of res.rows) {
                            list.push(row)

                        }

                        let total_page = list.length / limit > parseInt(list.length / limit) ? parseInt(list.length / limit) + 1 : parseInt(list.length / limit)
                        let params = {
                            detail: list,
                            success: true
                        }
                        response.status(200);
                        let indexStart = page > 0 ? page - 1 : 0
                        let indexEnd = page > 0 ? parseInt(page) : 1
                        params.detail = list.slice(indexStart * limit, (indexEnd * limit) >= list.length ? list.length : indexEnd * limit)
                        params.total_record = list.length;
                        params.page = indexEnd
                        params.total_page = total_page > 0 ? total_page : 1

                        response.send(params);
                    }
                    // client.end();
                })
            }
            else {
                response.send({ success: false, detail: "missing params limit" });
            }

        });
    })

    app.get('/scb_demo/active', (request, response) => {
        client.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
            client.query('SELECT * FROM table_active', (err, res) => {
                if (err) response.send({ success: false, detail: err });
                else {
                    const list = []
                    for (let row of res.rows) {
                        list.push(row)

                    }
                    let params = {
                        detail: list,
                        success: true
                    }
                    response.send(params);
                }
                // client.end();
            })
        });
    })

    app.get('/scb_demo/users', async (request, response) => {
        let user_id = request.query.user_id
        let where = "";
        if (user_id) {
            where = " WHERE u.user_id=" + user_id
        }
        client.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
            client.query(`SELECT * FROM table_user u ${where}`, (err, res) => {
                if (err) response.send({ success: false, detail: err });
                else {
                    const list = []
                    for (let row of res.rows) {
                        list.push(row)

                    }
                    let status = request.query.status;
                    switch (status) {
                        case "1":
                            response.status(200);
                            list = list.filter(e => e.user_id == 1)
                            break;
                        case "2":
                            response.status(200);
                            list = list.filter(e => e.user_id == 2)
                            break;
                    }

                    let page = request.query.page;
                    let limit = request.query.limit
                    let total_page = list.length / limit > parseInt(list.length / limit) ? parseInt(list.length / limit) + 1 : parseInt(list.length / limit)

                    let params = {
                        detail: list.length > 0 ? list : null,
                        success: true
                    }
                    if (list.length > 1) {
                        if (limit) {
                            response.status(200);
                            let indexStart = page > 0 ? page - 1 : 0
                            let indexEnd = page > 0 ? parseInt(page) : 1
                            params.detail = list.slice(indexStart * limit, indexEnd * limit)
                            params.total_record = list.length;
                            params.page = indexEnd
                            params.total_page = total_page > 0 ? total_page : 1
                        }
                        else {
                            params = {
                                detail: "missing params limit !",
                                success: false
                            }
                        }
                    }
                    else {
                        if (list.length == 1) {
                            response.status(200);
                            params.detail = list[0]
                        }
                    }

                    response.send(params);
                }
            });
            // client.end();
        });

    });

    app.get('/scb_demo/monitor/list', async (request, response) => {
        let project = request.query.project;
        let status = request.query.status;
        let where = "";
        if (project || status) {
            if (project && status) {
                where = `WHERE m.project_id =${project} AND m.status_id =${status}`
            }
            else {
                if (project) {
                    where = `WHERE m.project_id =${project}`
                }
                else {
                    where = `WHERE m.status_id =${status}`
                }
            }
        }
        client.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
            client.query(`SELECT m.monitor_id ,
                                m.messages,
                                m.time_in,
                                m.time_out,
                                m.project_url AS agents_url,
                                p.project_name,
                                m.project_id,
                                a.active_text,
                                m.active_id,
                                s.status_text,
                                m.status_id
                            FROM table_monitor m
                            LEFT JOIN table_project p ON (p.project_id = m.project_id) 
                            LEFT JOIN table_active a ON (a.active_id = m.active_id) 
                            LEFT JOIN table_status s ON (s.status_id = m.status_id) 
                           ${where}
                            `,
                (err, res) => {
                    if (err) response.send({ success: false, detail: err });
                    else {
                        let list = []
                        for (let row of res.rows) {
                            list.push(row)
                        }
                        let page = request.query.page;
                        let limit = request.query.limit
                        let total_page = list.length / limit > parseInt(list.length / limit) ? parseInt(list.length / limit) + 1 : parseInt(list.length / limit)
                        let params = {
                            detail: list,
                            success: true
                        }
                        if (limit) {
                            response.status(200);
                            let indexStart = page > 0 ? page - 1 : 0
                            let indexEnd = page > 0 ? parseInt(page) : 1
                            params.detail = list.slice(indexStart * limit, indexEnd * limit)
                            params.total_record = list.length;
                            params.page = indexEnd
                            params.total_page = total_page > 0 ? total_page : 1
                        }
                        else {
                            params = {
                                detail: "missing params limit !",
                                success: false
                            }
                        }
                        // client.end();
                        response.send(params);
                    }

                })
        });

    });

    app.get('/scb_demo/chatbox', async (request, response) => {
        let list
        let chatbox_id = request.query.chatbox_id
        if (chatbox_id > 0) {
            list = dataChatBox.listAnswers.filter(e => e.chatbox_id == chatbox_id)
        }
        else {
            list = dataChatBox.list
        }
        let page = request.query.page;
        let limit = request.query.limit
        let total_page = list.length / limit > parseInt(list.length / limit) ? parseInt(list.length / limit) + 1 : parseInt(list.length / limit)

        let params = {
            detail: list.length > 0 ? list : null,
            success: true
        }
        if (chatbox_id > 0) {
            if (list.length > 0) {
                response.status(200);
                params.detail = list
            }
        }
        else {
            if (limit) {
                response.status(200);
                let indexStart = page > 0 ? page - 1 : 0
                let indexEnd = page > 0 ? parseInt(page) : 1
                params.detail = list.slice(indexStart * limit, indexEnd * limit)
                params.total_record = list.length;
                params.page = indexEnd
                params.total_page = total_page > 0 ? total_page : 1
            }
            else {
                params = {
                    detail: "missing params limit !",
                    success: false
                }
            }

        }

        response.send(params);

    });
    //POST
    app.post('/scb_demo/project', (request, response) => {
        const { project_id, project_name, project_url, project_type, project_status } = request.body;
        let where = ""
        if (!project_status > 0) {
            response.send({ success: false, detail: "missing project_status" });
        }
        else {

            if (project_type == 2 && (!project_url || project_url == "")) {
                response.send({ success: false, detail: "missing project_url" });
            }
            else {
                if (project_id) {
                    where = `UPDATE table_project SET ${project_status > 0 ? `project_status=${project_status},` : ""} ${project_type > 0 ? `project_type=${project_type},` : ""} ${project_name != "" ? `project_name='${project_name},'` : ""} ${project_url && project_url != '' ? "project_url=" + `'${project_url}'` : "project_url=NULL"} WHERE project_id = ${project_id};`;
                }
                else {
                    if (project_name != "" && project_type > 0 && project_status > 0 && project_url != "") {
                        where = `INSERT INTO table_project (  project_name, project_type, project_url,project_status  ) VALUES ('${project_name}',${project_type},'${project_url}',${project_status});`;
                    }
                    else {
                        response.send({ success: false, detail: "missing params !!!" });
                    }
                }
                if (where != "") {
                    client.connect(err => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        client.query(`${where}`, (err, res) => {
                            if (err) response.send({ success: false, detail: err });
                            else {
                                params = {
                                    detail: project_id ? "update success" : "add success !!",
                                    success: true
                                }
                                response.send(params);
                            }
                        })
                    })
                }
            }
        }
    })

    app.post('/scb_demo/monitor', (request, response) => {
        const { monitor_id, active_id } = request.body;
        let where = ""
        if (monitor_id) {
            where = `UPDATE table_monitor SET active_id=${active_id == 1 ? 2 : 1} WHERE monitor_id = ${monitor_id};`;
        }
        client.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
            client.query(`${where}`, (err, res) => {
                if (err) response.send({ success: false, detail: err });
                else {
                    params = {
                        detail: monitor_id ? "update success" : "add success !!",
                        success: true
                    }
                    response.send(params);
                }
            })
        })

    })
}

// Export the router
module.exports = router;
