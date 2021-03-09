/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/25 19:51:22 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 02:58:43 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const net = require("net");

function make_ret()
{
    const date = new Date();

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2); 
    const hours = ('0' + date.getHours()).slice(-2); 
    const minutes = ('0' + date.getMinutes()).slice(-2); 
    return (year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
}

const server = net.createServer((c) =>
{
    c.on("error", (err) =>
    {
        console.log(err.message);
    });
    c.on("data",() =>
    {
        c.end(make_ret());
    });
})




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
    catch (err)
    {
        console.error(err.message);
    }
}


