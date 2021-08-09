import './index.css'

const LoadMoreBtn = ({ onLoad, disabled }) => {

  return (
    <div className='LoadMore'>
      <button className="Button2" onClick={onLoad} disabled={disabled}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
