import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

interface Result {
  a: number;
  b?: number;
  option: string;
  result: number;
}

const HomePage = () => {
  const [result, setResult] = useState<Result | undefined>();
  const [option, setOption] = useState<string>('add');
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [err, setErr] = useState('');

  const checkButton = (): Boolean => {
    if (option === 'factorial') {
      return numberA === '' ? false : true;
    } else {
      return numberA === '' || numberB === '' ? false : true;
    }
  };

  const onclickResult = async () => {
    try {
      if (option === 'factorial') {
        const { data } = await axios.post(`http://localhost:5000/factorial`, {
          n: Number(numberA),
        });
        setResult({ a: Number(numberA), option: option, result: data.result });
        setNumberA('');
        setErr('');
      } else {
        const { data } = await axios.post(`http://localhost:5000/${option}`, {
          firstNumber: Number(numberA),
          secondNumber: Number(numberB),
        });
        setResult({
          a: Number(numberA),
          b: Number(numberB),
          option: option,
          result: data.result,
        });
        setNumberA('');
        setNumberB('');
        setErr('');
      }
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err.response?.data;
      data?.message && setErr(data.message);
      setResult(undefined);
    }
  };

  return (
    <div className='w-[100%] min-h-[100vh] bg-red-300 flex flex-col items-center justify-center pt-[20px]'>
      <p className='text-[60px] bold text-[#4141c9] pb-[30px]'>
        Fresher Sotatek - K3
      </p>
      <div className='w-[30%] min-h-[300px] bg-white rounded-3xl px-[50px] py-[20px] flex flex-col items-start '>
        <p className='text-[40px] pb-[20px] text-red-600 mx-auto'>Unit Test</p>
        <div className='w-[100%] h-[40px] flex justify-start items-center mb-[20px]'>
          <label className='text-[20px]'>Lựa chọn phép tính: </label>
          <select
            className='h-[40px] ml-[15px] px-[10px]'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setOption(e.target.value)
            }
          >
            <option value='add'>Cộng</option>
            <option value='subtraction'>Trừ</option>
            <option value='multiple'>Nhân</option>
            <option value='divide'>Chia</option>
            <option value='power'>Lũy thừa</option>
            <option value='factorial'>Giai thừa</option>
            <option value='logarit'>Logarit</option>
          </select>
        </div>
        <div className='flex flex-col items-start mb-[30px] '>
          <p className='text-[20px] mb-[10px]'>Nhập dữ liệu đầu vào :</p>
          {option === 'factorial' ? (
            <input
              type='type'
              className='w-[40%] h-[50px] px-[10px] text-[25px] border-[2px] border-solid border-[#8989da] rounded-[5px]'
              placeholder='n'
              value={numberA}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumberA(e.target.value.replace(/[^-?\d*\.{0,1}\d+$]/g, ''))
              }
            />
          ) : (
            <div className='flex flex-row justify-between items-center'>
              <input
                type='text'
                className='w-[40%] h-[50px] px-[10px] text-[25px] border-[2px] border-solid border-[#8989da] rounded-[5px]'
                placeholder='a'
                value={numberA}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberA(e.target.value.replace(/[^-?\d*\.{0,1}\d+$]/g, ''))
                }
              />
              <div className='w-[3px] h-[40px] bg-[#8989da]'></div>
              <input
                type='text'
                className='w-[40%] h-[50px] px-[10px] text-[25px] border-[2px] border-solid border-[#8989da] rounded-[5px]'
                placeholder='b'
                value={numberB}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberB(e.target.value.replace(/[^-?\d*\.{0,1}\d+$]/g, ''))
                }
              />
            </div>
          )}
        </div>
        <button
          className={`w-[100px] h-[50px] rounded-[10px] border-[2px] border-solid mx-auto mb-[15px] ${
            checkButton()
              ? 'border-[#424294] bg-yellow-600 hover:bg-[#424294] hover:text-[#F1F1F1]'
              : 'bg-[#F1F1F1cc]'
          }`}
          disabled={!checkButton()}
          onClick={() => onclickResult()}
        >
          <p className={`${!checkButton() && 'text-gray-400'}`}>Thực hiện</p>
        </button>
        {result && (
          <div style={{ color: 'green' }}>
            <p className='text-[20px] bold'>Option: {result.option}</p>
            <p className='text-[20px] bold'>{`${
              result.option === 'logarit' ||
              result.option === 'power' ||
              result.option === 'factorial'
                ? 'number'
                : 'a'
            } = ${result.a} ${
              result.option === 'logarit' || result.option === 'power'
                ? `, base = ${result.b}`
                : result.option === 'factorial'
                ? ''
                : `, b = ${result.b}`
            }`}</p>
            <p className='text-[20px] bold'>Kết quả: {Number(result.result)}</p>
          </div>
        )}
        {err && (
          <div style={{ color: 'red' }}>
            <p className='text-[20px] bold'>{err}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
