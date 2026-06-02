import { useState, useEffect } from 'react';
// PASO: Implementar el custom hook useLocalStorage
// Debe funcionar igual que useState pero persistir en localStorage
// Referencia: ver hooks-personalizados/useLocalStorage/useLocalStorage.jsx
const useLocalStorage = (clave, valorInicial) => {
  // PASO 1: Crear estado con useState con inicialización lazy
  // Leer de localStorage la clave, si no existe usar valorInicial
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });
  // PASO 2: Usar useEffect para guardar en localStorage cuando cambie el valor
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);
  // PASO 3: Retornar [valor, setValor] igual que useState
  return [valor, setValor];
};
export default useLocalStorage;