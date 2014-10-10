/*
 * File: app/store/Accounts.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Accounts', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Account'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                Nickname: 'Personal1',
                Balance: '$100,000 ',
                AccountNo: 'AAA 123-123401',
                Recent: 'no',
                Bank: 'MS'
            },
            {
                Nickname: 'Joint1',
                Balance: '$400,000 ',
                AccountNo: 'Chase Sav. 1236-3123',
                Recent: 'no',
                Bank: 'other'
            },
            {
                Nickname: 'JointSon',
                Balance: '$30,000 ',
                AccountNo: 'IRA 987-987601',
                Recent: 'yes',
                Bank: 'MS'
            },
            {
                Nickname: 'Family',
                Balance: '$45,000 ',
                AccountNo: 'IRA 987-987602',
                Recent: 'yes',
                Bank: 'MS'
            },
            {
                Nickname: 'Salary',
                Balance: '$320,000 ',
                AccountNo: 'IRA 987-987603',
                Recent: 'yes',
                Bank: 'MS'
            },
            {
                Nickname: 'Self',
                Balance: '$124,000 ',
                AccountNo: 'Chase Chk. 1236-6631782',
                Recent: 'yes',
                Bank: 'MS'
            },
            {
                Nickname: 'Investment',
                Balance: '$24,500 ',
                AccountNo: 'AAA 123-123400',
                Recent: 'yes',
                Bank: 'other'
            },
            {
                Nickname: 'Household1',
                Balance: '$300,000 ',
                AccountNo: 'AAA 123-1234230',
                Recent: 'yes',
                Bank: 'other'
            },
            {
                Nickname: 'Household2',
                Balance: '$453,000 ',
                AccountNo: '529 987-123401',
                Recent: 'yes',
                Bank: 'other'
            },
            {
                Nickname: 'Retirement',
                Balance: '$67,000 ',
                AccountNo: '529 987-12340121',
                Recent: 'yes',
                Bank: 'other'
            },
            {
                Nickname: 'Personal2',
                Balance: '$68,900 ',
                AccountNo: '529 987-1234012',
                Recent: 'yes',
                Bank: 'other'
            }
        ],
        groupField: 'Recent',
        model: 'MyApp.model.Account',
        storeId: 'accounts'
    }
});