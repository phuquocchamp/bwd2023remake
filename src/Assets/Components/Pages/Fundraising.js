import { memo, useState } from 'react'
import '../../CSS/Fundraising.css';
import { useInView } from 'react-intersection-observer';


const AnimatedLeftToRight = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`animated-element ${inView ? 'animate-left-to-right' : ''}`}>
            {children}
        </div>
    );
};
const AnimatedRightToLeft = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`animated-element ${inView ? 'animate-right-to-left' : ''}`}>
            {children}
        </div>
    );
};

function Fundraising() {
    const [ho,setHo] = useState('');
    const [ten,setTen] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail] = useState('');
    const [money,setMoney] = useState(50000);
    const arr=[50,200,500,1000];
    function handleSubmit(e){
        // e.preventDefault();
        // //console.log(ho,ten,phoneNumber,money,email);
        // const data = {ho,ten,phoneNumber,money,email};
        // //post to server
        // fetch('http://127.0.0.1:5000/donate', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // }).then((response) => {console.log(response); alert("Thành công")})
        // .then(()=>{updateTotal()});
    }

    function updateTotal() {
        // fetch('http://127.0.0.1:5000/getDonations')
        // .then((response)=>response.json())
        // .then((res)=>{setTotal(res.reduce((overall,curr)=>(overall+curr.money),0))})
        // .then(()=>{console.log(total)});
    }
    updateTotal();

    function handleMoney(e){
        e.preventDefault();
        setMoney(e.target.value*1000);
    }

    function numberWithDot(number) {
        return number.toLocaleString().replace(/,/g, ".");
      }
    return (

        <div>
            <div className="fundraising" >
                &emsp;
                <AnimatedLeftToRight>
                <div className="container">
                    <h1 className='title'> Quyên góp</h1>
                    <h1 className='head-text'>QUỸ TRỒNG RỪNG VKU</h1>
                    <h3>Hãy đồng hành cùng chúng tôi bảo vệ rừng và đa dạng sinh học trên hành tinh.</h3>
                    <form onSubmit={handleSubmit}>
                    <div className='main-form'>
                        <div className='flname'>
                            <input type='text' placeholder='Họ' onChange={e=>setHo(e.target.value)} value={ho} required/>
                            <input type='text' placeholder='Tên' onChange={e=>setTen(e.target.value)} value={ten} required/>
                        </div>
                            <input type='text' placeholder='Điện thoại' onChange={e=>setPhoneNumber(e.target.value)} value={phoneNumber} required/>
                            <input type='Email' placeholder='Email' onChange={e=>setEmail(e.target.value)} value={email} required/>
                            <p>Chọn mức quyên góp</p>
                            <div className='radiolist'>
                                {arr.map((amount)=>(
                                    <button key={amount} value={amount} onClick={handleMoney} className={amount*1000===money?'selected':''}>{amount}k</button>
                                ))

                                }
                            </div>
                            <button type='submit'>Quyên góp</button>
                    </div>
                    </form>
                
                </div>
                </AnimatedLeftToRight>
                <AnimatedRightToLeft>
                <div className='total'>
                    <h2>Số tiền quyên góp được</h2>
                    <h1>{numberWithDot(0)}<br></br>VND</h1>
                </div>
                </AnimatedRightToLeft>
            </div>

        </div>
    );
}

export default memo(Fundraising);
