import './index.css'

const Tabs = props => {
  const {dataTabs, id, changeTabId} = props
  const lineStyle = id === dataTabs.menuCategoryId ? 'under-line' : ''
  const changeTab = event => {
    changeTabId(event.currentTarget.id)
    console.log(event.currentTarget.id)
  }
  return (
    
      <button
        type="button"
        className={`list-items-tabs ${lineStyle} tab-buttons`}
        onClick={changeTab}
        id={dataTabs.menuCategoryId}
      >
        {dataTabs.menuCategory}
      </button>
    
  )
}
export default Tabs
