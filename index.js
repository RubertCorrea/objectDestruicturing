const user ={
    id: 42,
    displayName: 'João',
    fullName:{
        firstName: 'João',
        lastName: 'Vitor',
    }
};
function userId({id}){
    return id;
}
function getFullName({fullName: {firstName: first, lartName: last}}){
    return '${first} ${last}';
}
userId(user);
//42
getFullName(user);
// João Vitor