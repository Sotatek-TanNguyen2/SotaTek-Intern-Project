import React ,{useState} from "react";

const HomePage = () => {
    const [resuilt, setResuilt] = useState<Number | undefined>();
    const [option, setOption] = useState<String>("");
    const [numberA,setNumberA] = useState<Number | undefined>();
    const [numberB,setNumberB] = useState<Number | undefined>();

    const onclickResuilt = (a : Number | undefined,b : Number |undefined, option: String) => {
        const data = {
            numberA : a,
            numberB : b,
            option : option,
        }
        console.log("data:",data);
    }
      
    return (
        <div className="w-[100%] min-h-[100vh] bg-red-300 flex flex-col items-center justify-center pt-[20px]">
            <p className="text-[60px] bold text-[#4141c9] pb-[30px]">Fresher Sotatek - K3</p>
            <div className="w-[30%] min-h-[300px] bg-white rounded-3xl px-[50px] py-[20px] flex flex-col items-start ">
                <p className="text-[40px] pb-[20px] text-red-600 mx-auto">Unit Test</p>
                <div className="w-[100%] h-[40px] flex justify-start items-center mb-[20px]">
                    <label className="text-[20px]">Lựa chọn phép tính: </label>
                    <select 
                        className="h-[40px] ml-[15px] px-[10px]"
                        onChange={(e)=> setOption(e.target.value)}
                    > 
                        <option>Cộng</option>
                        <option>Trừ</option>
                        <option>Nhân</option>
                        <option>Chia</option>
                        <option>Lũy thừa</option>
                        <option>Giai thừa</option>
                        <option>Logarit</option>
                </select>
                </div>
                <div className="flex flex-col items-start mb-[30px] "> 
                    <p className="text-[20px] mb-[10px]">Nhập dữ liệu đầu vào :</p>
                    { option === "Giai thừa" ? 
                        <input 
                        type="number" 
                        className="w-[40%] h-[50px] px-[10px] text-[25px] border-[2px] border-solid border-[#8989da] rounded-[5px]" 
                        placeholder="n"
                        // value={numberA}
                        // onChange={(e)=>setNumberA(e.target.value)}
                        />
                        :
                        <div className="flex flex-row justify-between items-center">
                            <input 
                                type="number" 
                                className="w-[40%] h-[50px] px-[10px] text-[25px] border-[2px] border-solid border-[#8989da] rounded-[5px]" 
                                placeholder="a"
                                // value={numberA}
                                // onChange={e=>setNumberA(e.target.value)}
                            />
                            <div className="w-[3px] h-[40px] bg-[#8989da]"></div>
                            <input 
                                type="number" 
                                className="w-[40%] h-[50px] px-[10px] text-[25px] border-[2px] border-solid border-[#8989da] rounded-[5px]" 
                                placeholder="b"
                                // value={numberB}
                                // onChange={(e)=>setNumberB(e.target.value)}
                            />
                        </div>
                    }
                    
                </div>
                <button 
                    className="w-[100px] h-[50px] bg-yellow-600 rounded-[10px] border-[2px] border-solid border-[#424294] hover:bg-[#424294] mx-auto mb-[15px]"
                    onClick={() => onclickResuilt(numberA ,numberB,option)}
                > 
                    Thực hiện
                </button>
                {
                    resuilt && <p className="text-[20px] bold">Kết quả: </p>
                }
            </div>
        </div>
    )
}

export default HomePage;