/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/25 15:59:16 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 04:12:59 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const http = require('http');
const bl = require("bl");


if (process.argv.length != 3)
    console.error("Arguments are invalid")
else
{
    try
    {
        http.get(process.argv[2], (res) =>
        {
            res.on("error", (err) =>
            {
                console.error(err.message); 
            });
            res.setEncoding('utf8');
            res.pipe(bl((err, data) =>
            {
                if (err)
                    console.error(err.message);
                else
                {
                    console.log(data.toString().length);
                    console.log(data.toString());
                }
            }));
        }).on('error', (err) =>
        {
            console.error(err.message);
        });
    }
    catch (err)
    {
        console.error(err.message);
    }
}