const LS_KEY = "Services";

function save(service){
    let data = read();
    data.push(service);
    let val= JSON.stringify(data);
    localStorage.setItem(LS_KEY,val);
}

function read(){
    let data = localStorage.getItem(LS_KEY);
    if(!data){
        return[];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}