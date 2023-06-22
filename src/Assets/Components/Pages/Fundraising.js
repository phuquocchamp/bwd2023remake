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
const AnimatedBottomToTop = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`animated-element ${inView ? 'animate-bottom-to-top' : ''}`}>
            {children}
        </div>
    );
};

function Fundraising() {
    const [ho,setHo] = useState('');
    const [ten,setTen] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail] = useState('');
    const arr=[50,200,500,1000];
    const [amount,setAmount]=useState(50000);
    return (

        <div>
            <div className="fundraising" >
                &emsp;
                <AnimatedLeftToRight>
                <div className="container">
                    <h1 className='title'> Quyên góp</h1>
                    <h1 className='head-text'>QUỸ TRỒNG RỪNG VKU</h1>
                    <h3>Hãy đồng hành cùng chúng tôi bảo vệ rừng và đa dạng sinh học trên hành tinh.</h3>
                    <div className='main-form'>
                        <div className='flname'>
                            <input type='text' placeholder='Họ' onChange={e=>setHo(e.target.value)} value={ho} required/>
                            <input type='text' placeholder='Tên' onChange={e=>setTen(e.target.value)} value={ten} required/>
                        </div>
                            <input type='text' placeholder='Điện thoại' onChange={e=>setPhoneNumber(e.target.value)} value={phoneNumber} required/>
                            <input type='Email' placeholder='Email' onChange={e=>setEmail(e.target.value)} value={email} required/>
                            <p>Chọn mức quyên góp</p>
                            <div className='radiolist'>
                                {arr.map((money)=>(
                                    <button key={money} value={money} 
                                    className={money*1000===amount?'selected':''} 
                                    onClick={(e)=>{
                                        setAmount(e.target.value*1000);
                                    }}>{money}k</button>
                                ))

                                }
                            </div>
                            <button type='button' onClick={()=>{console.log(1)}}>Quyên góp</button>
                    </div>
                
                </div>
                </AnimatedLeftToRight>

                <br></br> <br></br> <br></br> 
            </div>


        </div>
    );
}

export default memo(Fundraising);
