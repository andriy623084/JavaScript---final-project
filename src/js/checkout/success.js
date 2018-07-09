function getDataUser() {
    var emptyStringToShowUserInfo = '';
    var UserInforShow = document.getElementById('success-address');
    var dataS = localStorage.getItem('user');
    var collectDataFromLocalStorage = JSON.parse(dataS);
    emptyStringToShowUserInfo = collectDataFromLocalStorage.Username +'<br>'+ collectDataFromLocalStorage.Lastname +'<br>'+ collectDataFromLocalStorage.UserEmail+'<br>'+collectDataFromLocalStorage.UserAddress+'<br>'+collectDataFromLocalStorage.UserZip+'<br>'+collectDataFromLocalStorage.UserPhone;
    UserInforShow.innerHTML = emptyStringToShowUserInfo;
    localStorage.removeItem("userdata1");
    localStorage.removeItem("userdata2");
    localStorage.removeItem("userdata3")
}
