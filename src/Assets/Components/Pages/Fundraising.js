import { memo } from 'react'
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
    return (

        <div>
            <div className="fundraising" >
                &emsp;
                <AnimatedLeftToRight>
                    <div className="contact">
                        <div className='row'>
                            <img className='fundraising_head_img' src='external/donation_head.jpg'></img>
                            <div className='fundraising_text'>
                                <h1 className='head_text'>
                                    Quyên góp
                                </h1>
                                <br></br><br></br>
                                <h3 className='head_description'>
                                Chúng ta cần sự hỗ trợ của mọi người để bảo vệ rừng, hãy cùng nhau quyên góp và hành động để bảo vệ nguồn tài nguyên quý giá này. Rừng là những long trọng của trái đất, nó cung cấp cho chúng ta không chỉ không khí trong lành và nguồn nước sạch mà còn là môi trường sống cho hàng triệu loài sinh vật.
                                <br></br>
                                Tuy nhiên, rừng của chúng ta đang đối mặt với nhiều mối đe dọa. Sự phá hủy rừng, khai thác trái phép và biến đổi khí hậu đã và đang gây ra sự suy giảm diện tích rừng và mất môi trường sống của các loài. Hậu quả của việc mất rừng là nghiêm trọng, không chỉ đe dọa sự đa dạng sinh học mà còn ảnh hưởng đến cuộc sống và kinh tế của chúng ta.
                                <br></br>
                                Chúng ta có trách nhiệm hành động ngay bây giờ. Mỗi đóng góp nhỏ cũng có thể tạo ra sự khác biệt lớn. Hãy cùng quyên góp thời gian, tiền bạc và tài nguyên của chúng ta để bảo vệ rừng. 
                                </h3> 
                            </div>
                        </div>
                    </div>
                </AnimatedLeftToRight>
                <div className="container">
                    <h1 style={{color: "lightgreen"}}> Quyên góp</h1>
                    <br></br>
                    <h1 className='head-text'>VÌ MỘT MÔI TRƯỜNG XANH SẠCH ĐẸP</h1>
                    <br></br>
                    <h3>Số tiền của bạn có thế cứu lấy thế giới. Hãy cùng chúng tôi tiếp tục chung tay góp phần bảo vệ môi trường.</h3>
                    
                
                </div>

                <br></br> <br></br> <br></br> 
            </div>


        </div>
    );
}

export default memo(Fundraising);
