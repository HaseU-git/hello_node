/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   vars.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yhasegaw <yhasegaw@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/23 02:16:45 by yhasegaw          #+#    #+#             */
/*   Updated: 2021/01/27 03:22:53 by yhasegaw         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

let ans_list = ["42", 42, {42: "42"}, true, undefined]

console.log( ans_list[0] + " is a " + typeof ans_list[0] + '.');
console.log( ans_list[1] + " is a " + typeof ans_list[1] + '.');
console.log( ans_list[2]["42"] + " is an " + typeof ans_list[2] + '.');
console.log( ans_list[2] + " is an " + typeof ans_list[2] + '.');
console.log( ans_list[3] + " is a " + typeof ans_list[3] + '.');
console.log( ans_list[4] + " is an " + typeof ans_list[4] + '.');