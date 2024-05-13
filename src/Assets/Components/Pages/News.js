import { memo } from 'react'

import '../../CSS/News.css'




const News = (props) => {
  return (
    <div className="News">
          <div className='intro-img'></div>

 
      <div className="news__blogs" style={{marginTop:'200px'}}>
        <div className="left__column">

          <div className="news__card">
            <h2 className="card__heading">Cháy rừng vượt tầm kiểm soát ở Tây Ban Nha</h2>
            <h5 className="card__description">VTV.vn - Hơn 500 người đã phải sơ tán khi các đám cháy rừng lan rộng, vượt tầm kiểm soát ở phía Tây của Tây Ban Nha, khu vực giáp biên giới Bồ Đào Nha.</h5>
            <div className="card__img bg1"></div>
            <p className="card__text">Đám cháy đã thiêu rụi ít nhất 1500 ha rừng, hàng trăm lính cứu hỏa được điều động. Tuy nhiên thời tiết khô hanh và gió lớn khiến việc dập lửa rất khó khăn.

Giới chức địa phương cho biết, nhiều khả năng vụ cháy rừng này là hành động có chủ ý, tuy nhiên không cho biết thêm thông tin chi tiết.

Năm ngoái, Tây Ban Nha ghi nhận gần 500 vụ cháy rừng, con số cao kỷ lục.</p>

          </div>


          <div className="news__card">
            <h2 className="card__heading">Cháy rừng lan rộng ở miền Tây Canada</h2>
            <h5 className="card__description">VTV.vn - Các đám cháy rừng lan rộng ở tỉnh Alberta, miền Tây Canada đang gây tác động xấu đến chất lượng không khí, ảnh hưởng đến hoạt động khai thác dầu.</h5>
            <div className="card__img bg2"></div>
            <p className="card__text">Chất lượng không khí kém, tầm nhìn giảm do thời tiết khô hanh, trong khi gió đổi chiều làm tăng nguy cơ cháy rừng lan rộng.

Các đám cháy rừng ở Alberta buộc các nhà sản xuất dầu mỏ và khí đốt phải tạm ngừng hoạt động một số cơ sở, làm giảm sản lượng tương đương 319.000 thùng dầu/ngày.

Giá dầu thô nặng của Canada đã tăng lên các mức cao do những quan ngại về các vụ cháy rừng.

Chính quyền tỉnh Alberta cho biết, trên toàn tỉnh đang xảy ra khoảng 90 vụ cháy rừng, trong đó 23 vụ ngoài tầm kiểm soát, buộc khoảng 20.000 người dân phải sơ tán.</p>

          </div>


        </div>
        <div className="right__column">
          <div className="news__card">
            {/* <h2 className="card__heading"></h2> */}
            <div className="card__img bg3">
            </div>
            <p className="card__text"> </p>      
          </div>

          <div className="news__card">
            <h3 className="card__section">Popular Post</h3>
            <div className="card__img bg4"></div>
            <div className="card__img bg5"></div>
            <div className="card__img bg6"></div>
          </div>


          <div className="news__card">
            <h3 className="card__section">FireWing</h3>
            <p className="card__text"></p>
          </div>
        </div>
      </div>


    </div>

  )
}


export default memo(News)
