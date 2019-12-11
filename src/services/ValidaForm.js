class FormValidator{
    valid(state){
        M.toast({"html":"Há campos inválidos!"});
        return false;
    }
}