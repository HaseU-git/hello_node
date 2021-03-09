/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/23 02:54:57 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 03:35:51 by yhasegaw         ###   ########.fr       */
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
        let content = fs.readFileSync(process.argv[2]).toString();
        let ans = 0;
        let i = 0;
        
        while (i < content.length)
        {
            if (content[i] == '\n')
                ans++;
            i++;
        }
        console.log(ans);
    }
    catch(err)
    {
        console.log(err.message);
    }
}