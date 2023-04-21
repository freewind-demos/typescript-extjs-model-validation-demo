Ext.define('Student', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {name: 'Id', type: 'int'},
        'firstName',
        'lastName'
    ],
    validators: {
        firstName: 'presence',
        lastName: {type: 'length', min: 2}
    }
});

Ext.onReady(() => {
    const student = Ext.create('Student', {firstName: 'Freewind', lastName: 'L'});
    console.log({student, valid: student.isValid()});

    student.set('lastName', 'Lee');
    console.log({student, valid: student.isValid()});
});
