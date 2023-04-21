Ext.define('Student', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {name: 'Id', type: 'int'},
        'firstName',
        'lastName'
    ]
});

Ext.onReady(() => {
    const student = Ext.create('Student', {firstName: 'Freewind', lastName: 'Lee'});
    console.log("### student", student)
    new Ext.Panel({
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello world',
        html: `Hello ${student.get('firstName')}.${student.get('lastName')}`
    })
});
