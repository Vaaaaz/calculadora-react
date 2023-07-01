import { useState } from 'react';


export default function Calculadora() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    const updatedExpression =
      value.match(/[+\-*/ˣ÷]/) && expression !== ''
        ? expression + ' ' + value + ' '
        : expression + value;
  
    setExpression(updatedExpression);
  };
  
  

  const handleClear = () => {
    setExpression('');
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      let replace = expression.replace("÷", "/").replace("ˣ", "*");
  
      if (replace.includes('%')) {
        const percentIndex = replace.lastIndexOf('%');
        const mainExpression = replace.slice(0, percentIndex);
  
        replace = mainExpression + '* (' + replace.slice(percentIndex + 1) + '/ 100)';
      }
  
      setExpression(eval(replace).toString());
    } catch (error) {
      setExpression('Erro!');
    }
  };

  return (
    <div className="w-1/4 mx-auto mt-10 bg-white rounded-lg shadow-lg p-4" style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}>
      <div className="mb-4">
        <input className="w-full border border-gray-300 p-2 rounded-lg text-lg tracking-tight " type="text" value={expression} readOnly />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={handleClear}>C</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={handleDelete}>⇽</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('%')}>%</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('÷')}>÷</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('7')}>7</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('8')}>8</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('9')}>9</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('ˣ')}>X</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('4')}>4</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('5')}>5</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('6')}>6</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('-')}>-</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('1')}>1</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('2')}>2</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('3')}>3</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg  " onClick={() => handleClick('+')}>+</button>
        <button className="bg-numeros hover:bg-[#39404c] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('0')}>0</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg " onClick={() => handleClick('.')}>,</button>
        <button className="bg-outros hover:bg-[#cf7500c0] text-white font-bold py-2 px-4 rounded-lg col-span-2 " onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}