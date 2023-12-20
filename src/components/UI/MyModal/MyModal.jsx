import classes from '/MyModal.module.css'

const MyModal = ({children}) => {
  return (
    <div className={classes.myModal}>
      <div className={classes.myModalContent}></div>
      {children}
    </div>
  )
}

export default MyModal;