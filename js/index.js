var listCars = [
    {
        id: 1,
        marca:'Volswawen',
        modelo:'E13',
        color: 'Rojo',
        years: 2019,
        praice: 230000
    }
];
var marca = '';
var modelo= '';
var color = '';
var years = '';
var praice= '';
var carToEdit = null;
var carToEditId = null;
var pivotList = null;
function printCars(){
    var table = document.getElementById('cars-tab-body');
    table.innerHTML = '';
    listCars.forEach((car) => {
        const td = `<tr>
                        <td>${car.id}</td>
                        <td>${car.marca}</td>
                        <td>${car.modelo}</td>
                        <td>${car.color}</td>
                        <td>${car.years}</td>
                        <td>$ ${car.praice}</td>
                        <td><button class='btn btn-success' onclick='preEditCar(${car.id})' data-toggle='modal' data-target='#editCar'>Editar</button></td>
                        <td><button class='btn btn-danger' onclick='preDeleteCar(${car.id})' data-toggle='modal' data-target='#deleteCar'>Borrar</button></td>
                    </tr>`;
        table.innerHTML += td;
    });
}

function resetTitleAdd(){
    document.getElementById('title-alert-add').className = '';
    document.getElementById('title-alert-add').innerHTML = '';
}

function addCar(){
    let marca = document.getElementById('marca_add').value;
    let modelo= document.getElementById('modelo_add').value;
    let color = document.getElementById('color_add').value;
    let years = document.getElementById('year_add').value;
    let praice= document.getElementById('praice_add').value;

    var idAsigna = listCars[listCars.length - 1].id + 1 || 1;

    const newCar = {
        id: idAsigna,
        marca: marca,
        modelo: modelo,
        color: color,
        years: years,
        praice: praice
    }
    
    listCars.push(newCar);
    document.getElementById('title-alert-add').className = 'alert alert-success';
    document.getElementById('title-alert-add').innerHTML = 'Auto Añadido';

    document.getElementById('marca_add').value = '';
    document.getElementById('modelo_add').value = '';
    document.getElementById('color_add').value = '';
    document.getElementById('year_add').value = '';
    document.getElementById('praice_add').value = '';

    printCars();
}

function preEditCar(id){
    const car = listCars.find((car) => car.id === id);
    document.getElementById('title-alert-edit').className = '';
    document.getElementById('title-alert-edit').innerHTML = '';

    document.getElementById('marca_edit').value = car.marca;
    document.getElementById('modelo_edit').value = car.modelo;
    document.getElementById('color_edit').value = car.color;
    document.getElementById('year_edit').value = car.years;
    document.getElementById('praice_edit').value = car.praice;

    carToEdit = car;
    carToEditId = car.id;
}

function editCar(){
    let pivotList = listCars;
    listCars = [];

    let marca = document.getElementById('marca_edit').value;
    let modelo= document.getElementById('modelo_edit').value;
    let color = document.getElementById('color_edit').value;
    let years = document.getElementById('year_edit').value;
    let praice= document.getElementById('praice_edit').value;
    
    const carEdited = {
        id: carToEditId,
        marca: marca,
        modelo: modelo,
        color: color,
        years: years,
        praice: praice
    }

    pivotList.forEach((cars) => {
        if (cars.id == carToEditId){
            listCars.push(carEdited);
        }else{
            listCars.push(cars);
        }
    });

    document.getElementById('title-alert-edit').className = 'alert alert-success';
    document.getElementById('title-alert-edit').innerHTML = 'Auto modificado';

    document.getElementById('marca_edit').value = '';
    document.getElementById('modelo_edit').value= '';
    document.getElementById('color_edit').value = '';
    document.getElementById('year_edit').value  = '';
    document.getElementById('praice_edit').value= '';

    carToEdit = null;
    carToEditId=null;

    printCars();
}

function preDeleteCar(id) {
    const car = listCars.find((car) => car.id === id);

    document.getElementById('title-alert-delete').className = '';
    document.getElementById('title-alert-delete').innerHTML = '';
    
    document.getElementById('marca_delete').value = car.marca;
    document.getElementById('modelo_delete').value = car.modelo;
    document.getElementById('color_delete').value = car.color;
    document.getElementById('year_delete').value = car.years;
    document.getElementById('praice_delete').value = car.praice;

    carToEditId = id;
}

function deleteCar(){
    let pivotList = listCars;
    listCars = [];
    pivotList.forEach((cars) =>{
        if(cars.id != carToEditId){
            listCars.push(cars);
        }
    })

    document.getElementById('title-alert-delete').className = 'alert alert-success';
    document.getElementById('title-alert-delete').innerHTML = 'Auto Eliminado';

    pivotList = null;
    printCars();
}

printCars();