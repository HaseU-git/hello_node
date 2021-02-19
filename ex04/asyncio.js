/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/23 05:03:46 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 03:42:51 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const fs = require("fs");

if (process.argv.length != 3)
    console.log("Arguments are invalid")
else
{
    try
    {
        fs.readFile(process.argv[2], "utf8", (err, data) =>
        {
            if (err)
            {
                console.log(err.message);
            }
            else
            {
                let ans = 0;
                let i = 0;
                
                while (i < data.length)
                {
                    if (data[i] == '\n')
                        ans++;
                    i++;
                }
                console.log(ans);
            }
        });
    }
    catch (err)
    {
        console.log(err.message);
    }
}