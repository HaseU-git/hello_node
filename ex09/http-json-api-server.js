/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/25 22:09:51 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 02:58:02 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) =>
{
    res.on("error", (err) =>
    {
        console.error(err.message);
        return ;
    });
    if (req.method == "GET")
    {
        const url_object = new URL(req.url, `http://${req.headers.host}`)

        if (!url_object.searchParams.get('iso'))
        {
            console.error("url is invalid\n");
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("url is invalid\n");
            return ;
        }
        const parsed_time = new Date(url_object.searchParams.get('iso'));
        if (isNaN(parsed_time))
        {
            console.error("time is not ISO-format\n");
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("time is not ISO-format\n");
            return ;
        }
        let ret;
        switch(url_object.pathname)
        {
            case "/api/parsetime":
                ret = JSON.stringify(
                    {
                        hour: parsed_time.getUTCHours(),
                        minute: parsed_time.getUTCMinutes(),
                        second: parsed_time.getUTCSeconds(),
                    });
                break ;
            case "/api/unixtime":
                ret = JSON.stringify(
                    {
                        unixtime: parsed_time.getTime()
                    });
                break ;
            default:
                ret = null;
        }
        if (!ret)
        {
            console.log("url is invalid\n")
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("url is invalid\n");
        }
        else
        {
            console.log(ret + '\n');
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(ret + '\n');
        }
    }
});


if (process.argv.length != 3)
    console.error("Arguments are invalid");
else
{
   try
   {
       server.listen(parseInt(process.argv[2])).on("error", (err) =>
       {
           console.error(err.message);
       });
   }
   catch(err)
   {
        console.error(err.message);
   }
}
