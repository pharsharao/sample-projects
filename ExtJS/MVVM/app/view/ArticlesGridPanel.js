/*
 * File: app/view/ArticlesGridPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ArticlesGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.articlesgrid',

    requires: [
        'MyApp.view.ArticlesGridPanelViewModel',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    config: {
        author: null
    },

    viewModel: {
        type: 'articlesgridpanel'
    },
    publishes: [
        'selection'
    ],
    hideHeaders: true,
    store: 'Articles',

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                return '<h2 style="color:#64BD4F;">' + value + '</h2>' + 'Published By <span style="font-size:1.3em;color:#7495AB;">' + record.get('author') + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Published On <span style="font-size:1.3em;color:#7495AB;">' + record.get('date') + '</span>';
            },
            dataIndex: 'title',
            text: 'Title',
            flex: 1
        }
    ],

    updateAuthor: function(newVal, oldVal) {
        this.getStore().load({url: 'http://touchdemo.walkingtree.in/Training/?json=get_posts&author='+ newVal.get('id') + '&count=20'});
    }

});