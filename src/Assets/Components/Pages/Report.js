
import '../../CSS/Report.css';

const Report = () => {
    return (
      <div>
        <div className="report" >
          &emsp;
          <div className="container" style={{width: "80%"}}>
            <h1 className="title">Thực trạng</h1>
            <div className="row">
                
                  <p className="left-text">
                  Các số liệu của Tổng cục Thống kê cho thấy, trong 10 năm của giai đoạn 2009-2018, nạn cháy rừng đã thiêu hủy gần 22 nghìn ha rừng của Việt Nam, gây thiệt hại lớn về kinh tế cho đất nước.
                  </p>
                <div><img className="report_img_1" src="external/Thuc-trang-cong-tac-phong-chay-chua-chay-rung1.jpg " alt='pccc'></img></div>
            </div>
            <div className="row">
                <img className="report_img_1" src="external/van-nan-chay-rung-o-viet-nam.jpg" alt='vấn nạn cháy rừng'></img>
                <p className="right-text">
                Đỉnh điểm của giai đoạn này là vào năm 2010, khoảng 6.723 ha rừng đã bị lửa lớn thiêu rụi do nắng hạn kéo dài; năm 2007 xảy ra 749 vụ cháy rừng gây thiệt hại 4.188 ha. Vài năm trở lại đây, diện tích rừng bị cháy tuy có giảm mạnh, nhưng vẫn tồn tại những diễn biến bất ngờ và phức tạp khó lường
                </p>                
            </div>
            <div className="row" style={{ paddingBottom: "0px"}}>
                <p className="left-text">
                Vài năm trở lại đây, diện tích rừng bị cháy tuy có giảm mạnh, nhưng vẫn tồn tại những diễn biến bất ngờ và phức tạp khó lường. Đến năm 2018, thiệt hại do cháy rừng tuy có tăng so với năm 2017 (739,1 ha) nhưng nhìn chung, thiệt hại vẫn ở mức thấp so với các năm khác. Tuy nhiên, trong 10 tháng năm 2019, diện tích rừng bị cháy lại tăng lên đến 2,7 nghìn ha, gấp 3,6 lần năm 2018.                </p>
                <img className="report_img_1" src="external/5-9chay.jpg " alt='Cháy rừng'></img>
                
            </div>
          </div>
          <div className="contact">
            <p style={{color: "orangered"}} className="contact-title">Khi phát hiện cháy rừng người dân địa phương ngay lập tức báo động và thông báo cho chính quyền địa phương và lực lượng chữa cháy chuyên nghiệp qua số điện thoại</p>
            <br></br><br></br> <br></br> 
            <div className='contact-row'>
              <div className="column">
                Ban Chỉ đạo Nhà nước về kế hoạch bảo vệ và phát triển rừng<br></br> <br></br> 
                <span style={{ color: "orangered", fontSize: "1.5rem" }}>1900 969 960</span>
              </div>
              <div className="column">
                  Đội chữa cháy rừng khẩn cấp<br></br><br></br><br></br> 
                  <span style={{ color: "orangered", fontSize: "1.5rem" }}>114</span>
              </div>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br> 
        </div>
        
        
      </div>
    )
}

export default Report
