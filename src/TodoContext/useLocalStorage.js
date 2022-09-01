import React from "react";

function useLocalStorage (itemName, initialValue){
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const [item, setItem] = React.useState(initialValue)

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        
        if (!localStorageItem) {
          // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existen TODOs en el localStorage los regresamos como nuestros todos
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }

    }, 500)
  })
  
  const saveItem = (newItem) => {
    try {
      const stringifiedTdos = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedTdos)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }