import React,{useState} from 'react'
const PictureBigger: React.FC = () => {
  const [showMask,setShowMask] = useState(false)
  const getX = orgPic.offsetLeft//这是节点距离左侧长度
  const getY = orgPic.offsetTop
  function moveOrigin() {
    mask.style.display = 'block'
    afrPic.style.display = 'block'
    mask.style.left = ev.clientX - getX - 50 + 'px'
    mask.style.top = ev.clientY - getY - 50 + 'px'
    //方块宽度的一半作为边界，即使鼠标超过边界，mask相应的位置也不会改变
    if (ev.clientX - getX - 50 < 0) {
      mask.style.left = '0'
    }
    if (ev.clientX - getX + 50 > 300) {
      mask.style.left = '200px'
    }
    if ((ev.clientY - getY + 50) < 100) {
      mask.style.top = '0'
    }
    if ((ev.clientY - getY + 50) > 400) {
      mask.style.top = '300px'
    }
    //设置大照片的位置跟随鼠标变化
    bigPic.style.marginTop = (-(ev.clientY - getY - 50) * 4) + 'px'
    bigPic.style.marginLeft = (-(ev.clientX - getX - 50) * 4) + 'px'
    if ((ev.clientY - getY - 50) < 0) {
      bigPic.style.marginTop = '0px'
    };
    if ((ev.clientY - getY - 50) > 300) {
      bigPic.style.marginTop = '-1200px'
    };
    if ((ev.clientX - getX - 50) < 0) {
      bigPic.style.marginLeft = '0'
    };
    if ((ev.clientX - getX - 50) > 200) {
      bigPic.style.marginLeft = '-800px'
    };
  }
  function leaveOrigin() {
    setShowMask(false)
    afrPic.style.display = 'none'
  }

  return (
    <div>
      <div onMouseMove={moveOrigin} onMouseLeave={leaveOrigin}>
        <img src="@/asset/image/animate.png" alt="#" />
        <div id="mask"></div>
      </div>
      <div>
        <img src="./img/5633.png" alt="#" />
      </div>
    </div>
  )
}
export default PictureBigger