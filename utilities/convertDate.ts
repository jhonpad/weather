export const stringToDate = (value: string) => {
    const options = { weekday:"long", year:"numeric", month:"short"}
    const newDate = new Date(value)
    
    return newDate.toLocaleDateString('es-co',  { weekday:"long", year:"numeric", month:"long"})
}