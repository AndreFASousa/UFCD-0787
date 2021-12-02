function getData(){
    fetch('http://localhost:3000/gesalunos')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(function(err){
        alert('Ocorreu um erro')
    })
}