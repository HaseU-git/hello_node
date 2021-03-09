/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/25 02:38:32 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 03:59:00 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

"use strict";

const http = require("http");

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
            res.setEncoding("utf8");
            res.on("data", (chunk) =>
            {
                console.error(chunk);
            });
        }).on("error", (err) =>
        {
            console.error(err.message);
        });
    }
    catch (err)
    {
        console.error(err.message);
    }
}