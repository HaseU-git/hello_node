/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/25 18:47:51 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 04:16:17 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const http = require('http');
const bl = require("bl");

function get_content(url)
{
    return new Promise(function(resolve, reject)
    {
        try
        {
            http.get(url, (res) =>
            {
                res.on("error", (err) =>
                {
                    reject(err.message); 
                });
                res.setEncoding('utf8');
                res.pipe(bl((err, data) =>
                {
                    if (err)
                        reject(err.message);
                    else
                        resolve(data.toString());
                }));
            }).on('error', (err) =>
            {
                reject(err.message);
            });
        }
        catch (err)
        {
            reject(err.message);
        }
    });
}

if (process.argv.length != 5)
    console.error("Arguments are invalid")
else
{
    let lst = [];
    let cnt = 0;

    while (cnt < 3)
    {
        lst.push(get_content(process.argv[cnt + 2]));
        cnt++;
    }
    Promise.all(lst).then((values) =>
    {
        let i = 0;

        while (i < lst.length)
        {
            console.log(values[i]);
            i++;
        }
    }, (reason) =>
    {
        console.error(reason);
    })    
}