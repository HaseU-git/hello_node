/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/23 02:38:08 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 03:26:37 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

let i = 0;
let ans = 0;
const len = process.argv.length;

i += 2;
while (i < len)
{
    ans += parseInt(process.argv[i]);
    i++;
}
console.log(ans)
