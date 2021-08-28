var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const { setFlagsFromString } = require('v8');

function templateHTML(title, list, body, control) {
    return ` 
        <!doctype html>
        <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${control}
            ${body}
        </body>
        </html>
    `;
}

function templateList(filelist) {

    var list = '<ul>';
    var i = 0;
    while(i < filelist.length) {
        list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    list = list + '</ul>';

    return list;
}

var app = http.createServer(
    function(request, response) {
        var _url = request.url;
        var queryData = url.parse(_url, true).query;
        var pathname = url.parse(_url, true).pathname;

        if (pathname === '/') {
            if (queryData.id === undefined) { 
                fs.readdir('./data', function(error, filelist) {
                    var title = 'Welcome';
                    var description = 'Hello, Node.js';
                    
                    var list = templateList(filelist);

                    var template = templateHTML(title, list,
                        `<h2>${title}</h2>${description}`, `
                        <a href="/create">Create</a>`
                    );
                    
                    response.writeHead(200);
                    response.end(template);
                });
            } else {
                fs.readdir('./data', function(error, filelist) {
                    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                        var title = queryData.id;

                        var list = templateList(filelist);
                        
                        var template = templateHTML(title, list,
                            `<h2>${title}</h2>${description}`,
                            `<a href="/create">Create</a> <a href="/update?id=${title}">Update</a>`
                        );
                        
                        response.writeHead(200);
                        response.end(template);
                    });
                });
            }
        } else if(pathname === '/create') {
            
            fs.readdir('./data', function(error, filelist) {
                var title = 'WEB - Create';
                
                var list = templateList(filelist);

                var template = templateHTML(title, list,` 
                    <form action="http://localhost:3000/create_process" method="POST">
                        <p><input type="text" name="title" placeholder="title"></p>
                        <p>
                            <textarea name="description" placeholder="description"></textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form> 
                `,'');
                
                response.writeHead(200);
                response.end(template);
            });
        } else if(pathname === '/create_process') {
            var body = '';

            request.on('data', function(data) {
                body += data;
            });

            request.on('end', function() {
                var post = qs.parse(body);
                var title = post.title;
                var description = post.description;

                fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
                    response.writeHead(302, {Location: `/?id=${title}`});
                    response.end('success');
                });
            });

        } else {
            response.writeHead(404);
            response.end('Not found');
        }
    }
);
app.listen(3000);
