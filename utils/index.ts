export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b3120653e6msh8597fa76829a8c9p172a21jsn82f3b68dd24e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json()
    return result
}