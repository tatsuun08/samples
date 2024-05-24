let lst = [];

for (let i = 0; i < 10; i++){
    lst.push(Math.random()*10);
}

console.log(lst);

console.log(my_sort(lst));

function my_sort(lst){
    let t;
    for (let i = 0; i < lst.length; i++){
        let max = i;
        for (let j = i; j < lst.length; j++){
            if (lst[max] < lst[j]){
                max = j;
            }
        }
        t = lst[i];
        lst[i] = lst[max];
        lst[max] = t;
    }
    return lst;
}