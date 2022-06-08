const ninjas = ['shaun', 'yoshi', 'mario', 'peach']

const formatNinjas = () => {
    let val = ''
    return ninjas.forEach(ninja => val+= ninja + ', ')
}


const greet = () => {

    console.log(ninjas[0] + ' says hello');
}

export { ninjas, greet }

